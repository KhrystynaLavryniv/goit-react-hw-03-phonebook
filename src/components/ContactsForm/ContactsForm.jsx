import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import { Label, Form, AddBtn } from "./ContactsForm.style";

class ContactsForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  handleInputChange = (e) => {
    console.log(e.currentTarget);

    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
          />
        </Label>
        <Label>
          Number
          <input
            type="tel"
            name="number"
            onChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
    );
  }
}
export default ContactsForm;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
