import styles from "./Header.module.css";
import multiLogo from "../../assets/logo_multipoint.png";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.caixaBotoes}>
        <NavLink to="/">
          <img src={multiLogo} className={styles.logo} />
        </NavLink>

        <div className={styles.menu}>
          <TiThMenu />
        </div>
      </div>
    </header>
  );
}
