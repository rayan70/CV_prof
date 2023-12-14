
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
        }

        // Call the function to start the image slideshow
        startImageSlideshow();
    });
