console.log("Its live!!");

// mneus mobile
document.querySelector('.navbar-humburger').addEventListener('click', () => {
    document.querySelector('.menus-navbar').classList.toggle('open');
});


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
    breakpoints: {
        // Ketika layar lebih kecil dari 600px, tampilkan 3 slide
        600: {
            slidesPerView: 5,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 500,
                depth: 500,
                modifier: 1,
                slideShadows: false,
            },
        },
        // Ketika layar lebih kecil dari 480px, tampilkan 1 slide
        480: {
            slidesPerView: 1,
        },
    },
});

// faq logic
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.icon');
            
            if (answer.classList.contains('fold')) {
            answer.classList.remove('fold');
            icon.textContent = '+';
            } else {
            document.querySelectorAll('.faq-answer').forEach((otherAnswer) => {
                otherAnswer.classList.remove('fold');
                otherAnswer.previousElementSibling.querySelector('.icon').textContent = '+';
            });
            answer.classList.add('fold');
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