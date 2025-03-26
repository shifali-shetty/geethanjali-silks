// Toggle mobile menu on click
document.querySelector(".menu-icon").addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.toggle("active");
  });
  document.querySelectorAll('.dropdown > a').forEach(drop => {
    drop.addEventListener('click', (e) => {
        e.preventDefault();
        const submenu = drop.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});
  
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

// Display the correct slide
function showSlide(index) {
    if (index < 0) currentIndex = slides.length - 1;
    else if (index >= slides.length) currentIndex = 0;
    else currentIndex = index;

    const slideWidth = slides[0].clientWidth;
    document.querySelector('.carousel-track').style.transform = `translateX(${-slideWidth * currentIndex}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Arrow navigation
function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// Dot navigation
function goToSlide(index) {
    showSlide(index);
}

// Auto-slide every 5s
setInterval(() => moveSlide(1), 5000);

// Initialize carousel
showSlide(currentIndex);
function nextImage(btn) {
    let images = btn.parentElement.querySelectorAll('.product-image');
    let current = Array.from(images).findIndex((img) => img.classList.contains('active'));
    images[current].classList.remove('active');
    images[(current + 1) % images.length].classList.add('active');
}

function prevImage(btn) {
    let images = btn.parentElement.querySelectorAll('.product-image');
    let current = Array.from(images).findIndex((img) => img.classList.contains('active'));
    images[current].classList.remove('active');
    images[(current - 1 + images.length) % images.length].classList.add('active');
}


typeEffect();
function changeGownImage(imageSrc) {
    document.getElementById('gown-active-img').src = imageSrc;
}
// Change Gown Image Function
function changeGownImage(imgSrc) {
    document.getElementById('gown-active-img').src = imgSrc;
}

// Open Cart
function openCart() {
    document.querySelector('.cart-sidebar').classList.add('active');
    document.querySelector('.cart-overlay').classList.add('active');
}

// Close Cart
function closeCart() {
    document.querySelector('.cart-sidebar').classList.remove('active');
    document.querySelector('.cart-overlay').classList.remove('active');
}
document.addEventListener("DOMContentLoaded", () => {
    const quantitySpan = document.getElementById("cart-quantity");
    const decreaseBtn = document.getElementById("decrease-btn");
    const increaseBtn = document.getElementById("increase-btn");

    let quantity = 1; // Ensure quantity starts at 1

    // Decrease quantity (min 1)
    decreaseBtn.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantitySpan.textContent = quantity;
        }
    });

    // Increase quantity
    increaseBtn.addEventListener("click", () => {
        quantity++;
        quantitySpan.textContent = quantity;
    });
});
