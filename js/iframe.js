const iframe = document.querySelector('iframe'); // Ensure this matches your iframe

iframe.addEventListener('mouseenter', () => {
    iframe.focus();
});

window.addEventListener("keydown", function(e) {
    // Only block the keys if the user is currently focused on the game
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        if (document.activeElement.tagName === "IFRAME") {
            e.preventDefault();
        }
    }
}, false);

// This ensures that clicking the iframe area immediately grabs focus 
// so the keys work on the first try
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'IFRAME') {
        e.target.focus();
    }
});