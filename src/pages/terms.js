import Link from 'next/link';

export default function Terms() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto", fontFamily: "Arial, sans-serif", lineHeight: "1.8" }}>
      <h1 style={{ fontSize: "28px", textAlign: "center", marginBottom: "30px" }}>
        利用規約
      </h1>

      <p>
        本利用規約（以下「本規約」といいます。）は、らくわりくん（以下「本サービス」といいます。）の利用条件を定めるものです。
        本サービスを利用される方（以下「ユーザー」といいます。）は、本規約に同意の上ご利用ください。
      </p>

      <h2>第1条（適用）</h2>
      <p>
        本規約は、ユーザーと本サービス提供者との間における本サービスの利用に関わる一切の関係に適用されるものとします。
      </p>

      <h2>第2条（禁止事項）</h2>
      <p>
        ユーザーは本サービスの利用にあたり、以下の行為を禁止します。
      </p>
      <ul>
        <li>法令または公序良俗に違反する行為</li>
        <li>犯罪行為に関連する行為</li>
        <li>本サービスの運営を妨害する行為</li>
        <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
        <li>その他、本サービス提供者が不適切と判断する行為</li>
      </ul>

      <h2>第3条（免責事項）</h2>
      <p>
        本サービスの利用によって生じたいかなる損害についても、本サービス提供者は一切の責任を負いません。
        ユーザー自身の責任においてご利用ください。
      </p>

      <h2>第4条（規約の変更）</h2>
      <p>
        本サービス提供者は、必要と判断した場合、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
        変更後の規約は、本サービス上で公表された時点から効力を生じるものとします。
      </p>

      <p style={{ textAlign: "center", marginTop: "40px" }}>
        以上
      </p>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link href="/" style={{ color: "#004085", textDecoration: "underline" }}>
          トップページに戻る
        </Link>
      </div>
    </div>
  );
}