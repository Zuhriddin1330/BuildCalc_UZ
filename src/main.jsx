import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
function App(){
 const [tasks,setTasks]=useState([{name:"",price:"",qty:"1"}]);
 const add=()=>setTasks(t=>[...t,{name:"",price:"",qty:"1"}]);
 const change=(i,k,v)=>setTasks(t=>t.map((x,j)=>j===i?{...x,[k]:v}:x));
 const remove=i=>setTasks(t=>t.filter((_,j)=>j!==i));
 const total=tasks.reduce((s,x)=>s+(Number(x.price)||0)*(Number(x.qty)||0),0);
 return <main className="page"><header><div className="logo">BC</div><div><h1>BuildCalc <span>UZ</span></h1><p>Uy qurish va ta'mirlash xarajatlari hisob-kitobi</p></div></header>
 <section className="intro"><h2>Rejangizni hisoblang</h2><p>Uyda qilmoqchi bo'lgan ishlaringizni kiriting, miqdor va narxni yozing. Jami xarajat avtomatik hisoblanadi.</p></section>
 <section className="panel"><div className="panelhead"><h3>Materiallar va ishlar</h3><button className="secondary" onClick={add}>＋ Qator qo'shish</button></div>
 {tasks.map((x,i)=><div className="item" key={i}><label><span>Nom</span><input placeholder="Masalan: Sement" value={x.name} onChange={e=>change(i,"name",e.target.value)}/></label><label><span>Miqdor</span><input type="number" min="0" value={x.qty} onChange={e=>change(i,"qty",e.target.value}/></label><label><span>Narxi (so'm)</span><input type="number" min="0" placeholder="0" value={x.price} onChange={e=>change(i,"price",e.target.value)}/></label><div className="sum"><small>Jami</small><b>{((Number(x.price)||0)*(Number(x.qty)||0)).toLocaleString("uz-UZ")} so'm</b></div><button className="remove" title="O'chirish" onClick={()=>remove(i)}>×</button></div>)}
 <div className="total"><div><small>Umumiy hisob</small><strong>{total.toLocaleString("uz-UZ")} so'm</strong></div><button onClick={()=>window.print()}>Hisobni chop etish</button></div></section>
 <footer>BuildCalc UZ · Oddiy va qulay hisob-kitob</footer></main>;
}
createRoot(document.getElementById("root")).render(<App/>);