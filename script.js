// Hotel Manas Complete JavaScript File

// Smooth Scrolling
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Back to Top
const backToTop = document.createElement("button");
backToTop.textContent = "↑ Back to Top";
backToTop.className = "button";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.display = "none";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Room Availability Feature using flatpickr
flatpickr(".date-input", {
  minDate: "today",
  mode: "range",
  dateFormat: "Y-m-d"
});

// Booking adjustment logic (optional sample)
const bookingInputs = document.querySelectorAll(".room-quantity");
bookingInputs.forEach(input => {
  input.addEventListener("change", function() {
    const count = parseInt(this.value);
    const label = this.closest(".room").querySelector(".available-count");
    if (label) label.textContent = `Available: ${10 - count}`;
  });
});
