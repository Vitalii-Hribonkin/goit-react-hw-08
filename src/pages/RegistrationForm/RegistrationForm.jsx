import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    name: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form >
          <label>
            <span>Name:</span>
            <Field  name='name' />
          </label>
          <label>
            <span>Email:</span>
            <Field  name='email' />
          </label>
          <label>
            <span>Password:</span>
            <Field  name='password' type='password' />
          </label>
          <button type="submit">Register</button>
          <p>You have an account? <Link to='/login'>Just log in</Link></p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
