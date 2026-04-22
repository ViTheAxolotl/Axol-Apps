const gameFrame = document.querySelector('iframe[src*="greenfoot"]');

if (gameFrame) {
    // When the mouse is over the game, freeze the parent page scroll
    gameFrame.addEventListener('mouseenter', () => {
        // Save the current scroll position
        const scrollV = window.scrollY;
        const scrollH = window.scrollX;
        
        // Lock the window at that position
        window.onscroll = function() {
            window.scrollTo(scrollH, scrollV);
        };
    });

    // When the mouse leaves the game, restore normal scrolling
    gameFrame.addEventListener('mouseleave', () => {
        window.onscroll = null;
    });
}

// Global Interceptor for Arrow Keys
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        // If we are focused on the game, stop the event from bubbling up to the browser
        if (document.activeElement.tagName === "IFRAME") {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}, true); // The 'true' here uses the capturing phase to catch the key before the browser scrolls