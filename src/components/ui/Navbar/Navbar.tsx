import React, { useState } from "react";
import Image from "next/image";
import NAVLINKS from "@/constants/links/navlinks";
import Button from "../Button/Button";
import logo from "../../../assets/innovate-wave.svg";
import styles from "./navbar.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <Image src={logo} className={`${styles.logo}`} alt="Innovate Wave Logo" />
      <MenuIcon
        className={styles.menuIcon}
        fontSize="large"
        onClick={() => setOpen(true)}
      />
      <ul
        className={`${styles.navlink__list} ${
          open ? styles.navOpen : styles.hello
        }`}
      >
        <CloseIcon
          className={styles.closeIcon}
          fontSize="large"
          onClick={() => setOpen(false)}
        />
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
