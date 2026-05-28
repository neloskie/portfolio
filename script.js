const year = document.querySelector("#year");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const isHidden = mobileNav.classList.toggle("hidden");
    menuToggle.setAttribute("aria-expanded", String(!isHidden));
  });

  mobileNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      mobileNav.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}
