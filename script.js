let video = document.getElementById("myVideo");
let centerPlayPause = document.getElementById("centerPlayPause");
let seekBar = document.getElementById("seekBar");
let currentTimeText = document.getElementById("currentTime");
let totalTimeText = document.getElementById("totalTime");
let fullscreenBtn = document.getElementById("fullscreen");
let controls = document.getElementById("controls");
let videoContainer = document.getElementById("videoContainer");

// Play/Pause Toggle (Center Button)
centerPlayPause.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        centerPlayPause.classList.add("hidden");
    } else {
        video.pause();
        centerPlayPause.classList.remove("hidden");
    }
});

// Play/Pause Toggle (Click on Video)
video.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        centerPlayPause.classList.add("hidden");
    } else {
        video.pause();
        centerPlayPause.classList.remove("hidden");
    }
});

// Update Seek Bar and Duration
video.addEventListener("timeupdate", function () {
    let current = formatTime(video.currentTime);
    let total = formatTime(video.duration);
    currentTimeText.textContent = current;
    totalTimeText.textContent = total;
    seekBar.value = (video.currentTime / video.duration) * 100;
});

// Seek Bar Change
seekBar.addEventListener("input", function () {
    video.currentTime = (seekBar.value / 100) * video.duration;
});

// Fullscreen Toggle
fullscreenBtn.addEventListener("click", function () {
    if (!document.fullscreenElement) {
        videoContainer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

// Auto-Hide Controls when Playing
video.addEventListener("play", function () {
    hideControls();
});
video.addEventListener("pause", function () {
    showControls();
});

// Auto-Hide Controls when Inactive
let timeout;
videoContainer.addEventListener("mousemove", function () {
    showControls();
    clearTimeout(timeout);
    timeout = setTimeout(hideControls, 2000);
});

// Show Controls
function showControls() {
    controls.classList.remove("hidden");
}

// Hide Controls
function hideControls() {
    if (!video.paused) {
        controls.classList.add("hidden");
    }
}

// Format Time (MM:SS)
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

// Carousel Slider

document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector(".carousel-prev");
    const nextBtn = document.querySelector(".carousel-next");
    const carouselItems = document.querySelector(".carousel-items");

    let scrollAmount = 0;
    let scrollStep = 300; // Adjust for item width

    nextBtn.addEventListener("click", function () {
        carouselItems.scrollBy({ left: scrollStep, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", function () {
        carouselItems.scrollBy({ left: -scrollStep, behavior: "smooth" });
    });
});
