import React from "react";
import { Component } from "react";
import { Container } from "./components/ContactsForm/ContactsForm.style";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import Filter from "./components/Filter/Filter";
import shortid from "shortid";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem(this.state.contacts);
    const parsedContacts = JSON.parse(contacts);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (
      !contacts.find(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    } else {
      alert(`${newContact.name} is already in contacts`);
    }
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleDeleteContact = (e) => {
    const contactId = e.currentTarget.id;
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <Container>
        <h2>Phonebook</h2>

        <ContactsForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />

        <ContactList
          contacts={contacts}
          visibleContacts={this.getVisibleContacts()}
          onDelete={this.handleDeleteContact}
        />
      </Container>
    );
  }
}

export default App;
