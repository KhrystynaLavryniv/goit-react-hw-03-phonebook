import React from "react";
import PropTypes from "prop-types";

import { FilterInput } from "./Filter.style";
import { Label } from "../ContactsForm/ContactsForm.style";

export default function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name
      <FilterInput
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={value}
        onChange={onChange}
      />
    </Label>
  );
}
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
