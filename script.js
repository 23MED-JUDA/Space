let lastScrollTop = 0;
const header = document.querySelector("header");
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Toggle Scroll-to-Top button visibility after 300px of scrolling
  if (toTop) {
    if (scrollTop > 300) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  }

  // Hide/Show Header on scroll, but keep it visible at the very top (< 100px)
  if (header) {
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
  }

  lastScrollTop = scrollTop;
});