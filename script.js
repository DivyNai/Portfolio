const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

function toggleMenu() {
  navLinks.classList.toggle("active");
}

menuToggle.addEventListener("click", toggleMenu);

// Close menu when a nav link is clicked (Mobile UX)
const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});

// Active nav link on scroll
const links = document.querySelectorAll(".nav-links a");
const sections = [...links].map((a) =>
  document.querySelector(a.getAttribute("href"))
);
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = "#" + entry.target.id;
      const link = document.querySelector(`.nav-links a[href="${id}"]`);
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.remove("active"));
        link?.classList.add("active");
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 }
);
sections.forEach((s) => s && io.observe(s));

// Skill bars animate on view
const bars = document.querySelectorAll(".bar > i");
const io2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting)
        e.target.style.width = getComputedStyle(e).getPropertyValue("--w");
    });
  },
  { threshold: 0.4 }
);
bars.forEach((b) => io2.observe(b));

// Typewriter effect (one‑liner)
const tw = document.getElementById("typewriter");
const phrases = [
  "Web Developer • Frontend first • Loves clean UI",
  "Building fast • accessible sites",
  "Open to internships & freelance",
];
let pi = 0;
setInterval(() => {
  tw.textContent = phrases[(pi = (pi + 1) % phrases.length)];
}, 2800);

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Basic form guard
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  const data = new FormData(form);
  if (!data.get("name") || !data.get("email") || !data.get("message")) {
    e.preventDefault();
    alert("Please fill all fields.");
  }
});