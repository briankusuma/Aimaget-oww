console.log("Its live!!");

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