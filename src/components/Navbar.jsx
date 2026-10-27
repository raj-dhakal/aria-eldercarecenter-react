import styles from "./Navbar.module.css";
import logo from "../assets/aecc-logo.svg";
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Aria Elder Care Center logo" />
        <div>
          <h2>Aria Elder Care</h2>
          <p>A Brighter Tomorrow</p>
        </div>
      </div>

      <ul className={menuOpen ? `${styles.navLinks} ${styles.open}` : styles.navLinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Our Home</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <a href="#" className={styles.callButton}>
        Call Us
      </a>
      <button
        className={styles.menuButton}
        aria-label="Open menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </nav>
  );
}
export default Navbar;
