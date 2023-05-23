import React from "react";
import styles from "./navbar.module.scss";
import NAVLINKS from "@/constants/links/navlinks";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Navbar</h1>
      <ul className={styles.navlink__list}>
        {NAVLINKS.map((navlink, index) => (
          <li className={styles.navlink} key={index}>
            {navlink.name}
          </li>
        ))}
        <Button title="Get Started Now" varient="primary" />
      </ul>
    </nav>
  );
};

export default Navbar;
