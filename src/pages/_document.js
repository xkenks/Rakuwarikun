import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#004085" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}