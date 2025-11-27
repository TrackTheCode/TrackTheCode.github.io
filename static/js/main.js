document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navbarLinks = document.getElementById('navbar-links');

    if (hamburgerMenu && navbarLinks) {
        hamburgerMenu.addEventListener('click', function() {
            navbarLinks.classList.toggle('active');
        });
    }
});