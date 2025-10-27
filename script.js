document.addEventListener('DOMContentLoaded', function () {

    // --- About Section Slider Logic ---
    const aboutSlides = document.querySelectorAll('.about-slide');
    if (aboutSlides.length > 0) {
        let currentAboutSlide = 0;
        const aboutSlideInterval = 4000; // Change image every 4 seconds

        // Initialize the first slide to be visible
        aboutSlides[0].classList.add('current-slide');

        function nextAboutSlide() {
            // Remove 'current-slide' from the current slide
            aboutSlides[currentAboutSlide].classList.remove('current-slide');

            // Move to the next slide, or wrap around to the first
            currentAboutSlide = (currentAboutSlide + 1) % aboutSlides.length;

            // Add 'current-slide' to the new current slide
            aboutSlides[currentAboutSlide].classList.add('current-slide');
        }

        // Start the automatic slideshow
        setInterval(nextAboutSlide, aboutSlideInterval);
    }


    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});