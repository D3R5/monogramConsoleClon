import styles from './nav.module.css'
import 'boxicons'


const Nav = () => {
  return (
    <nav className={styles.navbar}>
      
      <div className={styles.navItems}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.navLinks}>
          <a href="#">HOW IT WORKS</a>
          <a href="#">WORKFLOWS</a>
          <a href="#">DOWNLOAD</a>
          <a href="#">BLOG</a>
          <a href="#">SUPPORT</a>
          <a href="#">SHOP</a>
          <a href="#"></a>
          <a href="#"><box-icon name='shopping-bag' color='#efc2b3' />EUR</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
