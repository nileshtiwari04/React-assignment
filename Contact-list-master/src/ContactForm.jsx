// src/components/ContactForm.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from './contactsSlice';

const ContactForm = ({ existingContact, onEditComplete }) => {
  const [name, setName] = useState(existingContact ? existingContact.name : '');
  const [surname, setSurname] = useState(existingContact ? existingContact.surname : '');
  const [mobile, setMobile] = useState(existingContact ? existingContact.mobile : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = { name, surname, mobile };

    if (existingContact) {
      dispatch(updateContact({ id: existingContact.id, data: contactData }));
      onEditComplete();
    } else {
      dispatch(addContact(contactData));
    }
    setName('');
    setSurname('');
    setMobile('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Surname" />
      <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile" />
      <button type="submit">{existingContact ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ContactForm;
