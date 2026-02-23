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

// Custom Cursor Creation
const cursorDot = document.createElement('div');
const cursorOutline = document.createElement('div');

cursorDot.classList.add('cursor-dot');
cursorOutline.classList.add('cursor-outline');

document.body.appendChild(cursorDot);
document.body.appendChild(cursorOutline);

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Update dot instantly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Animate outline with slight delay for trailing effect
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards", easing: "ease-out" });
});

// Cursor Hover effects on links
const links = document.querySelectorAll('a, .profile-pic');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)";
        cursorOutline.style.borderColor = "#06b6d4";
    });
    link.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
        cursorOutline.style.borderColor = "rgba(255, 255, 255, 0.5)";
    });
});
