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

    // // slider logic whychoose
    // const slider = new Swiper('.slide-card', {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     centeredSlides: true,
    //     loop: true,
    //     autoplay: true,
    //     navigation: {
    //         nextEl: '.choose-button-next',
    //         prevEl: '.choose-button-prev',
    //     },
    //     // Nonaktifkan pagination
    //     pagination: false,
    //     // Custom selectors
    //     wrapperClass: 'custom-wrapper',
    //     slideClass: 'custom-slide',
    // });
    // console.log(slider)
    document.addEventListener('DOMContentLoaded', function () {
        var prevButton = document.querySelector('#btn-prev');
        var nextButton = document.querySelector('#btn-next');

        var splide = new Splide('#carousel', {
            type       : 'loop',
            autoplay  : true,
            pagination: false,
            autoWidth: true,
            arrows    : false,
            gap: "30px",
            breakpoints: {
                640: {
                    autoWidth: true
                }
            }
        });
            prevButton.addEventListener('click', function () {
                splide.go('<');
            });
        
            nextButton.addEventListener('click', function () {
                    splide.go('>');
            });

        splide.mount();
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