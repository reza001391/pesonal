const sidebar = document.querySelector(".rightCol");
const closeBtn = document.querySelector(".closeBtn");
const openBtn = document.querySelector(".openBtn");
const closingBtn = document.querySelector(".closingBtn");

function closeSidebar() {
    sidebar.classList.add("closed");
    closeBtn.style.display = "none";

    document.querySelectorAll(".col-9").forEach(el => {
        el.classList.remove("col-9");
        el.classList.add("col-12");
    });
}

function openSidebar() {
    sidebar.classList.remove("closed");
    closeBtn.style.display = "block";

    document.querySelectorAll(".col-12").forEach(el => {
        el.classList.remove("col-12");
        el.classList.add("col-9");
    });
}

function autoCloseOnMobile() {
    if (window.innerWidth < 700) {
        closeSidebar();
    }
}

if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
if (openBtn) openBtn.addEventListener("click", openSidebar);
if (closingBtn) closingBtn.addEventListener("click", closeSidebar);


const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: false,
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
  