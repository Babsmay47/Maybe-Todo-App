export default class ThemeManager {
  constructor() {
    this.themeToggle = document.querySelector('.theme-toggle');
    this.logo = document.querySelector('.logo');
    this.htmlElement = document.documentElement;

    this.init();
    this.addListeners();
  }

  init() {
    const savedTheme = localStorage.getItem('theme');

    if(savedTheme) {
      this.setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark ? 'dark' : 'light');
    }
  }

  addListeners() {
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
  }

  /**
   * Get current theme
   */
  getCurrentTheme() {
    return this.htmlElement.getAttribute('data-theme') || 'light';
  }

  /**
   * Set theme to specified value
   */
  setTheme(theme) {
    this.htmlElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);

    if (this.themeToggle) {
      this.themeToggle.innerHTML =
        theme === 'dark'
          ? '<i class="ph ph-moon"></i>'
          : '<i class="ph ph-sun"></i>';

      if(theme === 'dark'){
        this.logo.src = './Assets/images/listra_logo_white.svg';
      } else {
        this.logo.src = './Assets/images/listra_wordmark.svg';
      }
    }

    window.dispatchEvent(new CustomEvent('themechange', {
      detail: { theme }
    }));
  }  

  toggleTheme() {
    const current = this.getCurrentTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }
}
