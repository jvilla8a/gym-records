import React from "react";
import { BsPlay } from "react-icons/bs"

import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <section className={styles.menuSection}>
        <h1>LA APP MAS VERGA</h1>
        <ul>
          <li>
            <BsPlay />
            Iniciar Entrenamiento
          </li>
        </ul>
      </section>
      <section className={styles.userInfo}>
        <div>JV</div>
        <h2>Jonathan Villamizar</h2>
      </section>
    </aside>
  );
}

export default SideBar;