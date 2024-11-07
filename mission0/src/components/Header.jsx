import React from "react";
import styles from "./Header.module.css";
import Button from "@mui/material/Button";
import cloudPic from "/images/cloud.png";
import menuIcon from "/images/ui.png";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <img src={cloudPic} alt="cloud" className={styles.cloudPic} />
          <h3>Cloud Company Ltd</h3>
        </div>
        <div className={styles.headerButtons}>
          <Button variant="text">About</Button>
          <Button variant="text">Contact</Button>
          <Button variant="text">FAQ</Button>
          <Button variant="outlined">Login</Button>
        </div>
        <div className={styles.headerMobileMenu}>
          <img src={menuIcon} alt="" className={styles.menuIcon}/>
        </div>
      </div>
    </>
  );
}
