import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { useState } from "react";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
  });

  const handleSubmit = (values, options) => {
    setLoading(true);
    dispatch(loginThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.name}`);
        navigate('/', { replace: true });
      })
      .catch((error) => {
        toast.error(error.message || 'Invalid data');
      })
      .finally(() => {
        setLoading(false);
        options.resetForm();
      });
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({ isSubmitting }) => (
          <Form>
            <label>
              <span>Email:</span>
              <Field name='email' type='email' placeholder='Enter your email' autoComplete='email' aria-label='Email' />
              <ErrorMessage name='email' component='div' style={{ color: 'red', fontSize: '12px' }} />
            </label>
            <label>
              <span>Password:</span>
              <Field name='password' type='password' placeholder='Enter your password' autoComplete='current-password' aria-label='Password' />
              <ErrorMessage name='password' component='div' style={{ color: 'red', fontSize: '12px' }} />
            </label>
            <button type="submit" disabled={loading || isSubmitting}>
              {loading ? "Logging in..." : "Login"}
            </button>
            <p>You don`t have an account yet? <Link to='/register'>Just do it</Link></p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
