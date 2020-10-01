import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { DexefContext } from "../../utils/DexefContext";

const CustomTable = styled(Table)`
  border-collapse: separate;
  border-spacing: 0 0.7em;
  text-align: center;
  th {
    background-color: white;
    color: grey;
    font-weight: normal;
    font-size: 1em;
  }
  tr,
  tbody > tr:nth-child(2n + 1) > td {
    height: 1em;
    background-color: white;
  }
  tbody > tr:nth-child(2n) > td:first-child {
    border-left: 4px solid #0b78bf;
  }
  tbody > tr:nth-child(2n + 1) > td:first-child {
    border-left: 4px solid #ffc300;
  }
  tfoot > tr > td {
    background-color: #0b78bf;
    color: white;
  }
  tfoot > tr > td:first-child {
    border-left: 4px solid white;
  }
`;

export default function InvoicesTable() {
  const { invoices } = useContext(DexefContext);

  return (
    <CustomTable striped>
      <thead>
        <tr>
          <th>Invoice No.</th>
          <th>Customer</th>
          <th>Sold Items</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map(function (e, i) {
          return (
            <tr key={i}>
              <td>{e.no}</td>
              <td>{e.customer}</td>
              <td>{e.sold}</td>
              <td>{e.total}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Invoices: 3</td>
          <td>Customers: 2</td>
          <td>Sold: 25</td>
          <td>Total: 3600 AED</td>
        </tr>
      </tfoot>
    </CustomTable>
  );
}
