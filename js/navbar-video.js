/**
 * Optimized navbar video loading
 * Loads video once and leverages browser cache for subsequent page loads
 */
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    function initNavbarVideo() {
        const video = document.getElementById('navbar-video');
        if (!video) return;
        
        // Mark video as loaded in session to track first load
        const isFirstLoad = !sessionStorage.getItem('navbar-video-loaded');
        
        if (isFirstLoad) {
            // First load: use metadata preload and wait for canplay event
            video.preload = 'metadata';
            
            // Once metadata is loaded, switch to auto preload for smooth playback
            video.addEventListener('loadedmetadata', function() {
                video.preload = 'auto';
                sessionStorage.setItem('navbar-video-loaded', 'true');
                
                // Try to play the video
                playVideo(video);
            }, { once: true });
            
            // Load the video
            video.load();
        } else {
            // Subsequent loads: browser cache should make this instant
            // Set preload to auto since we know it's cached
            video.preload = 'auto';
            
            // Try to play immediately (should be fast from cache)
            video.addEventListener('canplay', function() {
                playVideo(video);
            }, { once: true });
            
            // Also try to play right away (for cached videos)
            playVideo(video);
        }
        
        // Handle video errors gracefully
        video.addEventListener('error', function() {
            console.warn('Navbar video failed to load, continuing without it');
            // Hide video element if it fails
            video.style.display = 'none';
        }, { once: true });
    }
    
    /**
     * Attempts to play the video with error handling
     */
    function playVideo(video) {
        if (!video) return;
        
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    // Video is playing successfully
                    video.classList.add('video-loaded');
                })
                .catch((error) => {
                    // Auto-play was prevented or video failed
                    // Try to play on user interaction
                    const tryPlay = () => {
                        video.play().catch(() => {});
                        document.removeEventListener('click', tryPlay);
                        document.removeEventListener('touchstart', tryPlay);
                        document.removeEventListener('scroll', tryPlay);
                    };
                    
                    // Try on first user interaction
                    document.addEventListener('click', tryPlay, { once: true, passive: true });
                    document.addEventListener('touchstart', tryPlay, { once: true, passive: true });
                    document.addEventListener('scroll', tryPlay, { once: true, passive: true });
                });
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavbarVideo);
    } else {
        initNavbarVideo();
    }
})();

