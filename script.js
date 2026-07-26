// Scroll event listener for navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => observer.observe(el));

// Countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const eventDate = new Date('2026-08-01').getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
        document.getElementById('cd-days').textContent = '00';
        document.getElementById('cd-hours').textContent = '00';
        document.getElementById('cd-minutes').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-minutes').textContent = String(minutes).padStart(2, '0');
}

// Update countdown every minute
updateCountdown();
setInterval(updateCountdown, 60000);

// Access code verification
function verifyAccess() {
    const code = document.getElementById('access-code').value.trim();
    const correctCode = 'GTA6-LAUNCH';

    if (code === correctCode) {
        document.getElementById('access-form').style.display = 'none';
        document.getElementById('access-success').classList.add('active');
        setTimeout(() => {
            document.getElementById('notice').scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    } else {
        alert('Invalid access code. Please try again or click "Need a hint?"');
    }
}

// Hint popup functions
function openHint() {
    document.getElementById('hint-popup').classList.add('active');
}

function closeHint() {
    document.getElementById('hint-popup').classList.remove('active');
}

function closeHintOnBackground(event) {
    if (event.target === document.getElementById('hint-popup')) {
        closeHint();
    }
}

// Continue to partner
function continueToPartner() {
    alert('Redirecting to partner site...');
    // In a real scenario, this would redirect to an actual partner URL
    // window.location.href = 'https://partner-url.com';
}

// Video play/pause overlay handling
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('gtaVideo');
    const playOverlay = document.querySelector('.play-overlay');

    if (video && playOverlay) {
        video.addEventListener('play', () => {
            playOverlay.style.opacity = '0';
            playOverlay.style.pointerEvents = 'none';
        });

        video.addEventListener('pause', () => {
            playOverlay.style.opacity = '1';
            playOverlay.style.pointerEvents = 'auto';
        });
    }
});
