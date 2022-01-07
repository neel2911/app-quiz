import React from "react";
import styled from "styled-components";
import Footer from "../footer";
import Navigation from "../navigation";

const WrapperLayout = styled.div`
  display: flex;
  align-item: center;
`;

const NavigationWrapper = styled.div`
  width: 200px;
  height: calc(100vh - 70px);
  background: #006abc;
  display: inline-block;
`;

const MainWrapper = styled.div`
  flex: 1;
  height: calc(100vh - 70px);
  background: #ffffff;
  display: inline-block;
`;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <main>
        {children}
        <Footer />
        {/* <WrapperLayout>
          <NavigationWrapper>
            <Navigation />
          </NavigationWrapper>
          <MainWrapper>
            
          </MainWrapper>
        </WrapperLayout> */}
      </main>
    </React.Fragment>
  );
};

export default Layout;
