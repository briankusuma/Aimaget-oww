console.log("Its live!!");

// mneus mobile
document.querySelector('.navbar-humburger').addEventListener('click', () => {
    document.querySelector('.menus-navbar').classList.toggle('open');
    document.querySelector('.navbar-humburger').classList.toggle('close');
    
});

// slider logic
var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    centeredSlides: true,
    // slidesPerView: 5,
    autoplay: true,
    loop: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 50,
        stretch: -80,
        depth: 200,
        modifier: 0.4,
        slideShadows: false,
    },
    navigation: {
        nextEl: '.swiper-wrapper-button-next',
        prevEl: '.swiper-wrapper-button-prev',
    },
    breakpoints: {
        // When window width is >= 640px (mobile view)
        360: {
            slidesPerView: 3, // Show 3 slides per view on mobile
            
        },
        414: {
            slidesPerView: 3, // Show 3 slides per view on mobile
            
        },
        // When window width is >= 1024px (tablet or desktop)
        1024: {
            slidesPerView: 5,
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

AOS.init();