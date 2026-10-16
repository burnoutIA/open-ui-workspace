// Récapitulatif d'erreurs : focus au chargement, et liens qui amènent au champ en montrant son libellé.
// Délégation sur document : aucune initialisation, s'applique aussi au HTML ajouté plus tard.

// Page renvoyée avec des erreurs : le récapitulatif reçoit le focus, le lecteur d'écran annonce son titre.
document.querySelector('[data-error-summary]')?.focus()

document.addEventListener('click', (event) => {
  const link = event.target.closest('[data-error-summary] a[href^="#"]')
  if (!link) return

  const field = document.getElementById(decodeURIComponent(link.hash.slice(1)))
  if (!field) return

  // Une ancre seule ferait défiler jusqu'au champ et masquerait son libellé et son message d'erreur.
  event.preventDefault()
  const label = document.querySelector(`label[for="${CSS.escape(field.id)}"]`)
  ;(label ?? field).scrollIntoView({ block: 'start' })
  field.focus({ preventScroll: true })
})
