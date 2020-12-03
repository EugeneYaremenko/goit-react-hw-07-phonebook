import axios from 'axios';
import contactsActions from './contactsActions';

axios.defaults.baseURL = 'http://localhost:2000';

const addContact = (name, number) => dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(response => {
      dispatch(contactsActions.addContactSuccess(response.data));
    })
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const fetchContact = () => dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get('/contacts')
    .then(response => {
      dispatch(contactsActions.fetchContactsSuccess(response.data));
    })
    .catch(error => dispatch(contactsActions.fetchContactsError(error)));
};

const removeContact = id => dispatch => {
  dispatch(contactsActions.removeContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactsSuccess(id)))
    .catch(error => dispatch(contactsActions.removeContactsError(error)));
};

export default {
  addContact,
  fetchContact,
  removeContact,
};
