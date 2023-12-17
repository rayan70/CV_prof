
    document.addEventListener("DOMContentLoaded", function () {
        // Function to validate the email format
        function validateEmail(email) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Function to handle form submission
        function handleSubmit(event) {
            event.preventDefault();

            var name = document.getElementById('name').value;
            var address = document.getElementById('address').value;
            var phone = document.getElementById('phone').value;
            var email = document.getElementById('email').value;

            // Perform validation
            if (name && address && phone && validateEmail(email)) {
                alert('Form submitted successfully!');
            } else {
                alert('Please fill in all fields with valid information.');
            }
        }

        // Add a submit event listener to the form
        var contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', handleSubmit);
    });
    document.addEventListener("DOMContentLoaded", function () {
        // Function to create a simple image slideshow
        function startImageSlideshow() {
            var images = [
                '111.png',
                '22.png',
                
                // Add more image paths as needed
            ];

            var slideshowContainer = document.querySelector('.slideshow');
            var imageIndex = 0;

            function changeImage() {
                slideshowContainer.src = images[imageIndex];
                imageIndex = (imageIndex + 1) % images.length;
            }

            // Change image every 3 seconds (adjust as needed)
            setInterval(changeImage, 3000);
            slideshowContainer.style.width = "500px";  // Example width
            slideshowContainer.style.height = "500px"; // Example height
            
        }

        // Call the function to start the image slideshow
        startImageSlideshow();
    });
    function animateBars() {
        var bars = document.querySelectorAll('.barre');

        bars.forEach(function (bar) {
            var width = bar.style.width;
            bar.style.width = '0%';  // Reset width to 0%
            setTimeout(function () {
                bar.style.width = width;  // Set width back to original value
            }, 1000);  // Delay for 1000 milliseconds before setting width
        });
    }

    // Trigger the animation when the page loads
    window.addEventListener('load', animateBars);
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
