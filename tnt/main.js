// Paprastas rodyklių pavyzdys
const [leftBtn, rightBtn] = document.querySelectorAll(".circle-btn");

leftBtn.addEventListener("click", () => {
  alert("Paspaudei KAIRĘ rodyklę!");
});

rightBtn.addEventListener("click", () => {
  alert("Paspaudei DEŠINĘ rodyklę!");
});

