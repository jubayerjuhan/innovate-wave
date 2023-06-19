import React, { useState } from "react";
import Image from "next/image";
import NAVLINKS from "@/constants/links/navlinks";
import Button from "../Button/Button";
import logo from "../../../assets/innovate-wave.svg";
import styles from "./navbar.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [childNavOpen, setChildNavOpen] = useState<null | number>(null);

  const handleMouseEnter = (index: number) => {
    setChildNavOpen(index);
  };

  const handleMouseLeave = () => {
    // Delay hiding the childNavlink__list to allow the user to move the mouse into it
    setTimeout(() => {
      setChildNavOpen(null);
    }, 200);
  };

  return (
    <nav className={styles.navbar}>
      <Image src={logo} className={styles.logo} alt="Innovate Wave Logo" />
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
          <li
            className={styles.navlink}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            {navlink.name}
            {childNavOpen === index && navlink.childLinks && (
              <div className={styles.childNavlink__list__wrapper}>
                <ul className={styles.childNavlink__list}>
                  {navlink.childLinks &&
                    navlink.childLinks.map((childNavlink, childIndex) => (
                      <li className={styles.childNavlink} key={childIndex}>
                        <MdKeyboardDoubleArrowRight
                          className={styles.childNavLinkIcon}
                        />
                        <a href={childNavlink.link}>{childNavlink.name}</a>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </li>
        ))}
        <Button
          title="Get Started Now"
          variant="primary"
          size="medium"
          color="orange"
        />
      </ul>
    </nav>
  );
};

export default Navbar;
