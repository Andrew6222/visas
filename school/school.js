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
