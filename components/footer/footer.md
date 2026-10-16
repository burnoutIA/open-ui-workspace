# Footer

## Usage

Pied de page minimal, une fois par page, après le contenu principal : liens légaux et copyright. Les liens utilisent l'atome `link`.

Liens attendus sur un site public français : mentions légales, données personnelles, et la mention d'accessibilité exigée par le RGAA (« Accessibilité : non conforme », « partiellement conforme » ou « totalement conforme »), qui renvoie vers la déclaration d'accessibilité. Mettre à jour cette mention selon le résultat de l'audit.

## Props

| Prop | Type | Defaut | Description |
|------|------|--------|-------------|
| `links` | `array` | 4 liens légaux | Liens : `text`, `href` ; liste vide = pas de navigation |
| `navLabel` | `string` | `'Liens légaux'` | Nom accessible de la `nav`, distinct de la navigation principale |
| `copyright` | `string` | `'© 2026 Mon site'` | Ligne de copyright |

## Accessibilite

- `<footer>` en dehors de `<main>` : landmark « information de contenu » restitué par les lecteurs d'écran.
- `nav` nommée « Liens légaux » pour la distinguer de la navigation principale du header.
- Liens soulignés (atome `link`) : identifiables sans la couleur.
- Texte en `--color-text-muted` et liens en `--color-link` sur `--color-surface` : contrastes vérifiés par `npm run health`.

## Responsive

Liens puis copyright empilés sur mobile ; sur une ligne, copyright à droite, à partir de 48rem. Les liens passent à la ligne si besoin.

## Exemples

### Exemple de base
```twig
{% include 'dev/components/footer/footer.twig' with {
  copyright: '© 2026 Atelier Durand'
} %}
```

### Liens personnalisés
```twig
{% include 'dev/components/footer/footer.twig' with {
  links: [
    { text: 'Mentions légales', href: '/mentions-legales' },
    { text: 'Accessibilité : partiellement conforme', href: '/accessibilite' }
  ],
  copyright: '© 2026 Atelier Durand'
} %}
```
