import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';

const ContactPage = () => {


    const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
    
  return (
      <>
         <ContactForm />
        <SearchBox />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ContactList />
      </>
  )
}

export default ContactPage