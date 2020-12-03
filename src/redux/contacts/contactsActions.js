import { createAction } from '@reduxjs/toolkit';
/* import { v4 as uuidv4 } from 'uuid'; */
/* import actionsTypes from './contactsActionsTypes'; */

/* const addContact = (name, number) => ({
  type: actionsTypes.ADD,
  payload: {
    contact: { id: uuidv4(), name, number },
  },
}); */

/* const removeContact = contactId => ({
  type: actionsTypes.REMOVE,
  payload: {
    contactId,
  },
}); */

/* const changeFilter = filter => ({
  type: actionsTypes.CHANGE_FILTER,
  payload: {
    filter,
  },
}); */

/* const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    contact: { id: uuidv4(), name, number },
  },
})); */

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');

const removeContactsRequest = createAction('contacts/removeRequest');
const removeContactsSuccess = createAction('contacts/removeSuccess');
const removeContactsError = createAction('contacts/removeError');

/* const removeContact = createAction('contacts/remove'); */
const changeFilter = createAction('contacts/change');

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
  /*   addContact, */
 /*  removeContact, */
  changeFilter,
};
