# Card

## Usage

Carte de contenu (réalisation, article, service) : image, badge facultatif, titre, méta et texte. Avec un lien, toute la carte est cliquable. À poser dans une grille (`grid__item`) : la carte prend la largeur de son conteneur.

Variantes : disposition `vertical` (défaut) ou `horizontal` (image à gauche à partir de 48rem), apparence `outlined`, `elevated` ou `filled`, ratio d'image `16:9`, `4:3` ou `1:1`.

## Props

| Prop | Type | Defaut | Description |
|------|------|--------|-------------|
| `layout` | `string` | `'vertical'` | `vertical` ou `horizontal` |
| `appearance` | `string` | `'outlined'` | `outlined`, `elevated` ou `filled` |
| `imageRatio` | `string` | `'16:9'` | Cadre de l'image en disposition verticale : `16:9`, `4:3` ou `1:1` |
| `headingLevel` | `string` | `'h3'` | Niveau du titre selon la hiérarchie de la page : `h2`, `h3` ou `h4` |
| `image` | `image` | `{ src: '', alt: '' }` | Image ; sans `src`, la carte n'a pas d'image |
| `badge` | `string` | `''` | Badge au-dessus du titre (atome `badge`) |
| `title` | `string` | `'Titre de la carte'` | Titre |
| `meta` | `string` | `''` | Date, auteur, catégorie… |
| `text` | `string` | `''` | Résumé |
| `href` | `string` | `''` | Destination ; rend toute la carte cliquable |

## Accessibilite

- Carte cliquable : un seul lien, sur le titre, étiré sur toute la carte. Le lecteur d'écran annonce le titre comme intitulé du lien, sans lien en double ni carte entière lue comme un lien.
- Focus clavier visible sur toute la carte.
- Image décorative par défaut (`alt=""`) quand le titre suffit ; texte alternatif seulement si l'image apporte une information que le texte ne donne pas.
- `headingLevel` à choisir selon la page : la carte ne doit pas créer de saut de niveau de titre.

## Responsive

- L'image remplit son cadre sans se déformer (`object-fit: cover`) : une image d'un autre format est recadrée, jamais étirée.
- Horizontale : empilée sur mobile ; à partir de 48rem, l'image suit la hauteur du texte, quel que soit son format.
- Titre et texte longs passent à la ligne, un mot interminable se coupe.

## Exemples

### Exemple de base
```twig
{% include 'dev/components/card/card.twig' with {
  image: { src: '/images/atelier.jpg', alt: '' },
  title: 'Rénovation d’un atelier',
  text: 'Un ancien atelier transformé en espace de travail.',
  href: '/realisations/atelier'
} only %}
```

### Horizontale, image d'exemple
```twig
{% include 'dev/components/card/card.twig' with {
  layout: 'horizontal',
  appearance: 'elevated',
  image: { src: fake_image(1600, 900), alt: '' },
  badge: 'Nouveau',
  title: 'Rénovation d’un atelier'
} only %}
```
