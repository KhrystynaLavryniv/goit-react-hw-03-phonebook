import React from "react";
import PropTypes from "prop-types";

import ContactItem from "../ContactItem/ContactItem";

export default function ContactList({ visibleContacts, onDelete }) {
  return (
    <>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
          onClick={onDelete}
        ></ContactItem>
      ))}
    </>
  );
}
ContactList.propTypes = {
  visibleContacts: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
};
