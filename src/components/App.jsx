import { ContactForm } from './ContactForm/ContactForm';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactElement } from './ContactElement/ContactElement';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    return this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
      filter: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  findContact = input => {
    const filteredContact = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(input.toLowerCase());
    });

    return this.setState({
      filter: input ? filteredContact : '',
    });
  };
  render() {
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter onSearch={this.findContact} />
        {this.state.filter.length > 0 ? (
          <ContactElement
            contacts={this.state.filter}
            onDelete={this.deleteContact}
          />
        ) : (
          <ContactsList
            contacts={this.state.contacts}
            onDelete={this.deleteContact}
          />
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
