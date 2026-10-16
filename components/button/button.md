# Button

## Usage

Déclenche une action dans la page (ouvrir, enregistrer, supprimer) ou soumet un formulaire. Pour aller vers une autre page ou une ressource, utiliser `link`.

- `primary` : action principale, une seule par zone.
- `secondary` : action alternative à côté d'une action principale.
- `ghost` : action discrète ou répétée (barres d'outils, lignes de liste).
- `danger` : action destructive ou irréversible ; prévoir une confirmation côté parcours.

## Props

| Prop | Type | Defaut | Description |
|------|------|--------|-------------|
| `variant` | `string` | `'primary'` | `primary`, `secondary`, `ghost` ou `danger` |
| `size` | `string` | `'md'` | `sm`, `md` ou `lg` |
| `type` | `string` | `'button'` | Type HTML : `button`, `submit` ou `reset` |
| `full` | `boolean` | `false` | Occupe toute la largeur disponible |
| `disabled` | `boolean` | `false` | Désactive le bouton avec l'attribut natif `disabled` |
| `text` | `string` | `'Enregistrer'` | Libellé visible, qui sert de nom accessible |

## Accessibilite

- Élément natif `<button>` : activable au clavier avec Entrée et Espace, sans script.
- `type="button"` par défaut pour ne jamais soumettre un formulaire par accident ; passer `type: 'submit'` explicitement.
- Le libellé doit décrire l'action hors contexte (« Supprimer le brouillon » plutôt que « OK »). Si plusieurs boutons identiques se répètent (lignes, cartes), le consommateur doit contextualiser le texte.
- Focus visible via `focus-ring`.
- Un bouton `disabled` sort de l'ordre de tabulation : ne pas désactiver un bouton dont la raison n'est pas expliquée à côté.
- Couleurs par rôles (`--color-primary`, `--color-on-primary`, `--color-danger`, `--color-border-strong`) : contrastes vérifiés par `npm run health`.

## Exemples

### Exemple de base
```twig
{% include 'dev/components/button/button.twig' with {
  text: 'Enregistrer'
} %}
```

### Variante danger, soumission
```twig
{% include 'dev/components/button/button.twig' with {
  variant: 'danger',
  type: 'submit',
  text: 'Supprimer le compte'
} %}
```
