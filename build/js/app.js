const header = document.querySelector("header");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".main-nav .close-icon");

hamburgerIcon.addEventListener("click", () => {
  header.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  header.classList.remove("active");
});
