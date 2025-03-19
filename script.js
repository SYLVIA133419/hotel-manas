// ===== Flatpickr Calendar Initialization =====
flatpickr("#checkin", {
    minDate: "today",
    dateFormat: "Y-m-d"
  });
  
  flatpickr("#checkout", {
    minDate: "today",
    dateFormat: "Y-m-d"
  });
  
  // ===== Optional: Smooth Scroll for Navigation =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
  
  // ===== Optional: Future-proof - Room Data (not yet used, but good structure) =====
  const rooms = [
    {
      name: "Single Room",
      features: ["Cozy bed", "Private bathroom", "TV", "Wi-Fi"],
      price: 1500,
      breakfastPrice: 1800
    },
    {
      name: "Double Room",
      features: ["Double bed", "Air conditioning", "Private bathroom", "TV", "Tea/Coffee station", "Wi-Fi"],
      price: 2500,
      breakfastPrice: 2800
    },
    {
      name: "Twin Room",
      features: ["Two single beds", "Air conditioning", "Minibar", "Private bathroom", "TV", "Wi-Fi"],
      price: 1500,
      breakfastPrice: 1800
    }
  ];
  
  // In the future, you can use this structure to dynamically generate rooms using JavaScript and DOM.
// ===== Auto Sliding Food Menu Carousel =====
let foodSlider = document.getElementById('foodSlider');
let slideIndex = 0;
let autoSlideInterval;

function slideAutoScroll() {
  const slides = document.querySelectorAll('.food-slide');
  const slideWidth = slides[0].offsetWidth + 30; // width + gap
  slideIndex++;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  foodSlider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Manual controls (optional)
function slideNext() {
  clearInterval(autoSlideInterval);
  slideIndex++;
  const slides = document.querySelectorAll('.food-slide');
  if (slideIndex >= slides.length) slideIndex = 0;
  const slideWidth = slides[0].offsetWidth + 30;
  foodSlider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  startAutoScroll();
}

function slidePrev() {
  clearInterval(autoSlideInterval);
  slideIndex--;
  const slides = document.querySelectorAll('.food-slide');
  if (slideIndex < 0) slideIndex = slides.length - 1;
  const slideWidth = slides[0].offsetWidth + 30;
  foodSlider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  startAutoScroll();
}

// Start auto scroll
function startAutoScroll() {
  autoSlideInterval = setInterval(slideAutoScroll, 4000); // change every 4 seconds
}

window.addEventListener('load', startAutoScroll);
<script>
  document.getElementById("invoiceForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("guestName").value;
    const room = document.getElementById("roomType").value;
    const nights = parseInt(document.getElementById("nights").value);
    const breakfast = document.getElementById("withBreakfast").value;

    let pricePerNight = 0;

    if (room === "single") {
      pricePerNight = breakfast === "yes" ? 1800 : 1500;
    } else if (room === "double") {
      pricePerNight = breakfast === "yes" ? 2800 : 2500;
    } else if (room === "twin") {
      pricePerNight = breakfast === "yes" ? 1800 : 1500;
    }

    const total = pricePerNight * nights;

    // Output the invoice
    document.getElementById("outputName").textContent = name;
    document.getElementById("outputRoom").textContent = room.charAt(0).toUpperCase() + room.slice(1) + " Room";
    document.getElementById("outputNights").textContent = nights;
    document.getElementById("outputBreakfast").textContent = breakfast === "yes" ? "Included" : "Not Included";
    document.getElementById("outputTotal").textContent = total.toLocaleString();

    document.getElementById("invoiceOutput").style.display = "block";
  });
</script>
  