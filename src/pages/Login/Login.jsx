import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import s from "./Login.module.css"; 

export const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.name}`);
        navigate('/', { replace: true });
      })
      .catch(() => toast.error('Invalid data'));
    options.resetForm();
  };

  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            <span className={s.p}>Email:</span>
            <Field className={s.field} name='email' />
          </label>
          <label>
            <span className={s.p}>Password:</span>
            <Field className={s.field} name='password' type='password' />
          </label>
          <button className={s.btn} type="submit">Login</button>
          <p className={s.p}>You don`t have an account yet? <Link to='/register'>Just do it</Link></p>
        </Form>
      </Formik>
    </div>
  );
};
