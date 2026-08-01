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
// 2. CONTACT FORM SUBMISSION HANDLER
// ==========================================
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Simple validation check
        if (!fullName || !email || !subject || !message) {
            showFeedback("Please fill out all fields before sending.", "error");
            return;
        }

        // Email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFeedback("Please enter a valid email address.", "error");
            return;
        }

        // Simulate form submission process
        showFeedback("Sending your message...", "success");

        setTimeout(() => {
            showFeedback("Thank you! Your message has been sent successfully.", "success");
            contactForm.reset();
        }, 1200);
    });
}

function showFeedback(text, type) {
    formFeedback.textContent = text;
    formFeedback.className = `form-feedback ${type}`;
}

// ==========================================
// 3. FAQ ACCORDION FUNCTIONALITY
// ==========================================
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const faqItem = question.parentElement;
        const faqAnswer = faqItem.querySelector(".faq-answer");
        const isOpen = faqItem.classList.contains("active");

        // Close all other active FAQ items
        document.querySelectorAll(".faq-item").forEach(item => {
            item.classList.remove("active");
            item.querySelector(".faq-answer").style.maxHeight = null;
        });

        // Toggle current clicked item
        if (!isOpen) {
            faqItem.classList.add("active");
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
        }
    });
});