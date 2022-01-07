import React from "react";
import Navigation from "../navigation";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <main>
        <Navigation />
        {children}
      </main>
    </React.Fragment>
  );
};

export default Layout;
