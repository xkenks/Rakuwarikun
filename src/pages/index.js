import React from "react";
import RakuwariKun from "../components/RakuwariKun";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "'Arial', sans-serif" }}>
      
      {/* ロゴを表示（サイズ調整済み） */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <Image 
          src="/logo.png"
          alt="らくわりくん ロゴ"
          width={250} 
          height={80} 
          priority
          unoptimized
        />
      </div>

      {/* 割り勘計算ツールのコンポーネント */}
      <RakuwariKun />

      {/* aboutページへのリンク */}
      <div style={{ marginTop: "30px" }}>
        <Link href="/about">
          <div style={{
            display: "inline-block",
            backgroundColor: "#004085",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            らくわりくんとは？
          </div>
        </Link>
      </div>
    </div>
  );
}