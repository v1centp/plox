document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll(".section");
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        observer.observe(section);
    });
});
