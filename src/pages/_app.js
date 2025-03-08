import "../styles/globals.css";
import Footer from "../components/ui/Footer"; 

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}