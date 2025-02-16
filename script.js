document.addEventListener('DOMContentLoaded', function() {
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

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('click', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.9)';
        setTimeout(() => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100);
    });

    meowBtn.addEventListener('click', () => {
        meowCount++;
        meowBtn.textContent = `Make me meow! (${meowCount})`;

        const meow = new Audio('https://www.soundjay.com/misc/sounds/cat-meow-1.mp3');
        meow.play();

        const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];

        const toast = document.createElement('div');
        toast.className = 'toast align-items-center text-white bg-primary border-0';
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        toast.setAttribute('aria-atomic', 'true');
        toast.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">
                    Cat Fact #${meowCount}: ${randomFact}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        `;

        document.body.appendChild(toast);
        const bsToast = new bootstrap.Toast(toast);
        bsToast.show();

        setTimeout(() => {
            toast.remove();
        }, 5000);
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});