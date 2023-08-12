import React from "react";

export default function Home() {
  return (
    <main className="Home">
      <div className="Home__inventory">
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "1rem",
          }}>
          <div className="Home__inventory--revenue">teste</div>
          <div className="Home__inventory--expences">teste</div>
          <div className="Home__inventory--profit">teste</div>
          <div className="Home__inventory--profitToday">teste</div>
        </span>
        <div className="Home__inventory--list">teste</div>
      </div>
    </main>
  );
}
