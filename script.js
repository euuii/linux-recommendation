document.addEventListener('DOMContentLoaded', function () {
    // Get the current filename, e.g. "gaming.html"
    const currentPage = window.location.pathname.split('/').pop();

    // Loop through every sidebar link
    document.querySelectorAll('.filter-link').forEach(function (link) {
        // If the link's href matches the current page, mark it active
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});