// Save the visitor's theme choice locally. No accounts or tracking.
(() => {
  const page = document.documentElement;
  let savedTheme;
  try { savedTheme = localStorage.getItem('portfolio-theme'); } catch {}
  const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
  page.dataset.theme = savedTheme === 'light' || savedTheme === 'dark'
    ? savedTheme : (prefersDark ? 'dark' : 'light');

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    const updateButton = () => {
      button.setAttribute('aria-pressed', String(page.dataset.theme === 'dark'));
    };
    updateButton();
    button.addEventListener('click', () => {
      page.dataset.theme = page.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('portfolio-theme', page.dataset.theme); } catch {}
      updateButton();
    });
  });
})();
