// src/features/contacts/contactsSlice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from './firebase';
import { collection, addDoc, deleteDoc, updateDoc, doc, getDocs } from 'firebase/firestore';

// export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
//   const snapshot = await getDocs(collection(db, 'contacts'));
//   return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// });
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, { rejectWithValue }) => {
  try {
    const snapshot = await getDocs(collection(db, 'contacts'));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const docRef = await addDoc(collection(db, 'contacts'), contact);
  return { id: docRef.id, ...contact };
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
  await deleteDoc(doc(db, 'contacts', id));
  return id;
});

export const updateContact = createAsyncThunk('contacts/updateContact', async ({ id, data }) => {
  await updateDoc(doc(db, 'contacts', id), data);
  return { id, ...data };
});


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
        if (index !== -1) {
          state.contacts[index] = action.payload;
        }
      });
  },
});

export default contactsSlice.reducer;
