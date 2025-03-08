import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div style={{
      maxWidth: "800px",
      margin: "auto",
      padding: "40px",
      fontFamily: "'Arial', sans-serif",
      lineHeight: "1.8",
      color: "#333",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    }}>
      <h1 style={{
        textAlign: "center",
        color: "#004085",
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "20px"
      }}>らくわりくんとは？</h1>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
      「らくわりくん」は、割り勘をより簡単かつ正確に計算できるスマートなツールです。
      複数人でのお金のやりとりをスムーズに管理し、公平な精算をサポートします。
      </p>

      <h2 style={{ fontSize: "22px", color: "#0056b3", marginBottom: "10px" }}>
        📌 らくわりくんの特徴
      </h2>
      <ul style={{
        listStyleType: "none",
        paddingLeft: "0",
        fontSize: "16px"
      }}>
        <li style={{ marginBottom: "10px" }}>✅ 最適な清算方法を自動計算</li>
        <li style={{ marginBottom: "10px" }}>✅ マイナスボタンを押すだけで簡単に負の値を入力可能</li>
        <li style={{ marginBottom: "10px" }}>✅ 1000円単位での調整が可能</li>
        <li style={{ marginBottom: "10px" }}>✅ 最大10人まで対応可能</li>
        <li style={{ marginBottom: "10px" }}>✅ シンプルで直感的なデザインだから、誰でもすぐに使える</li>
        <li style={{ marginBottom: "10px" }}>✅ 完全無料！登録不要ですぐに使える</li>
      </ul>

      <h2 style={{ fontSize: "22px", color: "#0056b3", marginBottom: "10px" }}>
        🔧 使い方は簡単！
      </h2>
      <ol style={{
        paddingLeft: "20px",
        fontSize: "16px"
      }}>
        <li style={{ marginBottom: "10px" }}>1️⃣ 参加者を追加し、それぞれの支払額を入力</li>
        <li style={{ marginBottom: "10px" }}>2️⃣ 自動的に誰が誰にいくら支払うべきか計算</li>
        <li style={{ marginBottom: "10px" }}>3️⃣ 精算結果を見て、スムーズに割り勘完了！</li>
      </ol>

      <p style={{
        textAlign: "center",
        marginTop: "30px",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#004085"
      }}>
        もう計算に悩む必要なし！<br />
        らくわりくんで、スマートな割り勘を体験しよう！
      </p>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link href="/" style={{
            display: "inline-block",
            backgroundColor: "#004085",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "16px"
        }}>
          トップページに戻る
        </Link>
      </div>
    </div>
  );
}