// app.js (à la racine)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./sw.js') // Chemin direct car ils sont voisins
            .then(reg => console.log('SW enregistré avec succès !'))
            .catch(err => console.log('Erreur SW :', err));
    });
}
