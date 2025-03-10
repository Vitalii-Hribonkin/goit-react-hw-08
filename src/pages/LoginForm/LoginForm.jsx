import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const LoginForm = () => {
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
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Email:</span>
            <Field  name='email' />
          </label>
          <label>
            <span >Password:</span>
            <Field  name='password' type='password' />
          </label>
          <button  type="submit">Login</button>
          <p >You don`t have an account yet? <Link to='/register'>Just do it</Link></p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm