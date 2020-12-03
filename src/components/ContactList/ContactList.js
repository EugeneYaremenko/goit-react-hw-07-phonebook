import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './contactList.module.css';
import fade from './fade.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(({ id }) => (
        <CSSTransition key={id} timeout={250} classNames={fade}>
          <ContactListItem key={id} id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContact(state),
});

export default connect(mapStateToProps)(ContactList);
