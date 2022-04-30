const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  console.log("test");
});
