import React from 'react';
import { connect } from 'react-redux';
import styles from '../ContactList/contactList.module.css';
/* import contactsActions from '../../redux/contacts/contactsActions'; */
import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

const ContactListItem = ({ name, number, onRemoveContact }) => {
  return (
    <li className={styles.listItem}>
      <div>
        {name}: {number}
      </div>
      <button
        className={styles.deleteBtn}
        type="button"
        onClick={onRemoveContact}
      >
        Delete
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const item = contactsSelectors.getContactById(state, ownProps.id);

  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () =>
    dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
