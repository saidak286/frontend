import styles from "./index.module.css";

function Footer() {
  return (
    /**
    * Menggunakan styles yang sudah diimport.
    * Memanggilnya menggunakan expression.
    */
       <div className={styles.container}>
       <nav className={styles.footer}>
         <div>
           <h1 className={styles.footer__brand}>Covid ID</h1>
           <p className={styles.footer__author}>Develop by saidak286</p>
         </div>
         <div>
           <ul className={styles.footer__list}>
             <li className={styles.footer__item}>Global</li>
             <li className={styles.footer__item}>Indonesia</li>
             <li className={styles.footer__item}>Provinsi</li>
             <li className={styles.footer__item}>About</li>
           </ul>
         </div>
       </nav>
     </div>
  );
}

export default Footer;
