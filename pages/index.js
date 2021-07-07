import Head from "next/head";
import ReactMarkdown from "react-markdown";
import ReactMarkdownComponents, {
  ReactMarkdownTransformImageUri,
} from "@utils/ReactMarkdownComponents";
import Header from "@components/Header";
import Footer from "@components/Footer";
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

      <Header />

      <main className={Styles.content}>
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={content}
          transformImageUri={ReactMarkdownTransformImageUri}
          components={ReactMarkdownComponents(content)}
        />
      </main>

      <Footer />
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
