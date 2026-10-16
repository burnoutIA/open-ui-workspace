# Form Field

## Usage

Champ de formulaire complet en un seul composant : libellé, aide, message d'erreur et saisie (une ligne, ou zone de texte avec `type: 'textarea'`), reliés entre eux. C'est la seule façon d'afficher un champ texte dans un formulaire : il n'existe pas de `label` ni d'`input` séparés, pour qu'un champ ne puisse jamais être livré sans son libellé.

## Props

| Prop | Type | Defaut | Description |
|------|------|--------|-------------|
| `label` | `string` | `'Adresse e-mail'` | Libellé visible |
| `id` | `string` | `'email'` | Identifiant unique dans la page ; sert aussi à `{id}-help` et `{id}-error` |
| `name` | `string` | valeur de `id` | Nom envoyé avec le formulaire |
| `type` | `string` | `'email'` | `text`, `email`, `tel`, `url`, `password`, `search`, `number`, ou `textarea` pour une zone de texte |
| `rows` | `number` | `5` | Hauteur initiale de la zone de texte, en lignes (`textarea` seulement) ; redimensionnable verticalement |
| `help` | `string` | texte d'aide | Aide affichée sous le libellé ; vide = pas d'aide |
| `error` | `string` | `''` | Message d'erreur ; non vide = champ en erreur |
| `placeholder` | `string` | `''` | Exemple de format, jamais en remplacement du libellé |
| `autocomplete` | `string` | `'email'` | Jeton d'autocomplétion adapté à la donnée (`email`, `tel`, `given-name`...) |
| `value` | `string` | `''` | Valeur initiale |
| `required` | `boolean` | `false` | Astérisque sur le libellé et `required` natif sur le champ |
| `disabled` | `boolean` | `false` | Désactive le champ |

## Accessibilite

- `<label for>` natif : nom accessible du champ, et clic sur le libellé = focus dans le champ.
- Aide et erreur reliées par `aria-describedby` (aide puis erreur) et placées avant la saisie : lues avant de remplir, visibles quand le clavier virtuel s'ouvre.
- En erreur : `aria-invalid="true"`, message préfixé « Erreur : » (masqué visuellement, restitué), texte en gras, barre latérale et bordure doublée : l'erreur ne dépend pas de la couleur.
- Le message d'erreur dit quoi corriger (« Saisissez une adresse au format nom@exemple.fr. »), pas seulement « Champ invalide ».
- L'astérisque est masqué aux technologies d'assistance : l'obligation est annoncée par `required`. Le formulaire qui l'utilise explique l'astérisque avant les champs.
- `type` et `autocomplete` adaptés aux données personnelles (critère RGAA 11.13).
- Le formulaire parent gère l'annonce globale des erreurs et le déplacement du focus vers le premier champ en erreur après soumission.
- Contrastes par rôles (`--color-border-strong`, `--color-text-muted`, `--color-danger-text`) vérifiés par `npm run health`.

## Exemples

### Exemple de base
```twig
{% include 'dev/components/form-field/form-field.twig' with {
  label: 'Nom',
  id: 'family-name',
  type: 'text',
  help: '',
  autocomplete: 'family-name'
} %}
```

### Zone de texte
```twig
{% include 'dev/components/form-field/form-field.twig' with {
  label: 'Message',
  id: 'message',
  type: 'textarea',
  rows: 6,
  help: '',
  autocomplete: '',
  required: true
} %}
```

### Champ obligatoire en erreur
```twig
{% include 'dev/components/form-field/form-field.twig' with {
  label: 'Adresse e-mail',
  id: 'email',
  required: true,
  value: 'jean.dupont',
  error: 'Saisissez une adresse au format nom@exemple.fr.'
} %}
```
