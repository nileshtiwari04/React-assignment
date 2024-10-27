// src/components/ContactList.jsx


// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchContacts, deleteContact } from './contactsSlice';
// import ContactForm from './ContactForm';

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector((state) => state.contacts.contacts);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteContact(id));
//   };

//   return (
//     <div>
//       <h2>Contact List</h2>
//       <ContactForm />
//       <table>
//         <thead>
//           <tr>
//             <th>Profile</th>
//             <th>Name</th>
//             <th>Surname</th>
//             <th>Mobile</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contacts.map((contact) => (
//             <tr key={contact.id}>
//               <td>👤</td>
//               <td>{contact.name}</td>
//               <td>{contact.surname}</td>
//               <td>{contact.mobile}</td>
//               <td>
//                 <button onClick={() => handleDelete(contact.id)}>🗑️</button>
//                 <button>✏️</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ContactList;


import React, { useState } from 'react';
import { Heart, Pencil, Trash2, User } from 'lucide-react';

const ContactManager = () => {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Nilesh ', surname: 'Tiwari', mobile: '9572/143786', favorite: false },
    { id: '2', name: 'Ullu', surname: 'Singh', mobile: '786/985123', favorite: false }
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [nameFilter, setNameFilter] = useState('');
  const [surnameFilter, setSurnameFilter] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const [newContact, setNewContact] = useState({
    name: '',
    surname: '',
    mobile: ''
  });

  const filteredContacts = contacts.filter(contact => {
    const nameMatch = contact.name.toLowerCase().includes(nameFilter.toLowerCase());
    const surnameMatch = contact.surname.toLowerCase().includes(surnameFilter.toLowerCase());
    const favoriteMatch = showFavorites ? contact.favorite : true;
    return nameMatch && surnameMatch && favoriteMatch;
  });

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setIsEditing(true);
  };

  const handleEditComplete = (updatedContact) => {
    setContacts(contacts.map(c => 
      c.id === updatedContact.id ? updatedContact : c
    ));
    setIsEditing(false);
    setSelectedContact(null);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (newContact.name && newContact.surname && newContact.mobile) {
      const newId = String(Date.now());
      setContacts([...contacts, { ...newContact, id: newId, favorite: false }]);
      setNewContact({ name: '', surname: '', mobile: '' });
    }
  };

  const toggleFavorite = (id) => {
    setContacts(contacts.map(contact =>
      contact.id === id ? { ...contact, favorite: !contact.favorite } : contact
    ));
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 p-6">
      {/* Left Sidebar */}
      <div className="w-80 bg-white/10 backdrop-blur-lg rounded-2xl p-6 mr-6 shadow-xl">
        <div className="flex items-center space-x-3 text-white mb-8">
          <div className="bg-purple-500 p-2 rounded-full">
            <User className="w-6 h-6" />
          </div>
          <span className="text-lg font-semibold">Nilesh Tiwari</span>
        </div>

        <div className="space-y-4">
          <button 
            className={`w-full ${!showFavorites ? 'bg-purple-500' : 'bg-purple-800/50'} text-white p-3 rounded-xl flex items-center space-x-3 transition-all hover:bg-purple-500`}
            onClick={() => setShowFavorites(false)}
          >
            <User className="w-5 h-5" />
            <span>All contacts</span>
            <span className="ml-auto bg-purple-700 px-3 py-1 rounded-lg">
              {contacts.length}
            </span>
          </button>

          <button 
            className={`w-full ${showFavorites ? 'bg-purple-500' : 'bg-purple-800/50'} text-white p-3 rounded-xl flex items-center space-x-3 transition-all hover:bg-purple-500`}
            onClick={() => setShowFavorites(true)}
          >
            <Heart className="w-5 h-5" />
            <span>Favourites</span>
            <span className="ml-auto bg-purple-700 px-3 py-1 rounded-lg">
              {contacts.filter(c => c.favorite).length}
            </span>
          </button>

          <form onSubmit={handleAdd} className="space-y-3 mt-8">
            <input
              type="text"
              placeholder="Name"
              value={newContact.name}
              onChange={(e) => setNewContact({...newContact, name: e.target.value})}
              className="w-full p-3 rounded-xl bg-purple-800/30 text-white placeholder-purple-300 border border-purple-500/30 focus:border-purple-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Surname"
              value={newContact.surname}
              onChange={(e) => setNewContact({...newContact, surname: e.target.value})}
              className="w-full p-3 rounded-xl bg-purple-800/30 text-white placeholder-purple-300 border border-purple-500/30 focus:border-purple-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Mobile"
              value={newContact.mobile}
              onChange={(e) => setNewContact({...newContact, mobile: e.target.value})}
              className="w-full p-3 rounded-xl bg-purple-800/30 text-white placeholder-purple-300 border border-purple-500/30 focus:border-purple-500 focus:outline-none"
            />
            <button 
              type="submit"
              className="w-full bg-purple-500 text-white p-3 rounded-xl hover:bg-purple-400 transition-colors font-semibold"
            >
              Add Contact
            </button>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-2xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-bold text-gray-800">Contact List</div>
          <input
            type="text"
            placeholder="Search by name..."
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="p-3 rounded-xl border border-gray-200 w-64 focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-3 text-left font-semibold text-gray-600">Profile</th>
                <th className="p-3 text-left font-semibold text-gray-600">Name</th>
                <th className="p-3 text-left font-semibold text-gray-600">Surname</th>
                <th className="p-3 text-left font-semibold text-gray-600">Mobile</th>
                <th className="p-3 text-left font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr key={contact.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-3">
                    <div className="bg-purple-100 p-2 rounded-full w-fit">
                      <User className="w-5 h-5 text-purple-600" />
                    </div>
                  </td>
                  <td className="p-3 text-gray-800">{contact.name}</td>
                  <td className="p-3 text-gray-800">{contact.surname}</td>
                  <td className="p-3 text-gray-800">{contact.mobile}</td>
                  <td className="p-3">
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => handleEdit(contact)}
                        className="p-1 hover:bg-blue-50 rounded-full transition-colors"
                      >
                        <Pencil className="w-4 h-4 text-blue-500" />
                      </button>
                      <button 
                        onClick={() => handleDelete(contact.id)}
                        className="p-1 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                      <button 
                        onClick={() => toggleFavorite(contact.id)}
                        className="p-1 hover:bg-pink-50 rounded-full transition-colors"
                      >
                        <Heart 
                          className={`w-4 h-4 ${contact.favorite ? 'text-pink-500 fill-pink-500' : 'text-gray-400'}`}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edit Modal */}
        {isEditing && selectedContact && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-6 rounded-2xl w-96 shadow-2xl">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Contact</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleEditComplete(selectedContact);
              }} className="space-y-4">
                <input
                  type="text"
                  value={selectedContact.name}
                  onChange={(e) => setSelectedContact({
                    ...selectedContact,
                    name: e.target.value
                  })}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
                />
                <input
                  type="text"
                  value={selectedContact.surname}
                  onChange={(e) => setSelectedContact({
                    ...selectedContact,
                    surname: e.target.value
                  })}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
                />
                <input
                  type="text"
                  value={selectedContact.mobile}
                  onChange={(e) => setSelectedContact({
                    ...selectedContact,
                    mobile: e.target.value
                  })}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
                />
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 bg-purple-500 text-white px-4 py-2 rounded-xl hover:bg-purple-400 transition-colors font-semibold"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="flex-1 bg-gray-100 text-gray-600 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactManager;