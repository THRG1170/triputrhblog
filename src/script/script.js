const nav = document.querySelector(".dropdown");
const dropdownNav = document.querySelector("#dropdown-nav");

dropdownNav.addEventListener("click", function () {
  if (nav.style.display == "none") {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
});
