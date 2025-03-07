import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../auth/operations";  

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await api.get('/contacts'); 
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await api.post('/contacts', contact);  
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await api.delete(`/contacts/${contactId}`); 
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact", 
  async ({ contactId, updatedContact }, thunkAPI) => {
    try {
      const response = await api.patch(`/contacts/${contactId}`, updatedContact);  
      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); 
    }
  }
);