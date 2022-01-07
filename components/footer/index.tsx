import React from "react";
import styled from "styled-components";

const WrapperContainer = styled.div`
  height: 30px;
  display: flex;
`;

const Footer: React.FC<{}> = () => {
  return (
    <WrapperContainer>
      <h1>This is Footer</h1>
    </WrapperContainer>
  );
};

export default Footer;
