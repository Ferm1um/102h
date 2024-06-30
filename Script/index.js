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




// Анимация появления
 // Получить все элементы с классом Sec_o_nas_icon
 const icons = document.querySelectorAll('.Sec_o_nas_icon');
        
 // Создать наблюдатель за появлением элементов
 const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('slide-in_4');
             observer.unobserve(entry.target); // Отключить наблюдение после срабатывания
         }
     });
 });

 // Применить наблюдатель ко всем элементам
 icons.forEach(icon => {
     icon.classList.remove('slide-in_4'); // Удалить класс при загрузке страницы
     observer.observe(icon);
 });



//  анимаци почему выбирают нас
        // Получить все элементы с классом block_li_text
        const textBlocks = document.querySelectorAll('.block_li_text');


        // Создать наблюдатель за появлением элементов
        const observer_1 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer_1.unobserve(entry.target); // Отключить наблюдение после срабатывания
                }
            });
        });

        // Применить наблюдатель ко всем элементам
        textBlocks.forEach(block => {
            observer_1.observe(block);
        });