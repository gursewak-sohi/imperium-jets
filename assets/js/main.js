(function() {
    // Animate Floating Header On Scroll
    const header = document.querySelector("header");
    if (header) {
        window.onscroll = () => scrollFunction();
        const scrollFunction = () => {
            if (document.body.scrollTop > 104 || document.documentElement.scrollTop > 104) {
                header.classList.add('active');
            } else {
                header.classList.remove('active');
            }
        }
    }

    // Toggle Menu
    const toggleMenu = (toggleID, toggleNav) => {
        let toggleLink = document.querySelector(toggleID),
            toggleItem = document.querySelector(toggleNav);
        if (toggleLink && toggleItem) {
            toggleLink.onclick = () => {
                if (toggleItem.classList.contains('active')) {
                    toggleItem.classList.remove("active");
                } else {
                    toggleItem.classList.add("active");

                }
            }
        }
    }
    toggleMenu('#toggleBtn', '#toggleNav');

    // Benefit Swiper
    const benefitSwiperID = document.getElementById('benefitSwiper');
    if (benefitSwiperID && window.innerWidth < 992) {
        const benefitSwiper = new Swiper('#benefitSwiper', {
            loop: false,
            autoHeight: true,
            pagination: {
                el: '#benefitSwiper .swiper-pagination',
            },
            navigation: {
                nextEl: '#benefitSwiper .swiper-button-next',
                prevEl: '#benefitSwiper .swiper-button-prev',
            },
        });
    }
})();