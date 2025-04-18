import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TradePage() {
  const [stocks, setStocks] = useState([]);
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem("history")) || []);

  useEffect(() => {
    axios.get("http://localhost:5000/stocks")
      .then(res => setStocks(res.data));
  }, []);

  const trade = (symbol, action, price) => {
    const record = { symbol, action, price, time: new Date().toLocaleString() };
    const newHistory = [...history, record];
    setHistory(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>💹 Simulate Trading</h2>
      {stocks.map(stock => (
        <div key={stock.symbol} style={{ marginBottom: '15px' }}>
          <h3>{stock.symbol}: ${stock.price}</h3>
          <button onClick={() => trade(stock.symbol, "Buy", stock.price)}>Buy</button>
          <button onClick={() => trade(stock.symbol, "Sell", stock.price)}>Sell</button>
        </div>
      ))}
      <h3>🕒 Trade History</h3>
      <ul>
        {history.map((h, i) => (
          <li key={i}>{h.time} - {h.symbol} - {h.action} @ ${h.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default TradePage;
