// contactsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, updateContact } from "./operations"; // Импортируем все операции

const initialState = {
  items: [], // Список контактов
  loading: false, // Статус загрузки
  error: null, // Ошибки
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload); 
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((contact) => contact.id !== action.payload); // Удаляем контакт
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(contact => contact.id === action.payload.id); // Находим индекс обновлённого контакта
        if (index !== -1) {
          state.items[index] = action.payload; 
        }
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
