import styles from './Navbar.module.css'
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="navbar-logo">
        <h2>Care Home</h2>
        <p>A Brighter Tomorrow</p>
      </div>

      <ul className={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Our Home</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <a href="#" className={styles.callButton}>Call Us</a>
    </nav>
  );
}

export default Navbar;