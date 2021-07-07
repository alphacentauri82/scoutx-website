import Styles from "@styles/Footer.module.css";

export default function Footer() {
  const date = new Date();
  return (
    <footer className={Styles.footer}>
      <p className={Styles.footer__copyright}>&copy; {date.getFullYear()} ScoutX</p>
    </footer>
  );
}
