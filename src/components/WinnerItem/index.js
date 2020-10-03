import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import avatar from "../../assets/Profilepic.png";

const Wrapper = styled.div`
  border: 1px solid orange;
  margin-top: ${(props) => props.marginTop};
`;
const Name = styled.p`
  font-size: 0.7em;
  font-weight: 600;
  color: grey;
  margin-bottom: 0.5em;
`;
const Winner = styled(Image)`
  box-sizing: border-box;
  height: 3em;
  width: 3em;
  border-radius: 50%;
  text-align: center;
`;

export default function WinnerItem(props) {
  const { name } = props;
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Winner src={avatar} fluid />
    </Wrapper>
  );
}
WinnerItem.propTypes = {
  name: PropTypes.string,
  marginTop: PropTypes.string,
};
