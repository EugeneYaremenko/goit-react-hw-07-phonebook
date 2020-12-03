import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import Wrapper from './Wrapper/Wrapper';
import Section from './Section/Section';
import ErrorNotification from './Notification/ErrorNotification';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Spinner from './Spinner/Spinner';
import contactsOperations from '../redux/contacts/contactsOperations';
import contactsSelectors from '../redux/contacts/contacts-selectors';

import contactListFade from '../components/ContactList/fade.module.css';
import filterFade from '../components/Filter/fade.module.css';
import errorFade from '../components/Notification/fade.module.css';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <Wrapper>
        <CSSTransition timeout={2500} classNames={errorFade} unmountOnExit>
          <ErrorNotification />
        </CSSTransition>

        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          <CSSTransition timeout={250} classNames={filterFade}>
            <Filter />
          </CSSTransition>
          {this.props.isLoadingContacts && <Spinner />}
        </Section>

        <CSSTransition timeout={250} classNames={contactListFade}>
          <ContactList />
        </CSSTransition>
      </Wrapper>
    );
  }
}

const mapStateToPrors = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContact,
};

export default connect(mapStateToPrors, mapDispatchToProps)(App);
