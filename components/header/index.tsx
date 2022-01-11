import React from "react";
import Navigation from "../navigation";
import classes from "../../styles/header.module.css";

const Header: React.FC<{}> = () => {
  return (
    <header className={classes.header}>
      <h1>This is Header</h1>
      <Navigation />
    </header>
  );
};

export default Header;
