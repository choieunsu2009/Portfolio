/**
 * Language Toggle (English/Korean)
 * Stores preference in localStorage
 */

(function() {
  'use strict';

  const LANG_KEY = 'portfolio-lang';
  const EN = 'en';
  const KO = 'ko';

  // Get stored language or default to English
  function getStoredLang() {
    return localStorage.getItem(LANG_KEY) || EN;
  }

  // Set language
  function setLanguage(lang) {
    localStorage.setItem(LANG_KEY, lang);
    updateContent(lang);
    updateToggleButton(lang);
    updateHtmlLang(lang);
  }

  // Update HTML lang attribute
  function updateHtmlLang(lang) {
    document.documentElement.lang = lang === KO ? 'ko' : 'en';
  }

  // Update all content based on language
  function updateContent(lang) {
    // Show/hide elements with data-lang attribute
    const langElements = document.querySelectorAll('[data-lang]');

    langElements.forEach(el => {
      const elLang = el.getAttribute('data-lang');

      // Skip toggle button spans (handled separately)
      if (el.closest('.lang-toggle')) return;

      if (elLang === lang) {
        el.style.display = '';
      } else {
        el.style.display = 'none';
      }
    });
  }

  // Update toggle button active state
  function updateToggleButton(lang) {
    const toggleBtn = document.getElementById('langToggle');
    if (!toggleBtn) return;

    const enSpan = toggleBtn.querySelector('[data-lang="en"]');
    const koSpan = toggleBtn.querySelector('[data-lang="ko"]');

    if (enSpan && koSpan) {
      if (lang === EN) {
        enSpan.classList.add('lang-active');
        koSpan.classList.remove('lang-active');
      } else {
        enSpan.classList.remove('lang-active');
        koSpan.classList.add('lang-active');
      }
    }
  }

  // Toggle between English and Korean
  function toggleLanguage() {
    const currentLang = getStoredLang();
    const newLang = currentLang === EN ? KO : EN;
    setLanguage(newLang);
  }

  // Initialize on DOM load
  function init() {
    // Set initial language
    setLanguage(getStoredLang());

    // Add click listener to toggle button
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleLanguage);
    }
  }

  // Expose function for modal content updates
  window.updateLanguageContent = function() {
    updateContent(getStoredLang());
  };

  // Expose current language getter
  window.getCurrentLang = function() {
    return getStoredLang();
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
