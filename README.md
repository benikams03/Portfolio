# DevKams — Portfolio de Beni Mukungulu

Portfolio React + Vite, adapté aux ordinateurs, tablettes et mobiles.

## Développement

```sh
npm install
npm run dev
npm run build
```

## Modifier le contenu

Le fichier `src/data/data.js` centralise les projets, la formation, les compétences, les expériences et le certificat de démonstration.

- `dataprojet` : titre, description, capture et lien de chaque projet.
- `dataCertification` : parcours académique. Ajouter les PDF dans `public/diplomes/`, puis renseigner `documentUrl` (ex. `/diplomes/licence.pdf`) pour activer leur consultation. Tant que ce champ est `null`, le bouton « Voir le diplôme » affiche que le document sera ajouté prochainement.
- `skillGroups` : compétences regroupées par domaine.
- `experiences` : entreprise (`company`), poste (`role`), période (`period`), durée (`duration`), missions (`description`) et compétences (`skills`). Dupliquer l’objet pour ajouter une expérience et utiliser un `id` unique. L’entrée actuelle est illustrative : remplacer ses informations avant publication.
- `certificates` : titre, organisme et année du certificat. Les deux entrées actuelles sont des démonstrations graphiques clairement signalées, et ne représentent pas des certifications obtenues. Chaque bouton ouvre l’aperçu du certificat sélectionné. Pour intégrer un vrai document, remplacer aussi l’aperçu et le contenu du dialogue dans `src/App.jsx`.

La nouvelle photo est importée dans `src/App.jsx` depuis `src/assets/photos/Sans titre-1.jpg`. Le CV téléchargeable se trouve dans `public/CV_beni_mukungulu.pdf`.

## Design et accessibilité

Les styles et les adaptations aux différentes tailles d’écran sont dans `src/assets/styles/app.css`. Les apparitions au défilement utilisent IntersectionObserver, sans dépendance supplémentaire. Les préférences de réduction des animations sont respectées. Le certificat peut être fermé avec Échap et le dialogue gère le focus clavier.
