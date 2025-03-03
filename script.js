document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const modalImg = modal.querySelector('img');
    const closeBtn = modal.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');

    // Function to open modal
    function openModal(imgSrc) {
        modalImg.src = imgSrc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    // Function to close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        setTimeout(() => {
            modalImg.src = ''; // Clear the image source after transition
        }, 300);
    }

    // Add click event to project cards
    projectCards.forEach(card => {
        const projectImg = card.querySelector('img');
        if (projectImg) {
            card.addEventListener('click', () => {
                openModal(projectImg.src);
            });
        }
    });

    // Close modal when clicking close button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}));