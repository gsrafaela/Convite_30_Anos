const RSVP_LINK = "https://aniversario-5mqs.listaideal.com.br/pt"; // Troque pelo link real

// Botão de confirmação
const btn = document.getElementById("rsvpBtn");
btn.href = RSVP_LINK;

// Glitter animado
const confetti = document.querySelector(".confetti");
const pieces = 50;
for (let i = 0; i < pieces; i++) {
  const p = document.createElement("i");
  p.style.left = Math.random() * 100 + "vw";
  p.style.setProperty("--t", (8 + Math.random() * 8) + "s");
  p.style.setProperty("--d", (Math.random() * 8) + "s");
  confetti.appendChild(p);
}
