import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import s from './Header.module.css';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
      {user.name && (
        <div className={s.container}>
          <h2 className={s.h2}>{user.name}</h2>
          <p className={s.p}>{user.email}</p>
        </div>
      )}
      <nav className={s.nav}>
        <NavLink className={({ isActive }) => isActive ? s.activeNavlink : s.navlink} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? s.activeNavlink : s.navlink} to="/contacts">Contacts</NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={({ isActive }) => isActive ? s.activeNavlink : s.navlink} to="/register">Register</NavLink>
            <NavLink className={({ isActive }) => isActive ? s.activeNavlink : s.navlink} to="/login">Login</NavLink>
          </>
        )}
        {isLoggedIn && (
          <button className={s.btn} onClick={() => dispatch(logoutThunk())}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
