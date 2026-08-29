const body = document.body;
const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

const saved = localStorage.getItem("techgaze-theme");
if (saved === "light") body.classList.add("light");
icon.textContent = body.classList.contains("light") ? "☀" : "☾";

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  const light = body.classList.contains("light");
  localStorage.setItem("techgaze-theme", light ? "light" : "dark");
  icon.textContent = light ? "☀" : "☾";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
