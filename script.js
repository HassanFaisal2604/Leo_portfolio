/* filepath: /C:/Users/HAssan/Desktop/Cat portolio/script.js */
const cursor = document.querySelector('.cursor');
const meowBtn = document.getElementById('meow-btn');
let meowCount = 0;

const catFacts = [
    "Cats sleep for 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats can't taste sweetness.",
    "A cat's nose print is unique, like a human's fingerprint.",
    "Cats can jump up to 6 times their length."
];

let currentX = 0;
let currentY = 0;
let aimX = 0;
let aimY = 0;

document.addEventListener('mousemove', (e) => {
    aimX = e.clientX;
    aimY = e.clientY;
});

const smoothCursor = () => {
    currentX += (aimX - currentX) * 0.2;
    currentY += (aimY - currentY) * 0.2;

    cursor.style.left = currentX + 'px';
    cursor.style.top = currentY + 'px';
    requestAnimationFrame(smoothCursor);
};

smoothCursor();

document.addEventListener('click', () => {
    cursor.style.transform = 'scale(0.8)';
    setTimeout(() => {
        cursor.style.transform = 'scale(1)';
    }, 100);
});

meowBtn.addEventListener('click', () => {
    meowCount++;
    meowBtn.textContent = `Make me meow! (${meowCount})`;

    const meow = new Audio('https://www.soundjay.com/misc/sounds/cat-meow-1.mp3');
    meow.play();

    // Display random cat fact
    const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    alert(`Cat Fact #${meowCount}: ${randomFact}`);
});

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});