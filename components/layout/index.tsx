import React from "react";
import Footer from "../footer";
import Navigation from "../navigation";
import classes from "../../styles/Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      {/* <div className={classes.layout}> */}
      {/* <div className={classes.navSection}>
          <Navigation />
        </div> */}

      <main className={classes.mainSection}>{children}</main>
      <Footer />

      {/* </div> */}
    </React.Fragment>
  );
};

export default Layout;
