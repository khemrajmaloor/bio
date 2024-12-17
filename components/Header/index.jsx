import styles from './header.module.css'
export default function Header() {
  return (
    <>
      <div className={styles.header} >
        <h2 className='header__title'>Header</h2>
      </div>
    </>
  );
}