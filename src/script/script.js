const dropdownMenu = document.querySelector(".dropdown");
const dropdownNav = document.querySelector("#dropdown-nav");

dropdownNav.addEventListener("click", function () {
  if (dropdownMenu.style.display == "none") {
    dropdownMenu.style.display = "flex";
  } else {
    dropdownMenu.style.display = "none";
  }
});