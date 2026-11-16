function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const contactForm = document.getElementById("contact-form");

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
