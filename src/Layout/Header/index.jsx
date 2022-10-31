import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles.module.css';
import {TopNavigationBar} from "./Top Navigation";

export function Header() {
  return (
    <div className={styles.header}>
      <TopNavigationBar />
    </div>
  );
}