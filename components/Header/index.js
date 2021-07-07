import Styles from "@styles/Header.module.css";
import Logo from "@components/Logo";

export default function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.header__inner}>
        <span className={Styles.header__logo}>
          <Logo />
        </span>
        <ol className={Styles.header__links}>
          <li className={Styles.header__links__item}>
            <a
              href="https://github.com/alphacentauri82/scoutx"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={Styles.header__links__a}>
              View on GitHub
            </a>
          </li>
          <li className={Styles.header__links__item}>
            <a
              href="https://github.com/alphacentauri82/scoutx/blob/main/CODE_OF_CONDUCT.MD"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={Styles.header__links__a}>
              Code of Conduct
            </a>
          </li>
        </ol>
      </div>
    </header>
  );
}
