
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const inner = carousel.querySelector('.carousel-inner');
        const items = carousel.querySelectorAll('.carousel-item');
        const prevBtn = carousel.querySelector('.carousel-control-prev');
        const nextBtn = carousel.querySelector('.carousel-control-next');
        
        if (!items.length) return;

        let currentIndex = 0;
        
        // Ensure first item is active initially
        items[0].classList.add('active');

        function showSlide(index) {
            // Hide all
            items.forEach(item => item.classList.remove('active'));
            
            // Handle wrapping
            if (index >= items.length) currentIndex = 0;
            else if (index < 0) currentIndex = items.length - 1;
            else currentIndex = index;

            // Show new
            items[currentIndex].classList.add('active');
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showSlide(currentIndex - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showSlide(currentIndex + 1);
            });
        }

        // Auto play (optional, matches Bootstrap default)
        setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000);
    });
});
