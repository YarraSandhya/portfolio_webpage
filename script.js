// Highlight active menu item while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Contact form submission (dummy validation)
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const msg = form.message.value.trim();

  if (name === "" || email === "" || msg === "") {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
  } else {
    message.textContent = "Thank you! Your message has been sent successfully.";
    message.style.color = "green";
    form.reset();
  }
});
