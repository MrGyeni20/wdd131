// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("mainNav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  hamburger.textContent = nav.classList.contains("hidden") ? "☰" : "✖";
});
