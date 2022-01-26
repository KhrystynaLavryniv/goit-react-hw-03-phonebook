import React from "react";
import PropTypes from "prop-types";

import { Item, ItemBtn } from "./ContactItem.style";

function ContactItem({ id, name, number, onClick }) {
  return (
    <Item>
      {name}:{number}
      <ItemBtn type="button" id={id} onClick={onClick}>
        Delete
      </ItemBtn>
    </Item>
  );
}
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
