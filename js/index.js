const mobileNavOpenEl = document.querySelector(".fa-bars");
const mobileNavCloseEl = document.querySelector(".fa-times");
const mainHeader = document.querySelector(".header");
const mainNav = document.querySelector(".main-nav");
const yearEl = document.querySelector(".copy-year");
const navLink = document.querySelector(".main-nav-link");
const allLinks = document.querySelectorAll(".main-nav-link");

yearEl.textContent = new Date().getFullYear();

mobileNavOpenEl.addEventListener("click", () => {
  mainHeader.classList.add("nav-open");
});

mobileNavCloseEl.addEventListener("click", () => {
  mainHeader.classList.remove("nav-open");
});

mainNav.addEventListener("click", function (e) {
  console.log(e.target.classList.contains("main-nav-link"));
  if (!e.target.classList.contains("main-nav-link")) return;
  setInterval(() => mainHeader.classList.remove("nav-open"), 500);
});

document.addEventListener("click", (e) => {
  if (!e.target.href) return;
  const href = e.target.getAttribute("href");
  location.hash = href;
});

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      return document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      return document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
