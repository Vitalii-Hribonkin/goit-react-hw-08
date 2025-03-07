import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import { Layout } from "./components/Layout";
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute";
import ContactPage from "./pages/Contact/СontactPage";
import Home from "./pages/Home/Home";
import RestrictedRoute from "./components/RestrictedRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)
   
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return isRefreshing ? null : (
    <>
    <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Layout />}>  
          <Route index element={<Home />} />
          <Route path='/contacts'element={<PrivateRoute>
            <ContactPage />
          </PrivateRoute>} />
        </Route>
          <Route path="/register" element={<RestrictedRoute component={<Register />} redirectTo="/"></RestrictedRoute>}/>
          <Route path="/login" element={<RestrictedRoute component={<Login/>} redirectTo="/"></RestrictedRoute>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
};

export default App;
