// Smooth scrolling for menu links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Welcome alert (runs when page loads)
window.onload = function() {
    alert("Welcome to My College Website 🎓");
};


// Highlight section on click
document.querySelectorAll('h2').forEach(section => {
    section.addEventListener('click', () => {
        section.style.color = "#ffeaa7";
    });
});