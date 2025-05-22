// Menu Toggle + Active Menu on Scroll
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.innerHTML = menu.classList.contains('active')
      ? '<i class="bi bi-x"></i>'
      : '<i class="bi bi-list"></i>';
  });

  // Active menu item khi scroll tới section
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu li a');

  function setActiveMenu() {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveMenu);
});

// Logo resize on scroll
window.addEventListener('scroll', function () {
  const logoImg = document.querySelector('.logo img');
  if (window.scrollY > 50) {
    logoImg.style.height = '50px';
  } else {
    logoImg.style.height = '70px'; // Chiều cao ban đầu
  }
});

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("mobile-toggle");
  const close = document.getElementById("mobile-close");
  const mobileMenu = document.getElementById("nav-mobile-menu");
  const overlay = document.getElementById("mobile-overlay");

  toggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
  });

  close.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
  });
});

// Carousel thủ công (nếu dùng)
let currentSlide = 0;
function moveSlide(direction) {
  const slides = document.querySelectorAll('.msc-grid');
  const totalSlides = slides.length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
    document.getElementById("current-year").innerText = "KHÓA 2024";
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
    document.getElementById("current-year").innerText = "KHÓA 2025";
  }

  const carousel = document.querySelector('.carousel-slide');
  const offset = -currentSlide * (300 + 20);
  carousel.style.transform = `translateX(${offset}px)`;
}

// Back to Top Button
document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// 🔁 Auto Carousel Logo Loop
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const logos = document.querySelectorAll('.carousel-track img');

  // Clone logo để tạo vòng lặp liên tục
  logos.forEach(logo => {
    const clone = logo.cloneNode(true);
    track.appendChild(clone);
  });

  let scrollAmount = 0;
  const speed = 0.5; // tốc độ cuộn

  function autoScroll() {
    scrollAmount += speed;
    if (scrollAmount >= track.scrollWidth / 2) {
      scrollAmount = 0;
    }
    track.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
});
