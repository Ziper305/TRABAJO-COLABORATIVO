document.addEventListener("DOMContentLoaded", () => {
  // 1. Menú responsivo
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // 2. Confirmación interactiva en botones de reserva
  const reserveButtons = document.querySelectorAll(".btn-reserve");
  reserveButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const serviceName = btn.getAttribute("data-service") || "este servicio";
      alert(`¡Solicitud registrada! Nos pondremos en contacto contigo para agendar tu sesión de: ${serviceName}.`);
    });
  });
});