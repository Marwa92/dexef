import React from "react";
import { FormGroup } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormControl from "react-bootstrap/FormControl";
const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  display: block;
  text-align: center;
  top: 1em;
  left: 0.5em;
`;
const SearchControl = styled(FormControl)`
  box-sizing: border-box;
  padding-left: 2em;
  height: 3em;
  border-top: none;
  border-bottom: none;
  border-right: 1px solid #e2e3e4;
  border-radius: 0px;
  color: #e2e3e4;
  font-size: 0.938em;
  line-height: 1.188em;
  :focus {
    border-right: 1px solid #e2e3e4;
    border-left: 0;
    -webkit-appearance: none;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    opacity: 0;
  }
`;
export default function SearchField() {
  return (
    <FormGroup>
      <SearchIcon icon={faSearch} color="#ACADAF" />
      <SearchControl
        required
        className="input"
        type="number"
        placeholder="Invoice numbers"
      />
    </FormGroup>
  );
}
