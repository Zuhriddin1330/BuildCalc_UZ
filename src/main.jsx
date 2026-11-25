import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const emptyRow = () => ({ name: "", price: "", qty: "1" });
const formatMoney = (value) => (Number(value) || 0).toLocaleString("uz-UZ");

function App() {
  const [tasks, setTasks] = useState([emptyRow()]);
  const add = () => setTasks((rows) => [...rows, emptyRow()]);
  const change = (index, field, value) =>
    setTasks((rows) => rows.map((row, i) => i === index ? { ...row, [field]: value } : row));
  const remove = (index) =>
    setTasks((rows) => rows.length <= 1 ? [emptyRow()] : rows.filter((_, i) => i !== index));
  const total = tasks.reduce((sum, row) => sum + Math.max(0, Number(row.price) || 0) * Math.max(0, Number(row.qty) || 0), 0);

  return (
    <main className="page">
      <header><div className="logo">BC</div><div><h1>BuildCalc <span>UZ</span></h1><p>Uy qurish va ta'mirlash xarajatlari hisob-kitobi</p></div></header>
      <section className="intro"><h2>Rejangizni hisoblang</h2><p>Uyda qilmoqchi bo'lgan ishlaringizni kiriting, miqdor va narxni yozing. Jami xarajat avtomatik hisoblanadi.</p></section>
      <section className="panel">
        <div className="panelhead"><h3>Materiallar va ishlar</h3><button type="button" className="secondary" onClick={add}>＋ Qator qo'shish</button></div>
        {tasks.map((row, index) => (
          <div className="item" key={index}>
            <label><span>Nom</span><input type="text" placeholder="Masalan: Sement" value={row.name} onChange={(e) => change(index, "name", e.target.value)} /></label>
            <label><span>Miqdor</span><input type="number" min="0" step="any" value={row.qty} onChange={(e) => change(index, "qty", e.target.value)} /></label>
            <label><span>Narxi (so'm)</span><input type="number" min="0" step="any" placeholder="0" value={row.price} onChange={(e) => change(index, "price", e.target.value)} /></label>
            <div className="sum"><small>Jami</small><b>{formatMoney((Number(row.price) || 0) * (Number(row.qty) || 0))} so'm</b></div>
            <button type="button" className="remove" title="O'chirish" aria-label="Qatorni o'chirish" onClick={() => remove(index)}>×</button>
          </div>
        ))}
        <div className="total"><div><small>Umumiy hisob</small><strong>{formatMoney(total)} so'm</strong></div><button type="button" onClick={() => window.print()}>Hisobni chop etish</button></div>
      </section>
      <footer>BuildCalc UZ · Oddiy va qulay hisob-kitob</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
