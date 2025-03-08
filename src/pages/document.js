import { Html, Head, Main, NextScript } from 'next/document';
import Document from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* ここにメタタグやフォントのリンクを追加 */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}