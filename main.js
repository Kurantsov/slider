const conteiner = document.querySelector(".conteiner");
const slider = document.querySelector(".slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let active = document.querySelector(".active");
const margin_max = 700 * (slider.children.length - 1);
const margin_min = 0;
let margin = 0;

function nextSlide() {
  if (margin < margin_max) {
    margin += 700;
    active.style = `margin-left: -${margin}px`;
  } else {
    margin = 0;
    active.style = `margin-left: ${margin}px`;
  }
}

function prevSlide() {
  if (margin > margin_min) {
    margin -= 700;
    active.style = `margin-left: -${margin}px`;
  } else {
    margin = margin_max;
    active.style = `margin-left: -${margin}px`;
  }
}

(function startWork() {
  next.onclick = () => {
    nextSlide();
  };
  prev.onclick = () => {
    prevSlide();
  };
})();
