// Application Bootstrapper
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => loadingScreen.remove(), 500);
        }, 800);
    }
});
