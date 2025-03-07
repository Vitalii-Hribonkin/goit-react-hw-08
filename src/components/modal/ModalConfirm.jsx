
import Modal from "react-modal";
import styles from "./ModalConfirm.module.css"; 

const ModalConfirm = ({ isOpen, onRequestClose, onConfirmDelete }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Delete"
      ariaHideApp={false}
      className={styles.modal} 
    >
      <h2>Are you sure you want to delete this contact?</h2>
      <div>
        <button onClick={onRequestClose}>Cancel</button>
        <button onClick={onConfirmDelete}>Delete</button>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
