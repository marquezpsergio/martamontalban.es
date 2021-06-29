/*=========================
 Animaciones menú navbar superior transparencia al hacer scroll
 ================= */
let offsetAnterior = 0;
window.onscroll = function () {
  // Opacidad al hacer scroll para abajo
  if (window.pageYOffset < 150) {
    document.getElementById("header").style.opacity = "100%";
  } else if (window.pageYOffset >= 150 && window.pageYOffset < 300) {
    document.getElementById("header").style.opacity = "50%";
  } else {
    document.getElementById("header").style.opacity = "0%";
  }

  // Opacidad 100% al hacer scroll para arriba
  if (window.pageYOffset < offsetAnterior) {
    document.getElementById("header").style.opacity = "100%";
  }
  offsetAnterior = window.pageYOffset;
}
