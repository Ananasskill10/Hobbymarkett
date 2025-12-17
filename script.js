document.addEventListener('DOMContentLoaded', () => {
    // 1. Калькулятор цен
    const range = document.getElementById('daysRange');
    const daysText = document.getElementById('daysVal');
    const priceText = document.getElementById('totalPrice');

    if (range) {
        range.addEventListener('input', (e) => {
            const days = e.target.value;
            daysText.innerText = days;
            priceText.innerText = (days * 100) + ' ₸';
        });
    }

    // 2. Интерактивная сетка фона (движение при движении мыши)
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / 50;
        const y = e.clientY / 50;
        document.querySelector('.bg-grid').style.backgroundPosition = `${x}px ${y}px`;
    });
});// Анимация появления при прокрутке
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });document.addEventListener('DOMContentLoaded', () => {
    // 1. Интерактивная сетка фона
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / 60;
        const y = e.clientY / 60;
        const grid = document.querySelector('.bg-grid');
        if (grid) grid.style.backgroundPosition = `${x}px ${y}px`;
    });

    // 2. Анимация плавного появления блоков (Reveal)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = '0.8s ease-out';
        observer.observe(el);
    });

    // 3. Калькулятор (если есть на странице)
    const range = document.getElementById('daysRange');
    if (range) {
        range.addEventListener('input', (e) => {
            const days = e.target.value;
            document.getElementById('daysVal').innerText = days;
            document.getElementById('totalPrice').innerText = (days * 100) + ' ₸';
        });
    }
});
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));