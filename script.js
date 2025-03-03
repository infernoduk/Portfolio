document.addEventListener('DOMContentLoaded', () => {
    const viewWorkBtn = document.querySelector('.primary-btn');
    
    viewWorkBtn.addEventListener('click', () => {
        const projectsSection = document.querySelector('#projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the resume button
    const resumeButton = document.querySelector('.secondary-btn');
    
    // Add click event listener
    resumeButton.addEventListener('click', function() {
        // Open resume PDF in a new tab
        window.open('resume.pdf', '_blank');
    });

    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.project-filters button');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.textContent.toLowerCase();

            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    const category = card.getAttribute('data-category');
                    card.style.display = category === filterValue ? 'block' : 'none';
                }
            });
        });
    });
});