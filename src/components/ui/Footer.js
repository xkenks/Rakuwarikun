import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "20px",
      marginTop: "40px",
      borderTop: "1px solid #eaeaea",
      fontSize: "14px",
      color: "#888"
    }}>
      <Link href="/privacy" style={{ marginRight: "15px" }}>
        プライバシーポリシー
      </Link>
      <Link href="/terms">
        利用規約
      </Link>
    </footer>
  );
}