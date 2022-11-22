;(() => {
  const supportedLangs = window.supportedLangs
  const cacheKey = 'preferred_lang'
  const defaultLang = 'en-US'
  // docs supported languages
  const langAlias = {
    en: 'en-US',
    fr: 'fr-FR',
    es: 'es-ES',
  }
  let userPreferredLang = localStorage.getItem(cacheKey) || navigator.language

  const language =
    langAlias[userPreferredLang] ||
    (supportedLangs.includes(userPreferredLang)
      ? userPreferredLang
      : defaultLang)
  localStorage.setItem(cacheKey, language)
  userPreferredLang = language

  if (!location.pathname.startsWith(`/sh-element-plus/${userPreferredLang}`)) {
    const toPath = [`/sh-element-plus/${userPreferredLang}`]
      .concat(location.pathname.split('/').slice(2))
      .join('/')

    // console.log('toPath===', toPath) // 【/en-US/en-US/】

    location.pathname =
      toPath.endsWith('.html') || toPath.endsWith('/')
        ? toPath
        : toPath.concat('/')
  }
})()
