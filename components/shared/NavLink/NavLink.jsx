import React from "react";
import { NavLink as Link } from "react-router-dom";
import styles from "./NavLink.css";

export const NavLink = props => {
  return <Link activeClassName={styles.active} {...props} />;
};
