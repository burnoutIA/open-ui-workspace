# Link

## Usage

Navigue vers une page, une ancre ou une ressource. Pour déclencher une action sans navigation, utiliser `button`.

- `inline` : lien dans un texte courant.
- `standalone` : lien isolé (fin de bloc, « Voir tout »), plus appuyé.

## Props

| Prop | Type | Defaut | Description |
|------|------|--------|-------------|
| `variant` | `string` | `'inline'` | `inline` ou `standalone` |
| `newWindow` | `boolean` | `false` | Ouvre dans une nouvelle fenêtre, avec icône et mention restituée |
| `text` | `string` | `'Consulter la documentation'` | Intitulé du lien |
| `href` | `string` | `'/documentation'` | Destination réelle |

## Accessibilite

- `<a href>` natif ; jamais `href="#"` ni lien sans destination.
- Souligné en permanence : le lien ne se distingue pas que par la couleur dans un texte (critère RGAA 10.6).
- L'intitulé doit être explicite hors contexte, ou rendu explicite par son contexte immédiat (critère RGAA 6.1).
- `newWindow` : icône visible (`aria-hidden`) et mention « (nouvelle fenêtre) » masquée visuellement mais restituée, plus `rel="noopener noreferrer"`. Réserver l'ouverture d'une nouvelle fenêtre aux cas justifiés (document externe, parcours à ne pas interrompre).
- Focus visible via `focus-ring`.

## Exemples

### Exemple de base
```twig
{% include 'dev/components/link/link.twig' with {
  text: 'Consulter la documentation',
  href: '/documentation'
} %}
```

### Lien externe isolé
```twig
{% include 'dev/components/link/link.twig' with {
  variant: 'standalone',
  newWindow: true,
  text: 'Lire la méthode RGAA',
  href: 'https://accessibilite.numerique.gouv.fr/methode/'
} %}
```
