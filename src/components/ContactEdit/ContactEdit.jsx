import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik"; // Import Formik components
import * as Yup from "yup"; // Import Yup for validation
import { updateContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import s from './ContactEdit.module.css'

const ContactEdit = ({ contact, closeModal }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    number: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must only contain numbers")
      .min(10, "Phone number must be at least 10 digits"),
  });

  // Handle the update and close modal
  const handleSubmit = (values) => {
    dispatch(updateContact({ contactId: id, updatedContact: values }))
      .then(() => {
        toast.success("Contact updated successfully!");
        closeModal();
      })
      .catch(() => {
        toast.error("Failed to update contact");
      });
  };

  return (
    <div className={s.container}>
      <h4 className={s.h4}>Edit Contact</h4>

      <Formik
        initialValues={{ name, number }}
        validationSchema={validationSchema} 
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div className={s.cont}>
            <label className={s.label} htmlFor="name">Name:</label>
            <Field
              className={s.field}
              id="name"
              name="name"
              type="text"
              placeholder="Name"
            />
            <ErrorMessage name="name" component="div" style={{ color: "red" }} />
          </div>

          <div className={s.container}>
            <label className={s.label} htmlFor="number">Phone Number:</label>
            <Field
              className={s.field}
              id="number"
              name="number"
              type="text"
              placeholder="Phone Number"
            />
            <ErrorMessage name="number" component="div" style={{ color: "red" }} />
          </div>

          <div className={s.btn_cont}>
            <button className={s.btn} type="submit">Update</button>
            <button className={s.btn} type="button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactEdit;
