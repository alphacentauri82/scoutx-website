import Head from "next/head";
import ReactMarkdown from "react-markdown";
import ReactMarkdownComponents, {
  ReactMarkdownTransformImageUri,
} from "@utils/ReactMarkdownComponents";
import Styles from "@styles/Content.module.css";

export default function Home({ content }) {
  return (
    <>
      <Head>
        <title>ScoutX</title>
        <meta
          name="description"
          content="Notify your emergency contacts if your blood glucose values from Nightscout are out of range."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <main className={Styles.content}>
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={content}
          transformImageUri={ReactMarkdownTransformImageUri}
          components={ReactMarkdownComponents(content)}
        />
      </main>

      <footer></footer>
    </>
  );
}

export async function getStaticProps() {
  const content = await fetch(
    "https://raw.githubusercontent.com/alphacentauri82/scoutx/main/README.md",
  ).then((response) => response.text());

  return {
    props: {
      content,
    },
    revalidate: 1,
  };
}
