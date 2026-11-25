import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "48px auto", padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>BuildCalc UZ</h1>
      <p>Uy qurish va ta'mirlash xarajatlarini rejalashtirish platformasi.</p>
    </main>
  );
}