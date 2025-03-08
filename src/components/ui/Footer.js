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
      <div>
        <Link href="/privacy" style={{ marginRight: "15px" }}>
          プライバシーポリシー
        </Link>
        <Link href="/terms">
          利用規約
        </Link>
      </div>
      <div style={{ marginTop: "10px", fontSize: "12px", color: "#aaa" }}>
        © {new Date().getFullYear()} らくわりくん. All rights reserved.
      </div>
    </footer>
  );
}