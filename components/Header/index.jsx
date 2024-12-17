
import styles from './header.module.scss'; // import header

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="header__logo">
        &lt;SDEFDG&gt;
     
      </div>
      <button className="header__nav__toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <nav class="header__nav">
        <ul class="header__nav__list">
          <li className="nav__item"><a href="{{ url('/') }}" class="nav__link">Home</a></li>
          <li className="nav__item"><a href="#services" class="nav__link">My Services</a></li>
          <li className="nav__item"><a href="#about" class="nav__link">About me</a></li>
          <li className="nav__item"><a href="#work" class="nav__link">My Work</a></li>
        </ul>
      </nav>
    </header>
  );
}
