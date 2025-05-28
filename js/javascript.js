document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".rightCol");
  const closeBtn = document.querySelector(".closeBtn");
  const openBtn = document.querySelector(".openBtn");
  const closingBtn = document.querySelector(".closingBtn");
  const navLinks = document.querySelectorAll(".navbar-nav a"); // لینک‌ها

  function closeSidebar() {
    sidebar.classList.add("closed");
    closeBtn.style.display = "none";
  }

  function openSidebar() {
    sidebar.classList.remove("closed");
    closeBtn.style.display = "block";
  }

  function autoCloseOnMobile() {
    if (window.innerWidth < 700) {
      closeSidebar();
    } else {
      sidebar.classList.remove("closed");
    }
  }

  if (openBtn) openBtn.addEventListener("click", openSidebar);
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  if (closingBtn) closingBtn.addEventListener("click", closeSidebar);

  // بستن منو با کلیک روی لینک‌ها
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 700) {
        closeSidebar();
      }
    });
  });

  autoCloseOnMobile();
  window.addEventListener("resize", autoCloseOnMobile);

  // 🔻 کد Swiper رو بذار همینجا
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 }
    }
  });
});
