import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { setFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css"; 

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values) => {
        dispatch(setFilter(values.query));
      }}
    >
      <Form className={s.container}>
        <Field
          className={s.field}
          type="text"
          name="query"
          placeholder="Search contacts"
        />
        <button className={s.btn} type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBox;
