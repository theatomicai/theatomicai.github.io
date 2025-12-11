// Modern Services Carousel
(function() {
    'use strict';
    
    function initServicesCarousel() {
        const carousel = document.getElementById('servicesCarousel');
        const track = document.getElementById('servicesCarouselTrack');
        const prevBtn = document.getElementById('carouselPrev');
        const nextBtn = document.getElementById('carouselNext');
        const indicators = document.getElementById('carouselIndicators');
        
        if (!carousel || !track || !prevBtn || !nextBtn || !indicators) return;
        
        const items = track.querySelectorAll('.service-item-apple');
        const totalItems = items.length;
        let currentIndex = 0;
        let isAnimating = false;
        
        // Calculate items per view based on screen size
        function getItemsPerView() {
            if (window.innerWidth >= 992) return 3;
            if (window.innerWidth >= 768) return 2;
            return 1;
        }
        
        // Create indicators
        function createIndicators() {
            indicators.innerHTML = '';
            const itemsPerView = getItemsPerView();
            const totalSlides = Math.ceil(totalItems / itemsPerView);
            
            for (let i = 0; i < totalSlides; i++) {
                const indicator = document.createElement('button');
                indicator.className = 'indicator';
                if (i === 0) indicator.classList.add('active');
                indicator.setAttribute('aria-label', `Go to slide ${i + 1}`);
                indicator.addEventListener('click', () => goToSlide(i));
                indicators.appendChild(indicator);
            }
        }
        
        // Update carousel position
        function updateCarousel() {
            if (isAnimating) return;
            isAnimating = true;
            
            const itemsPerView = getItemsPerView();
            const itemWidth = items[0].offsetWidth + 30; // width + margin
            const translateX = -(currentIndex * itemWidth);
            
            track.style.transform = `translateX(${translateX}px)`;
            
            // Update indicators
            const slideIndex = Math.floor(currentIndex / itemsPerView);
            const indicatorButtons = indicators.querySelectorAll('.indicator');
            indicatorButtons.forEach((ind, idx) => {
                ind.classList.toggle('active', idx === slideIndex);
            });
            
            // Update button states
            const maxIndex = totalItems - itemsPerView;
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
            
            setTimeout(() => {
                isAnimating = false;
            }, 600); // Match CSS transition duration
        }
        
        // Go to specific slide
        function goToSlide(slideIndex) {
            const itemsPerView = getItemsPerView();
            currentIndex = slideIndex * itemsPerView;
            updateCarousel();
        }
        
        // Next slide
        function nextSlide() {
            if (isAnimating) return;
            const itemsPerView = getItemsPerView();
            const maxIndex = totalItems - itemsPerView;
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        }
        
        // Previous slide
        function prevSlide() {
            if (isAnimating) return;
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        }
        
        // Event listeners
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
        
        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }
        
        // Keyboard navigation
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });
        
        // Make carousel focusable
        carousel.setAttribute('tabindex', '0');
        
        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                createIndicators();
                currentIndex = 0;
                updateCarousel();
            }, 250);
        });
        
        // Auto-play (optional - can be enabled)
        let autoPlayInterval;
        function startAutoPlay() {
            // Uncomment to enable auto-play
            // autoPlayInterval = setInterval(() => {
            //     const itemsPerView = getItemsPerView();
            //     const maxIndex = totalItems - itemsPerView;
            //     if (currentIndex >= maxIndex) {
            //         currentIndex = 0;
            //     } else {
            //         currentIndex++;
            //     }
            //     updateCarousel();
            // }, 5000);
        }
        
        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }
        
        // Pause on hover
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
        
        // Initialize
        createIndicators();
        updateCarousel();
        startAutoPlay();
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initServicesCarousel);
    } else {
        initServicesCarousel();
    }
})();