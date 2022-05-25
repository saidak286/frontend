/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
// import styles from "./Footer.module.css";
import StyledFooter from "./Footer.Styled";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledFooter>
      <footer>
        <h2>Movie App</h2>
        <p>Created by aufaroot18 X saidak286</p>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
