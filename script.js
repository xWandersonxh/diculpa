let fugas = 0;

function responder() {
  const pergunta = document.getElementById("pergunta");
  const msg = document.getElementById("resposta");
  esconderTudo();
  pergunta.innerText = "Resposta:";
  msg.innerText = "Ebaaa! Muito obrigado por me perdoar 💖 Prometo que vou melhorar a cada dia!";
  msg.style.display = "block";
}

function confirmarNao() {
  document.getElementById("pergunta").innerText = "Certeza?";
  document.getElementById("botoes-iniciais").classList.add("hidden");
  document.getElementById("botoes-certeza").classList.remove("hidden");
}

function mostrarSerio() {
  document.getElementById("pergunta").innerText = "Sério?";
  document.getElementById("botoes-certeza").classList.add("hidden");
  document.getElementById("botoes-serio").classList.remove("hidden");

  const btn = document.getElementById("btn-serio-sim");
  btn.style.left = "50%";
  btn.style.top = "50%";
  btn.style.transform = "translate(-50%, -50%)";
  btn.style.opacity = "1";
  btn.style.transition = "all 0.5s ease";
}

function fugir(btn) {
  if (fugas < 3) {
    const container = document.querySelector(".container");
    const maxX = container.clientWidth - btn.offsetWidth;
    const maxY = container.clientHeight - btn.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
    btn.style.transform = "translate(0, 0)";
    fugas++;
  } else {
    btn.style.transition = "opacity 1.5s ease-out";
    btn.style.opacity = "0";
    btn.disabled = true;
  }
}

function esconderTudo() {
  document.getElementById("botoes-iniciais").classList.add("hidden");
  document.getElementById("botoes-certeza").classList.add("hidden");
  document.getElementById("botoes-serio").classList.add("hidden");
}
