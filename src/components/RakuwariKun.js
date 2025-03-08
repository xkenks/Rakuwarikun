import React, { useState } from "react";

export default function RakuwariKun() {
  const [players, setPlayers] = useState([{ name: "", amounts: ["", "", ""] }]);

  const handleNameChange = (index, value) => {
    const updatedPlayers = [...players];
    updatedPlayers[index].name = value;
    setPlayers(updatedPlayers);
  };

  const handleAmountChange = (playerIndex, amountIndex, value) => {
    const updatedPlayers = [...players];
    updatedPlayers[playerIndex].amounts[amountIndex] = value;
    setPlayers(updatedPlayers);
  };

  const toggleNegative = (playerIndex, amountIndex) => {
    const updatedPlayers = [...players];
    let currentValue = updatedPlayers[playerIndex].amounts[amountIndex];
    if (currentValue.startsWith("-")) {
      updatedPlayers[playerIndex].amounts[amountIndex] = currentValue.substring(1);
    } else {
      updatedPlayers[playerIndex].amounts[amountIndex] = "-" + currentValue;
    }
    setPlayers(updatedPlayers);
  };

  const removePlayer = (index) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);
  };

  const addPlayer = () => {
    if (players.length < 10) {
      setPlayers([...players, { name: "", amounts: ["", "", ""] }]);
    }
  };

  const totals = players.map((player) => ({
    name: player.name || "名無し",
    total: player.amounts.reduce((a, b) => (Number(a) || 0) + (Number(b) || 0), 0),
  }));

  const totalSum = totals.reduce((sum, player) => sum + player.total, 0);
  const discrepancy = totalSum !== 0 ? totalSum : null;

  const calculateResults = () => {
    const creditors = totals.filter((p) => p.total > 0);
    const debtors = totals.filter((p) => p.total < 0);

    let transactions = [];
    while (debtors.length && creditors.length) {
      let debtor = debtors[0];
      let creditor = creditors[0];
      let amount = Math.min(Math.abs(debtor.total), creditor.total);

      if (amount > 0) {
        transactions.push(`${debtor.name} → ${creditor.name} に ¥${amount} 支払い`);
      }

      debtor.total += amount;
      creditor.total -= amount;

      if (debtor.total === 0) debtors.shift();
      if (creditor.total === 0) creditors.shift();
    }
    return transactions;
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "420px",
        margin: "auto",
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#f9fafb",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          backgroundColor: "#bfdbfe",
          textAlign: "center",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "24px", color: "#1e3a8a", margin: 0 }}>
          らくわりくん
        </h1>
      </div>

      {players.map((player, playerIndex) => (
        <div
          key={playerIndex}
          style={{
            padding: "15px",
            border: "1px solid #ddd",
            marginTop: "15px",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            position: "relative",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* ✖︎ ボタンを右上に置いて、その参加者を削除 */}
          <button
            onClick={() => removePlayer(playerIndex)}
            style={{
              position: "absolute",
              top: "8px",
              right: "10px",
              background: "transparent",
              border: "none",
              fontSize: "18px",
              color: "#6b7280",
              cursor: "pointer",
            }}
          >
            ✖︎
          </button>

          <input
            type="text"
            placeholder="名前"
            value={player.name}
            onChange={(e) => handleNameChange(playerIndex, e.target.value)}
            style={{
              width: "70%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "16px",
              textAlign: "left", 
              display: "block"
            }}
          />

          {player.amounts.map((amount, amountIndex) => (
            <div
              key={amountIndex}
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "5px",
                gap: "8px",
              }}
            >
              <input
                type="number"
                step="1000"
                placeholder="例: -1000"
                value={amount}
                onChange={(e) =>
                  handleAmountChange(playerIndex, amountIndex, e.target.value)
                }
                style={{
                  flexGrow: 1,
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  fontSize: "16px",
                }}
              />
              <button
                onClick={() => toggleNegative(playerIndex, amountIndex)}
                style={{
                  padding: "10px 14px",
                  fontSize: "16px",
                  backgroundColor: "#9ca3af",
                  borderRadius: "6px",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                -
              </button>
            </div>
          ))}

          <div
            style={{
              textAlign: "right",
              fontWeight: "bold",
              marginTop: "10px",
              fontSize: "16px",
            }}
          >
            合計: ¥{totals[playerIndex].total}
          </div>
        </div>
      ))}

      <button
        onClick={addPlayer}
        disabled={players.length >= 10}
        style={{
          width: "100%",
          marginTop: "15px",
          backgroundColor: "#d1d5db",
          padding: "12px",
          borderRadius: "6px",
          border: "none",
          fontSize: "16px",
          cursor: players.length >= 10 ? "not-allowed" : "pointer",
        }}
      >
        参加者を追加
      </button>

      <div
        style={{
          padding: "20px",
          marginTop: "20px",
          backgroundColor: "#f3f4f6",
          borderRadius: "8px",
          textAlign: "left",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "18px", marginBottom: "10px" }}>
          清算方法
        </h2>
        {calculateResults().map((transaction, index) => (
          <p
            key={index}
            style={{
              color: "green",
              fontSize: "14px",
              margin: "4px 0",
            }}
          >
            {transaction}
          </p>
        ))}
        {discrepancy !== null && (
          <p
            style={{
              color: "red",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            ⚠️ 計算がズレています: ¥{discrepancy}
          </p>
        )}
      </div>
    </div>
  );
}