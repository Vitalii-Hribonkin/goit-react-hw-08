import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import { Layout } from "./components/Layout";
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute"; 
import RestrictedRoute from "./components/RestrictedRoute";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import LoginForm from "./pages/LoginForm/LoginForm";
import ContactsPage from "./pages/ContactPage/ContactPage";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return null;
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />

          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login"/>
            }
          />
        </Route>

        <Route
          path="/register"
          element={<RestrictedRoute component={RegistrationForm} redirectTo="/contacts" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={LoginForm} redirectTo="/contacts" />}
        />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
