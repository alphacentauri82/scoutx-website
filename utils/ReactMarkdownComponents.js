/* eslint-disable react/display-name */
import Styles from "@styles/Content.module.css";

function isRepoImage(src) {
  return src.match(/(^https:\/\/raw.githubusercontent.com)+/) !== null;
}

export function ReactMarkdownTransformImageUri(src) {
  const match = src.match(/(^https:\/\/)+/g);
  return match ? src : `https://raw.githubusercontent.com/alphacentauri82/scoutx/main/${src}`;
}

export function slugifyString(string) {
  return string
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
    .toLowerCase();
}

export default function ReactMarkdownComponents(markdown) {
  return {
    h1: ({ children }) => <h1 className={Styles.content__h1}>{children}</h1>,
    h2: ({ children }) => (
      <h2 className={Styles.content__h2} id={`${slugifyString(children[0])}`}>
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3 className={Styles.content__h3}>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
    h6: ({ children }) => <h6>{children}</h6>,
    strong: ({ children }) => <span>{children}</span>,
    p: ({ children }) => <p className={Styles.content__p}>{children}</p>,
    a: ({ children, href }) => (
      <a href={href} className={Styles.content__a}>
        {children}
      </a>
    ),
    ol: ({ children }) => <ol>{children}</ol>,
    ul: ({ children }) => <ul className={Styles.content__ul}>{children}</ul>,
    li: ({ children }) => <li className={Styles.content__li}>{children}</li>,
    pre: ({ children }) => <pre className={Styles.content__pre}>{children}</pre>,
    code: ({ children }) => <code className={Styles.content__code}>{children}</code>,
    hr: ({ children }) => <hr className={Styles.content__hr} />,
    img: ({ src, alt }) => {
      const cssClass = isRepoImage(src) ? Styles.content__img__full : Styles.content__img;
      return <img src={src} alt={alt} className={cssClass} />;
    },
  };
}
