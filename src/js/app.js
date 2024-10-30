console.log("Its live!!");
// slider logic

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 5,
    autoplay: true,
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: -100,
        depth: 200,
        modifier: 0.4,
        slideShadows: false,
    },
    navigation: {
        nextEl: '.swiper-wrapper-button-next',
        prevEl: '.swiper-wrapper-button-prev',
    },
});

// faq logic
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.icon');
            
            if (answer.classList.contains('open')) {
            answer.classList.remove('open');
            icon.textContent = '+';
            } else {
            document.querySelectorAll('.faq-answer').forEach((otherAnswer) => {
                otherAnswer.classList.remove('open');
                otherAnswer.previousElementSibling.querySelector('.icon').textContent = '+';
            });
            answer.classList.add('open');
            icon.textContent = '-';
            }
        });
        });
    });
// tabs logic
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const target = document.getElementById(tab.getAttribute('data-tab'));
            target.classList.add('active');
        });
    });
});    