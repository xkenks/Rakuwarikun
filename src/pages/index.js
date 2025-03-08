import React from "react";
import RakuwariKun from "../components/RakuwariKun"; // 割り勘計算ツールのコンポーネントを読み込む
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "'Arial', sans-serif" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "15px" }}>
        らくわりくん
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "25px" }}>
        割り勘を簡単に計算できるツール
      </p>

      {/* 割り勘計算ツールのコンポーネントを表示 */}
      <RakuwariKun />

      {/* aboutページへのリンクを追加 */}
      <div style={{ marginTop: "30px" }}>
        <Link href="/about" style={{
          display: "inline-block",
          backgroundColor: "#004085",
          color: "#fff",
          padding: "12px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          fontSize: "16px",
          fontWeight: "bold"
        }}>
          らくわりくんとは？
        </Link>
      </div>
    </div>
  );
}