//тебе нужно менять только эти массивы
//ключ объекта равен id элемента в html (должны быть одинаковые)
const text = {
  ru: [
    {nav_link_main: 'Главная'},
    {nav_link_services: 'Услуги'},
  ],
  en: [
    {nav_link_main: 'Main'},
    {nav_link_services: 'Services'},
  ]
}

async function changeLanguage(lang) {
  await localStorage.setItem('lang', lang)
  changeLanguageText()
}

function changeLanguageText() {
  const langText = text[localStorage.getItem('lang')];

  for (let i = 0; i < langText.length; i++) {
    const key = Object.keys(langText[i])[0];
    const value = langText[i][key];

    document.getElementById(key).textContent = value;
  }
}

window.addEventListener('load', () => {
  changeLanguageText()
})
