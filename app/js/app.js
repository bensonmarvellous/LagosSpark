document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.onboarding-page');
    const dots = document.querySelectorAll('.dot');
    const nextButton = document.getElementById('nextButton');
    const skipButton = document.getElementById('skipButton');
    const getStartedButton = document.getElementById('getStarted');
    let currentPage = 0;

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            page.classList.toggle('active', index === pageIndex);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === pageIndex);
        });
        currentPage = pageIndex;

        // Hide the next button on the last page
        if (currentPage === pages.length - 1) {
            nextButton.style.display = 'none';
            skipButton.style.display = 'none'
        } else {
            nextButton.style.display = 'block';
            skipButton.style.display = 'block'
        }
    }
    function nextPage() {
        if (currentPage < pages.length - 1) {
            showPage(currentPage + 1);
        }
    }

    function skipOnboarding() {
        window.location.href = 'login.html'; // Redirect to login page
    }

    nextButton.addEventListener('click', nextPage);
    skipButton.addEventListener('click', skipOnboarding);
    getStartedButton.addEventListener('click', skipOnboarding);

    // Automatically show the first page
    showPage(currentPage);
});
