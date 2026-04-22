// 1. Prevent arrow keys from scrolling the window at all
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

// 2. Force the iframe to take focus on mouseover and click
const gameFrame = document.getElementById('gameFrame');

gameFrame.addEventListener('mouseenter', () => {
    gameFrame.focus();
});

gameFrame.addEventListener('click', () => {
    gameFrame.focus();
});