
// for dark mode button
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    themeIcon.setAttribute('icon', html.classList.contains('dark') ? 'lucide:sun' : 'lucide:moon');
});