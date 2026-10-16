// Header : panneau de navigation mobile piloté par le bouton Menu.
// Délégation sur document : s'applique à tout header présent ou ajouté plus tard, sans initialisation.

const OPEN_CLASS = 'site-header--open'
// Même palier que respond-to('md') dans _breakpoints.scss : au-dessus, le panneau n'existe pas.
const desktop = window.matchMedia('(min-width: 48rem)')

// Active le repli mobile en CSS ; sans ce script, la navigation reste visible en liste.
document.documentElement.classList.add('openui-js')

function setOpen(header, open, { focusToggle = false } = {}) {
  const toggle = header.querySelector('[data-site-header-toggle]')
  if (!toggle) return
  header.classList.toggle(OPEN_CLASS, open)
  toggle.setAttribute('aria-expanded', String(open))
  if (!open && focusToggle) toggle.focus()
}

function openHeaders() {
  return document.querySelectorAll(`[data-site-header].${OPEN_CLASS}`)
}

document.addEventListener('click', (event) => {
  const toggle = event.target.closest('[data-site-header-toggle]')
  if (toggle) {
    setOpen(toggle.closest('[data-site-header]'), toggle.getAttribute('aria-expanded') !== 'true')
    return
  }

  // Un lien du panneau choisi, ou un clic hors du header : le panneau se referme.
  for (const header of openHeaders()) {
    if (!header.contains(event.target) || event.target.closest('[data-site-header-nav] a')) setOpen(header, false)
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return
  for (const header of openHeaders()) {
    setOpen(header, false, { focusToggle: header.contains(document.activeElement) })
  }
})

// Le focus clavier quitte le header : refermer pour que le panneau ne masque pas l'élément focalisé.
document.addEventListener('focusin', (event) => {
  for (const header of openHeaders()) {
    if (!header.contains(event.target)) setOpen(header, false)
  }
})

desktop.addEventListener('change', (event) => {
  if (!event.matches) return
  for (const header of openHeaders()) setOpen(header, false)
})
