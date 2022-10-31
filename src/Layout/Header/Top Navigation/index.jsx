import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles.module.css';
import { linkPaths } from "../../../LinksPaths";
import { Button } from "@mui/material";

export function TopNavigationBar() {
  return (
    <div className={styles.topNavigationBar}>
      <Link to={linkPaths.home}>
        <Button variant ="text">
          <p>BOOKIFY</p>
        </Button>
      </Link>
      <div className={styles.topNavigationBarLinksWrapper}>
        <Link to={linkPaths.about}>
          <Button variant ="text">
            <p>about us</p>
          </Button>
        </Link>
        <Link to={linkPaths.favourites}>
          <Button variant ="text">
            <p>your favourites</p>
          </Button>
        </Link>
        <Link to={linkPaths.hosting}>
          <Button variant ="text">
            <p>start hosting</p>
          </Button>
        </Link>
        <Link to={linkPaths.login}>
          <Button variant ="text">
            <p>login</p>
          </Button>
        </Link>
      </div>
    </div>
  );
}