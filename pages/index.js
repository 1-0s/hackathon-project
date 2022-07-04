import Head from "next/head";
import Homepage from "../components/Homepage/Index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lyful Med</title>
        <meta
          name="description"
          content="The best website for your health tips!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />
    </>
  );
}
