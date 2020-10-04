import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../assets/Profilepic.png";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
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
`;

const Label = styled.div`
  background-image: linear-gradient(#bda6f7, white);
  height: auto;
  width: 80%;
  flex: 1;
  color: #592fc3;
  font-weight: 600;
  font-size: 2em;
`;
const Num = styled.p`
  font-weight: 400;
  font-size: 0.4em;
`;
export default function WinnerItem(props) {
  const { name, bgColor, rank, number } = props;

  return (
    <Wrapper>
      <Name>{name}</Name>
      <Winner src={avatar} fluid className="mx-auto" />
      <Label className="pt-3 mx-auto">
        {rank}
        <Num>
          <FontAwesomeIcon id="icon" icon={faShoppingCart} className="mr-2" />
          {number}
        </Num>
      </Label>
    </Wrapper>
  );
}
WinnerItem.propTypes = {
  name: PropTypes.string,
  rank: PropTypes.string,
  number: PropTypes.string,
  //   TODO send label background color as props
  bgColor: PropTypes.string,
};
