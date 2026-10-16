# Error Summary

## Usage

Récapitulatif des erreurs d'un formulaire refusé, placé en haut du contenu, avant le formulaire. Il liste chaque erreur avec un lien vers le champ concerné. Avec une liste vide (défaut), il n'affiche rien : la page peut l'inclure sans condition.

Chaque erreur du récapitulatif doit aussi être affichée sur son champ (`form-field`, prop `error`), avec le même message. La page qui l'affiche préfixe son `<title>` par « Erreur : ».

## Props

| Prop | Type | Defaut | Description |
|------|------|--------|-------------|
| `title` | `string` | `'Le formulaire contient des erreurs'` | Titre (`h2`) du récapitulatif |
| `errors` | `array` | `[]` | Erreurs : `field` (`id` du champ) et `message` ; vide = rien n'est affiché |
| `id` | `string` | `'erreurs'` | `id` de la section ; le titre prend `{id}-titre` |

## Accessibilite

- Section nommée par son titre (`aria-labelledby`) : région atteignable par les lecteurs d'écran.
- Au chargement de la page, le récapitulatif reçoit le focus (`tabindex="-1"`) : le lecteur d'écran annonce son titre et le nombre d'erreurs, et la touche Tab mène directement au premier lien.
- Chaque lien place le focus dans le champ concerné et fait défiler jusqu'à son libellé, pour que libellé et message d'erreur restent visibles.
- Messages identiques à ceux des champs, qui disent quoi corriger (critère RGAA 11.10).
- Bordure en `--color-danger-text` et liens soulignés : l'état ne repose pas que sur la couleur.

## Comportement (script)

`error-summary.js`, importé par `dev/assets/js/main.js`. Le focus au chargement ne vise que le premier récapitulatif de la page. Sans JavaScript, les liens restent des ancres vers les champs.

## Exemples

### Exemple de base
```twig
{% include 'dev/components/error-summary/error-summary.twig' with {
  errors: [
    { field: 'email', message: 'Saisissez une adresse e-mail au format nom@exemple.fr.' }
  ]
} only %}
```

### Titre propre au formulaire
```twig
{% include 'dev/components/error-summary/error-summary.twig' with {
  title: "Le message n'a pas été envoyé",
  errors: errors
} only %}
```
