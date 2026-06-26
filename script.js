const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    // toggle dark-mode class 
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeIcon.setAttribute('icon', 'lucide:sun');
    } else {                                                   // swapping icons 
        themeIcon.setAttribute('icon', 'lucide:moon');
    }
});