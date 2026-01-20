const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  if (!nombre || !email || !mensaje) {
    msg.textContent = "Completa todos los campos.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Enviando mensaje...";
  msg.style.color = "yellow";

  setTimeout(() => {
    msg.textContent = "Mensaje enviado con éxito 🚀";
    msg.style.color = "lightgreen";
    form.reset();
  }, 1500);
});
