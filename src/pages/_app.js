import Head from "next/head";
import "../styles/globals.css";
import Footer from "../components/ui/Footer"; 

export default function App({ Component, pageProps }) {
  return (
    <>
<Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}