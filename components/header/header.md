# Header

## Usage

En-tête de site, une seule fois par page, avant le contenu principal. Contient le lien d'évitement, la marque (lien vers l'accueil) et la navigation principale. Sous le palier `md` (48rem), la navigation se replie derrière un bouton « Menu » qui ouvre un panneau sous la barre.

La page doit exposer la cible du lien d'évitement : `<main id="contenu" tabindex="-1">`.

## Props

| Prop | Type | Defaut | Description |
|------|------|--------|-------------|
| `sticky` | `boolean` | `false` | Le header reste visible au défilement |
| `siteName` | `string` | `'Mon site'` | Nom du site, texte de la marque et nom accessible du lien d'accueil |
| `homeHref` | `string` | `'/'` | Destination de la marque |
| `logoSrc` | `string` | `''` | Image du logo, affichée devant le nom ; décorative (`alt=""`) car le nom est toujours présent |
| `links` | `array` | 5 liens | Liens de navigation : `text`, `href`, `current` (page courante) |
| `navLabel` | `string` | `'Navigation principale'` | Nom accessible de la `nav` |
| `navId` | `string` | `'site-nav'` | `id` du panneau, relié au bouton par `aria-controls` ; unique dans la page |
| `skipTarget` | `string` | `'#contenu'` | Cible du lien d'évitement |

## Accessibilite

- Lien d'évitement « Aller au contenu » en premier élément focalisable, visible seulement au focus clavier.
- `nav` nommée par `aria-label` ; une seule navigation principale par page, les autres `nav` doivent avoir un nom différent.
- Page courante : `aria-current="page"`, signalée visuellement par la graisse et un soulignement épais, pas seulement la couleur.
- Bouton « Menu » natif avec texte visible, `aria-expanded` et `aria-controls`. Entrée et Espace ouvrent ou ferment le panneau.
- Échap referme le panneau et rend le focus au bouton ; choisir un lien, cliquer hors du header ou tabuler hors du header le referme aussi, pour que le panneau ne masque jamais l'élément focalisé.
- Le panneau n'est pas modal : pas de piège de focus, l'ordre de tabulation suit le DOM.
- Sans JavaScript, le bouton n'apparaît pas et la navigation reste visible en liste.
- Liens du panneau d'au moins 44 px de haut sur mobile.

## Responsive

- Moins de 48rem : marque et bouton « Menu » sur une ligne, panneau en pleine largeur sous la barre.
- 48rem et plus : navigation en ligne à droite de la marque, sans bouton. Passer au-dessus du palier referme le panneau.
- Au-delà de 5 ou 6 liens en desktop, la ligne passe à la ligne : réduire le nombre de liens plutôt que d'ajouter un niveau.

## Comportement (script)

`header.js`, importé par `dev/assets/js/main.js`. Délégation d'événements sur `document` : aucun appel d'initialisation, il s'applique aussi au HTML ajouté après le chargement. Le palier `48rem` est repris de `respond-to('md')` : les changer ensemble.

## Exemples

### Exemple de base
```twig
{% include 'dev/components/header/header.twig' with {
  siteName: 'Atelier Durand',
  links: [
    { text: 'Accueil', href: '/', current: true },
    { text: 'Services', href: '/services' },
    { text: 'Contact', href: '/contact' }
  ]
} %}
```

### Avec logo et header collant
```twig
{% include 'dev/components/header/header.twig' with {
  siteName: 'Atelier Durand',
  logoSrc: '/dev/assets/images/logo.svg',
  sticky: true,
  links: links
} %}
```
