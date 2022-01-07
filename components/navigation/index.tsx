import Link from "next/link";
import React from "react";
import styled from "styled-components";

const UL = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const LI = styled.li`
  width: 100px;
`;

const HyperLink = styled.a`
  width: 100px;
  margin: 3px;
`;
const Navigation: React.FC<{}> = () => {
  return (
    <UL>
      <LI>
        <Link href="/">Home</Link>
      </LI>
      <LI>
        <Link href="/quizes">Quizes</Link>
      </LI>
      <LI>
        <Link href="/create-quiz">Create Quiz</Link>
      </LI>
      <LI>
        <Link href="/login">Logout</Link>
      </LI>
    </UL>
  );
};

export default Navigation;
