import React from "react";
import styles from '@styles/Menu.module.scss';

const Menu = () => {
  return (
    //? Clase 7
    <div className={styles.Menu}>
      <ul>
        <li>
          <a href="/" className="title">
            My orders
          </a>
        </li>
        <li>
          <a href="/my-account">My account</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
