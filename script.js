// 🔝 Scroll to Top Function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show button only when scrolled down
window.onscroll = function () {
  const btn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

//  Contact Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields before submitting.");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Thanks for reaching out! 💌");
  return true;
}

// Hide the loader once the page is fully loaded
window.onload = function () {
  document.getElementById("loader").style.display = "none";
};

// 🧊 Reveal on Scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);


document.getElementById("contactForm").addEventListener("submit", function(event) { 
  event.preventDefault();
  emailjs.sendForm("service_r7ur4cd", "template_fagnb3d", this)
    .then(function() {
  document.getElementById("sent-message").style.display = "block";
}, function(error) {
      alert("Oops! Something went wrong... 😢");
      console.log(error);
    });

  this.reset(); // Clear form after sending
});



