document.addEventListener('DOMContentLoaded', (event) => {
  const currentPageUrl = window.location.pathname.split('/').pop();
  const currentPageIndex = pages.findIndex(page => page.url === currentPageUrl);

  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  // Naviguer vers la page précédente
  prevButton.addEventListener('click', () => {
    if (currentPageIndex > 0) {
      window.location.href = pages[currentPageIndex - 1].url;
    }
  });

  // Naviguer vers la page suivante
  nextButton.addEventListener('click', () => {
    if (currentPageIndex < pages.length - 1) {
      window.location.href = pages[currentPageIndex + 1].url;
    }
  });

  // Désactiver les boutons si en début ou fin de la liste
  if (currentPageIndex <= 0) {
    prevButton.disabled = true;
  }
  if (currentPageIndex >= pages.length - 1) {
    nextButton.disabled = true;
  }
});
