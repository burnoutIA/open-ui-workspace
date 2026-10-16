# Badge

## Usage

Étiquette courte qui qualifie un statut (« Validé », « En attente ») ou une catégorie. Non interactive : pour une étiquette cliquable ou supprimable, créer un autre composant.

Tonalités : `neutral` (par défaut, information sans jugement), `info`, `success`, `warning`, `danger`.

## Props

| Prop | Type | Defaut | Description |
|------|------|--------|-------------|
| `tone` | `string` | `'neutral'` | `neutral`, `info`, `success`, `warning` ou `danger` |
| `text` | `string` | `'Brouillon'` | Texte du badge, un ou deux mots |

## Accessibilite

- La tonalité n'est qu'un renfort : le texte doit porter seul le sens (« Rejeté », pas une simple pastille rouge).
- Rôles `--color-{tonalité}-text` sur `--color-{tonalité}-surface` : chaque paire dépasse 4.5:1, vérifiée par `npm run health`.
- Élément `<span>` sans rôle : si le statut change dynamiquement, c'est au conteneur d'annoncer le changement.

## Exemples

### Exemple de base
```twig
{% include 'dev/components/badge/badge.twig' with {
  text: 'Brouillon'
} %}
```

### Statut validé
```twig
{% include 'dev/components/badge/badge.twig' with {
  tone: 'success',
  text: 'Validé'
} %}
```
