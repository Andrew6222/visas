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

let elems = [
  {id: document.getElementById("hero1"), status: 'open'},
  {id: document.getElementById("hero2"), status: 'close'}
];

displayFunc = () => {
  elems.forEach((elem) => {
    if (elem.status === 'open') {
      elem.status = 'close';
      elem.id.classList.add("displaynone");
      elem.id.classList.remove("showblock");
    } else {
      elem.status = 'open';
      elem.id.classList.remove("displaynone");
      elem.id.classList.add("showblock");
    }
  });
};

setInterval(() => {
  displayFunc();
}, 10000);

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

// nav dropdown
function openDropdown() {
  document.getElementById("dropdown").classList.toggle("drpdownshow");

  window.onclick = function (event) {
    if (!event.target.matches(".dropdown-nav-link")) {
      var dropdowns = document.getElementById("dropdown")
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("drpdownshow")) {
          openDropdown.classList.remove("drpdownshow");
        }
      }
    }
  };
}

window.addEventListener("load", () => {
  document.getElementById("circle").classList.add("circle-append");
  document.getElementById("hero1").classList.add("hero1show");
});
