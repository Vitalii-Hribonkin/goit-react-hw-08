// Contact.js
import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import ModalConfirm from "../modal/ModalConfirm";
import ContactEdit from "../ContactEdit/ContactEdit";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import s from './Contacts.module.css'

const Contact = ({ contact }) => {
  const { name, number, id } = contact;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .then(() => {
        toast.success('Contact deleted successfully!');
        closeModal();
      })
      .catch(() => {
        toast.error('Failed to delete contact');
      });
  };

  return (
    <>
      <h4 className={s.h4}>
        {name}
      </h4>
      <p className={s.p}>
        {number}
      </p>
      <div className={s.cont_btn}>
        <button className={s.btn} onClick={openEditModal}>Edit</button>
      <button className={s.btn} onClick={openModal}>Delete Contact</button>
      </div>
      

      {isEditModalOpen && (
        <ContactEdit contact={contact} closeModal={closeEditModal} />
      )}

      <ModalConfirm
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onConfirmDelete={handleDelete}
      />
    </>
  );
};

export default Contact;
