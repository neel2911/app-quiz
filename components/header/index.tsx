import React from "react";
import styled from "styled-components";
import Navigation from "../navigation";

const WrapperContainer = styled.div`
  height: 70px;
  display: flex;
  lign-items: center;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding-left: 20px;
`;
const Header: React.FC<{}> = () => {
  return (
    <WrapperContainer>
      <h1>This is Header</h1>
      <Navigation />
    </WrapperContainer>
  );
};

export default Header;
