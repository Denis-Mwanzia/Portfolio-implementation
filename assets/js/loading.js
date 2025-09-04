// Loading Screen Component
document.addEventListener('DOMContentLoaded', function() {
  // Create loading screen
  const loadingScreen = document.createElement('div');
  loadingScreen.className = 'loading';
  loadingScreen.innerHTML = `
    <div class="spinner"></div>
  `;
  
  // Insert at the beginning of body
  document.body.insertBefore(loadingScreen, document.body.firstChild);
  
  // Remove loading screen after page load
  window.addEventListener('load', function() {
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }, 800);
  });
});