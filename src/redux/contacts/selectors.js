export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = (state) => {
  const contacts = state.contacts.items;
  const filter = state.filter.query.toLowerCase(); // тут мы используем query, а не name

  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter) || 
      contact.number.includes(filter)
  );
};
