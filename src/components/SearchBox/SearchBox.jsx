import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { setFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values) => {
        dispatch(setFilter(values.query));
      }}
    >
      <Form >
        <Field
          type="text"
          name="query"
          placeholder="Search contacts"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBox;
