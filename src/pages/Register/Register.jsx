import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import s from "./Register.module.css"; 

const Register = () => {
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
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            <span>Name:</span>
            <Field className={s.field} name='name' />
          </label>
          <label>
            <span>Email:</span>
            <Field className={s.field} name='email' />
          </label>
          <label>
            <span>Password:</span>
            <Field className={s.field} name='password' type='password' />
          </label>
          <button className={s.btn} type="submit">Register</button>
          <p>You have an account? <Link to='/login'>Just log in</Link></p>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
