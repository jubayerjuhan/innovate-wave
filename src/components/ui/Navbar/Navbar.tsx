import React from "react";
import styles from "./navbar.module.scss";
import NAVLINKS from "@/constants/links/navlinks";

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
      </ul>
    </nav>
  );
};

export default Navbar;
