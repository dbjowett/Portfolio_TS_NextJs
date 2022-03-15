// import '../styles/navBar.css';
import styles from './navbar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <li>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/dbjowett'>
            github
          </a>
        </li>
        <li>
          <a href='#projects'>projects</a>
        </li>
        <li>
          <a href='#contact'>contact</a>
        </li>
      </ul>
    </nav>
  );
}
