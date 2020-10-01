import React, { Fragment } from "react";
import styled from "styled-components";
import { Image, Button, Row } from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InvoicesTable from "../../../components/InvoicesTable";
import printer from "../../../assets/printer.svg";

const Title = styled.p`
  font-weight: bold;
`;
const FirstRow = styled(Row)`
  box-sizing: border-box;
  justify-content: space-between;
  border: 1px solid purple;
  height: 2em;
  margin-top: 0;
`;

const AddButton = styled(Button)`
  height: 100%;
  width: 10em;
  font-size: 0.75em;
  font-weight: bold;
`;
export default function SalesInvoice() {
  return (
    <Fragment>
      <FirstRow className="p-0 w-100 mx-0">
        <Title>
          Sales invoice
          <Image
            src={`${printer}`}
            alt={"printer"}
            width="20px"
            height="20px"
            className="ml-2"
          />
        </Title>
        <AddButton>
          <FontAwesomeIcon icon={faPlus} className="mr-1" />
          new invoice
        </AddButton>
      </FirstRow>
      <InvoicesTable className="" />
    </Fragment>
  );
}
