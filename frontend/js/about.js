// ==========================================
// 1. MOBILE NAVBAR TOGGLE
// ==========================================
const mobileMenuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ==========================================
// 2. ANIMATED NUMBER COUNTERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 200; // Lower value = faster animation

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const updateCount = () => {
                const count = +counter.innerText;
                const increment = Math.ceil(target / speed);

                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 25);
                } else {
                    counter.innerText = target + "+";
                }
            };

            updateCount();
        });
    };

    // Intersection Observer to trigger counters when visible
    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observerInstance.disconnect(); // Run animation only once
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector(".stats-section");
    if (statsSection) {
        observer.observe(statsSection);
    }
});