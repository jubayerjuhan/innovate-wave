import React from "react";
import Image from "next/image";
import NAVLINKS from "@/constants/links/navlinks";
import Button from "../Button/Button";
import logo from "../../../assets/innovate-wave.svg";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image src={logo} className={styles.logo} alt="Innovate Wave Logo" />
      <ul className={styles.navlink__list}>
        {NAVLINKS.map((navlink, index) => (
          <li className={styles.navlink} key={index}>
            {navlink.name}
          </li>
        ))}
        <Button title="Get Started Now" variant="primary" size="medium" />
      </ul>
    </nav>
  );
};

export default Navbar;
