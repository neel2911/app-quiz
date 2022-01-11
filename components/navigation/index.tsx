import Link from "next/link";
import React from "react";
import classes from "../../styles/navigation.module.css";

const Navigation: React.FC<{}> = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/quizes">Quizes</Link>
        </li>
        <li>
          <Link href="/create-quiz">Create Quiz</Link>
        </li>
        <li>
          <Link href="/login">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
