import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";


export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome {user.name}</p>
      <button onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu