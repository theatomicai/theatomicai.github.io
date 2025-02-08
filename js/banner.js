document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("hero-video");
    let reverse = false; // Track playback direction

    function updatePlayback() {
        if (reverse) {
            video.currentTime -= 0.033; // Adjust for ~30fps playback in reverse
            if (video.currentTime <= 0) {
                reverse = false; // Switch to forward playback
            }
        } else {
            video.currentTime += 0.033; // Adjust for ~30fps playback forward
            if (video.currentTime >= video.duration) {
                reverse = true; // Switch to reverse playback
            }
        }
        requestAnimationFrame(updatePlayback);
    }

    video.addEventListener("loadedmetadata", () => {
        video.pause(); // Pause native playback, we will handle it manually
        updatePlayback(); // Start custom playback loop
    });
});