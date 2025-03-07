import { Link } from "react-router-dom";
import styles from "./NotFound.module.css"; // Импортируйте CSS

const NotFound = () => {
  return (
    <div className={styles["not-found"]}>
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
};

export default NotFound;
