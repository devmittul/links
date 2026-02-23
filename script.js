// 3D Tilt Effect for Card
const card = document.getElementById('tiltCard');

document.addEventListener('mousemove', (e) => {
    // Only apply tilt on larger screens
    if (window.innerWidth <= 768) {
        card.style.transform = 'none';
        return;
    }
    
    // Calculate mouse position relative to center of screen
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;
    
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Reset tilt on mouseleave
document.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
