document.addEventListener('DOMContentLoaded', () => {
    const themeToggleLink   = document.getElementById('theme-toggle-link');
    const themeTextSpan     = document.getElementById('theme-text');
    const body              = document.body;
    const savedTheme        = localStorage.getItem('theme');
    
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggleLink.dataset.theme = savedTheme === 'dark-theme' ? 'dark' : 'light';
        updateThemeText(savedTheme);
    }

    themeToggleLink.addEventListener('click', (event) => {
        event.preventDefault();
        body.classList.toggle('dark-theme');
        const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
        localStorage.setItem('theme', currentTheme);
        themeToggleLink.dataset.theme = currentTheme === 'dark-theme' ? 'dark' : 'light';
        updateThemeText(currentTheme);
    });

    function updateThemeText(theme) {
        themeTextSpan.textContent = theme === 'dark-theme' ? 'Dark' : 'Light';
    }
});