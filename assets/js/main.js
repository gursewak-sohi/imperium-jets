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
            loop: true,
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

    // Affordable Swiper
    const affordableSwiperID = document.getElementById('affordableSwiper');
    if (affordableSwiperID && window.innerWidth < 992) {
        const affordableSwiper = new Swiper('#affordableSwiper', {
            loop: true,
            autoHeight: true,
            pagination: {
                el: '#affordableSwiper .swiper-pagination',
            },
            navigation: {
                nextEl: '#affordableSwiper .swiper-button-next',
                prevEl: '#affordableSwiper .swiper-button-prev',
            },
        });
    }

    // Play video in Lightbox
    var gallery = document.querySelectorAll('.video-gallery');
    if (gallery.length) {
        for (var i = 0; i < gallery.length; i++) {
            lightGallery(gallery[i], {
                plugins: [lgVideo],
                autoplayVideoOnSlide: true,
                zoom: true
            });
        }
    }

    // Trigger click on Button
    const playVideoID = document.getElementById('playVideo');
    if (playVideoID) {
        playVideoID.onclick = (el) => {
            el.currentTarget.closest('.experience-video').querySelector('.video-gallery img').click();
        }
    }

    // Cross Fade Images 
    const fadeImageWrapperID = document.getElementById('fadeImageWrapper');
    if (fadeImageWrapperID && window.innerWidth < 992) {
        let timer = setInterval(nextImage, 4000);
        let curImage = 0;
        let numImages = 5;

        function nextImage() {
            let fadeImages = document.querySelectorAll("#fadeImageWrapper img");
            for (i = 0; i < fadeImages.length; i++) {
                fadeImages[i].classList.remove('show');
            }
            let e;
            // remove showMe class from current image
            e = document.getElementById("fadeImage" + curImage);
            removeClass(e, "show");

            // compute next image
            curImage++;
            if (curImage > numImages - 1) {
                curImage = 0;
            }

            // add showMe class to next image
            e = document.getElementById("fadeImage" + curImage);
            addClass(e, "show");
        }

        function addClass(elem, name) {
            let c = elem.className;
            if (c) c += " "; // if not blank, add a space separator
            c += name;
            elem.className = c;
        }

        function removeClass(elem, name) {
            let c = elem.className;
            elem.className = c.replace(name, "").replace(/   /g, " ").replace(/^ | $/g, ""); // remove name and extra blanks
        }
    }
})();