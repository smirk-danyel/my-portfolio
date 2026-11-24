function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu?.classList.toggle("open");
  icon?.classList.toggle("open");
}

// CONTACT FORM
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(contactForm);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = "Portfolio message from " + name;
    const body = message + "\n\n" + name + "\n" + email;

    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      "&to=innocentdannie777@gmail.com" +
      "&su=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.open(gmailUrl, "_blank");
  });
}

// SCROLL REVEAL ANIMATION
if ("IntersectionObserver" in window) {
  const revealSections = document.querySelectorAll(
    "#about, #experience, #projects, #contact, footer",
  );

  document.body.classList.add("reveal-enabled");

  revealSections.forEach((section) => {
    section.classList.add("reveal");
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealSections.forEach((section) => {
    revealObserver.observe(section);
  });
}
