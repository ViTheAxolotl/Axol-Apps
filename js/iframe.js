// Global scroll-lock for all arrow keys and spacebar
window.addEventListener("keydown", function(e) {
    const keys = ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    
    if (keys.indexOf(e.code) > -1) {
        // If the focused element is an iframe, kill the default scroll
        if (document.activeElement.tagName === "IFRAME") {
            e.preventDefault();
        }
    }
}, false);

/**
 * Focus helper: Ensures clicking or hovering an iframe 
 * signals the browser to pass input to it.
 */
document.addEventListener('mouseover', function (e) {
    if (e.target.tagName === 'IFRAME') {
        e.target.focus();
    }
});

document.addEventListener('click', function (e) {
    if (e.target.tagName === 'IFRAME') {
        e.target.focus();
    }
});