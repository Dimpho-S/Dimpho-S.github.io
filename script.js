// Side nav active state
// Only select sections with the class 'main-section'
const sections = document.querySelectorAll("section.main-section");
const navDots = document.querySelectorAll(".nav-dot");

window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.scrollY;

    sections.forEach(sec => {
        const sectionTop = sec.offsetTop - 100; // Adjust this offset as needed
        const sectionHeight = sec.offsetHeight;
        const sectionId = sec.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });

    navDots.forEach(dot => {
        dot.classList.remove("active");
        // Check if 'current' has a value to avoid errors
        if (current && dot.getAttribute("href") === `#${current}`) {
            dot.classList.add("active");
        }
    });
});

const topNav = document.getElementById('topNav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    topNav.style.display = 'none'; // hide when scrolled down
  } else {
    topNav.style.display = 'block'; // show at the top
  }
});



// Modal logic
function openModal(id){ document.getElementById(id).style.display = "flex"; }
function closeModal(id){ document.getElementById(id).style.display = "none"; }

document.querySelectorAll(".story-trigger").forEach(btn =>
  btn.addEventListener("click", () => openModal(btn.dataset.modal))
);
document.querySelectorAll(".project-thumb").forEach(thumb =>
  thumb.addEventListener("click", () => openModal(thumb.dataset.modal))
);
document.querySelectorAll(".skill-item").forEach(skill =>
  skill.addEventListener("click", () => openModal(skill.dataset.modal))
);
document.querySelectorAll(".close-btn").forEach(btn =>
  btn.addEventListener("click", () => closeModal(btn.dataset.close))
);

window.addEventListener("click", e => {
  if(e.target.classList.contains("modal")) e.target.style.display = "none";
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            comment: document.getElementById('comment').value
        };
        
        // Simple validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.comment) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        if (!isValidEmail(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Here you would typically send the data to your server
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });

    // Add click handlers for social media icons
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const title = this.getAttribute('title');
            // Replace these alerts with actual social media URLs
            switch(title) {
                case 'GitHub':
                    // window.open('https://github.com/Dimpho-S?tab=repositories', '_blank');
                    alert('https://github.com/Dimpho-S?tab=repositories');
                    break;
                case 'LinkedIn':
                    // window.open('https://www.linkedin.com/in/me/', '_blank');
                    alert('https://www.linkedin.com/in/me/');
                    break;
                case 'Email':
                    // window.open('https://instagram.com/yourprofile', '_blank');
                    window.location.href = 'mailto:rddsefora@gmail.com?subject=Contact Form Message';
                    break;
                default:
                    alert(`${title} link clicked - add your actual social media URL here`);
            }
        });
    });
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Optional: Add smooth focus animations
function addFocusAnimations() {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
}

// Call the focus animations function
addFocusAnimations();