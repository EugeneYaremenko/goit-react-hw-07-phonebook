import React, { Component } from 'react';
import { connect } from 'react-redux';
/* import contactsActions from '../../redux/contacts/contactsActions'; */
import contactsOperations from '../../redux/contacts/contactsOperations';
import styles from './contactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;

    e.preventDefault(); 

    this.props.handleAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={this.handleNameChange}
          ></input>
        </label>

        <label>
          Number
          <input
            type="number"
            value={number}
            onChange={this.handleNumberChange}
          ></input>
        </label>
        <button type="submit" className={styles.addButton}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  handleAddContact: contactsOperations.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
