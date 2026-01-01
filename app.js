// app.js (à la racine)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./sw.js') // Chemin direct car ils sont voisins
            .then(reg => console.log('SW enregistré avec succès !'))
            .catch(err => console.log('Erreur SW :', err));
    });
}

let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  // Empêche la barre par défaut de s'afficher
  e.preventDefault();
  // Stocke l'événement pour plus tard
  deferredPrompt = e;
  // Affiche notre bouton personnalisé
  installBtn.style.display = 'block';

  installBtn.addEventListener('click', () => {
    // Cache notre bouton
    installBtn.style.display = 'none';
    // Affiche la boîte de dialogue d'installation
    deferredPrompt.prompt();
    // Attend la réponse de l'utilisateur
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('L\'utilisateur a installé la PWA');
      }
      deferredPrompt = null;
    });
  });
});
