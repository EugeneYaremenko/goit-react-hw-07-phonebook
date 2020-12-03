import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;

/* const getVisibleContact = state => {
  const items = getContacts(state);
  const filter = getFilter(state).toLowerCase();

  return items.filter(contact => contact.name.toLowerCase().includes(filter));
}; */

/* const getContactById = (state, contactId) => {
  const contacts = getContacts(state);

  return contacts.find(item => item.id === contactId);
}; */

const getVisibleContact = createSelector(
  [getContacts, getFilter],
  (items, filter) =>
    items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

const getContactById = createSelector(
  [(state, contactId) => contactId, getContacts],
  (contactId, contacts) => contacts.find(item => item.id === contactId),
);

export default { getLoading, getFilter, getVisibleContact, getContactById };
