let currentIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    const totalSlides = slides.length;

    // Сдвигаем слайды влево на ширину одного слайда
    slider.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (currentIndex < totalSlides - 3) { // Минус 3, так как показываются три слайда одновременно
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    showSlides();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 3; // Минус 3, так как показываются три слайда одновременно
    }

    showSlides();
}

// Инициализация слайдов
showSlides();