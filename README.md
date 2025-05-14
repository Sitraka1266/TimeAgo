# TimeAgo

TimeAgo est une petite librairie JavaScript qui permet de convertir une date en un format lisible humainement, comme par exemple "il y a 2 jours" ou "dans 3 heures". Elle supporte les langues **français** (`fr`) et **anglais** (`en`).

## Installation

### 1. Depuis un fichier HTML

Si tu veux utiliser la librairie directement dans ton projet HTML, tu peux ajouter le script suivant :

```html
<script src="timeago.js"></script>
<script>
  const ago = new TimeAgo("fr");
  console.log(ago.format("2025-05-13T10:00:00"));
</script>
