import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectNameFilter = (state) => state.filter.query;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter], 
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) || 
        contact.number.includes(normalizedFilter)
    );
  }
);
