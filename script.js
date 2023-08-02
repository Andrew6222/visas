// burger
document.getElementById("burger").addEventListener("click", () => {
  document.querySelector("header").classList.toggle("open");
});
// slider
const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = Array.from(slider.querySelectorAll("img"));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

updateSlider();
setInterval(showPreviousSlide, 3000);
// hero slider

let hero1 = document.getElementById("hero1");
let hero2 = document.getElementById("hero2");
displayFunc = () => {
  hero1.classList.toggle("displaynone");
  hero2.classList.toggle("displaynone");
  // hero1.classList.toggle("hiddenblock");
  // hero2.classList.toggle("hiddenblock");
  // hero1.classList.toggle("showblock");
  // hero2.classList.toggle("showblock");
};
setInterval(() => {
  displayFunc();
}, 5000);

// modal
const btns = document.querySelectorAll(".btn");
const modalOverlay = document.querySelector(".modal-overlay");
const modals = document.querySelectorAll(".modal");

btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((el) => {
      el.classList.remove("modal-visible");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("modal-visible");
    modalOverlay.classList.add("modal-overlay-visible");
  });
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove("modal-overlay-visible");
    modals.forEach((el) => {
      el.classList.remove("modal-visible");
    });
  }
});
