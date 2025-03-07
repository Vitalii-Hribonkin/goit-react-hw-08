import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import s from './ContactList.module.css'

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.ul}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <li className={s.li} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))
      ) : (
        <p className={s.p}>No contacts found</p>
      )}
    </ul>
  );
};

export default ContactList;
