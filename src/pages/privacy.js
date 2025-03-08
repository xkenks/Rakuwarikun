import React from "react";
import Link from "next/link";

export default function Privacy() {
  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "40px", fontFamily: "'Arial', sans-serif", color: "#333" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>プライバシーポリシー</h1>
      <p>
        当サイト「らくわりくん」（以下、「当サイト」とします）は、お客様の個人情報を適切に保護し、取り扱います。当サイトをご利用いただくことで、本プライバシーポリシーに同意されたものとみなします。
      </p>

      <h2 style={{ marginTop: "30px" }}>個人情報の取得</h2>
      <p>
        当サイトでは、お客様が入力された情報（名前、支払額）を割り勘計算の目的のみに使用し、サーバーに情報を保存・蓄積することはありません。
      </p>

      <h2 style={{ marginTop: "30px" }}>個人情報の利用目的</h2>
      <p>
        入力された情報は、その場での割り勘計算のみに利用されます。それ以外の目的で使用することはありません。
      </p>

      <h2 style={{ marginTop: "30px" }}>第三者への開示・提供の禁止</h2>
      <p>
        当サイトでは、お客様からお預かりした情報を第三者に開示・提供することはありません。
      </p>

      <h2 style={{ marginTop: "30px" }}>Cookieについて</h2>
      <p>
        当サイトは、サービスの改善を目的として、Cookieを使用する場合があります。Cookieにより個人を特定する情報を取得することはありません。
      </p>

      <h2 style={{ marginTop: "30px" }}>免責事項</h2>
      <p>
        当サイトの利用により生じた損害に関しては、一切の責任を負いかねますのでご了承ください。
      </p>

      <h2 style={{ marginTop: "30px" }}>お問い合わせ</h2>
      <p>
        本ポリシーに関するお問い合わせは、下記までご連絡ください。<br />
        <strong>メール:</strong> velmel.inc@gmail.com
      </p>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link href="/">
          <span style={{ color: "#007bff", cursor: "pointer", textDecoration: "underline" }}>
            トップページに戻る
          </span>
        </Link>
      </div>
    </div>
  );}