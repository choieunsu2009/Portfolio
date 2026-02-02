/**
 * Theme Toggle (Dark/Light Mode)
 * Stores preference in localStorage
 */

(function() {
  'use strict';

  const THEME_KEY = 'portfolio-theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  // Get stored theme or default to dark
  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY) || DARK;
  }

  // Set theme on document
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateToggleIcon(theme);
  }

  // Update toggle button icon
  function updateToggleIcon(theme) {
    const moonIcon = document.querySelector('.icon-moon');
    const sunIcon = document.querySelector('.icon-sun');

    if (moonIcon && sunIcon) {
      if (theme === DARK) {
        moonIcon.style.display = 'inline';
        sunIcon.style.display = 'none';
      } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline';
      }
    }
  }

  // Toggle between dark and light
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === DARK ? LIGHT : DARK;
    setTheme(newTheme);
  }

  // Initialize on DOM load
  function init() {
    // Set initial theme
    setTheme(getStoredTheme());

    // Add click listener to toggle button
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
