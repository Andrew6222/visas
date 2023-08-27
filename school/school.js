function openDropdown() {
  document.getElementById("dropdown").classList.toggle("drpdownshow");

  window.onclick = function (event) {
    if (!event.target.matches(".dropdown-nav-link")) {
      var dropdowns = document.getElementById("dropdown");
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
