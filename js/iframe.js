const iframe = document.querySelector('iframe'); // Ensure this matches your iframe

iframe.addEventListener('mouseenter', () => {
    iframe.focus();
});

window.addEventListener("keydown", function(e) {
    // List of keys you want to stop from scrolling
    const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    
    // Check if the user is clicking on or inside the iframe
    // We check if the active element is the iframe or the body
    if (keys.includes(e.code)) {
        // If the user's focus is currently on the iframe, block the scroll
        if (document.activeElement.tagName === "IFRAME") {
            e.preventDefault();
        }
    }
}, false);