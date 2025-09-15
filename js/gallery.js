// Get all the necessary elements from the HTML
    const videoSlides = document.querySelectorAll('.video-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentSlide = 0; // Tracks which video is currently visible

    // Function to show a specific slide and hide the others
    function showSlide(n) {
        // Hide all videos first
        videoSlides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Show the video at the specified index 'n'
        videoSlides[n].style.display = 'block';
    }

    // Function to move to the next slide
    function nextSlide() {
        currentSlide++;
        // If we've reached the end, loop back to the first video
        if (currentSlide >= videoSlides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    // Function to move to the previous slide
    function prevSlide() {
        currentSlide--;
        // If we've gone past the beginning, loop to the last video
        if (currentSlide < 0) {
            currentSlide = videoSlides.length - 1;
        }
        showSlide(currentSlide);
    }

    // Add event listeners to the buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Initially show the first video
    showSlide(currentSlide);