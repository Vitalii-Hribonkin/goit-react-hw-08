import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { useState } from "react";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Must be at least 2 characters").required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
  });

  const handleSubmit = (values, options) => {
    setLoading(true);
    dispatch(registerThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.name}! Registration successful.`);
      })
      .catch((error) => {
        toast.error(error.message || 'Registration failed');
      })
      .finally(() => {
        setLoading(false);
        options.resetForm();
      });
  };

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <label>
              <span>Name:</span>
              <Field name='name' placeholder='Enter your name' aria-label='Name' autoComplete='name' />
              <ErrorMessage name='name' component='div' style={{ color: 'red', fontSize: '12px' }} />
            </label>
            <label>
              <span>Email:</span>
              <Field name='email' type='email' placeholder='Enter your email' aria-label='Email' autoComplete='email' />
              <ErrorMessage name='email' component='div' style={{ color: 'red', fontSize: '12px' }} />
            </label>
            <label>
              <span>Password:</span>
              <Field name='password' type='password' placeholder='Enter your password' aria-label='Password' autoComplete='new-password' />
              <ErrorMessage name='password' component='div' style={{ color: 'red', fontSize: '12px' }} />
            </label>
            <button type="submit" disabled={loading || isSubmitting}>
              {loading ? "Registering..." : "Register"}
            </button>
            <p>You have an account? <Link to='/login'>Just log in</Link></p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
