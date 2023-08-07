//тебе нужно менять только эти массивы
//ключ объекта равен id элемента в html (должны быть одинаковые)
const text = {
  ru: [
    { nav_link_main: "Главная" },
    { nav_link_services: "Услуги" },
    { nav_sublink_school: "Языковая школа" },
    { nav_sublink_services: "услуги для бизнеса" },
    { nav_sublink_visa: "Визы" },
    { reviews: "Отзывы" },
    { contacts: "Контакты" },
    {
      hero_header_1:
        "Оказание профессиональных услуг в Таиланде для туристов и экспатов!",
    },
    {
      hero_text_1:
        "«Oriental Bamboo» - ваш партнер в Таиланде! Мы предоставляем профессиональные услуги для туристов и экспатов. Языковая школа с курсами по английскому, французскому, китайскому и тайскому. Оформление виp, бизнес-поддержка и туристические услуги. Надежность и довольные клиенты за 10 лет работы. Добро пожаловать в Таиланд!",
    },
    {
      hero_header_2:
        "Студенческая виза (ED-Visa) в Таиланд с Oriental Bamboo - это просто и безопасно!",
    },
    {
      hero_text_2:
        "Освойте языки с профессионалами - Oriental Bamboo! Наши преподаватели - носители языка, которые сделают учебный процесс увлекательным и результативным. А получение студенческой визы с нами - это просто и безопасно. Присоединяйтесь к нам и окунитесь в мир культурного обмена в Таиланде!",
    },
    // {:''},
  ],
  en: [
    { nav_link_main: "Home" },
    { nav_link_services: "Services" },
    { nav_sublink_school: "Language school" },
    { nav_sublink_services: "business services" },
    { nav_sublink_visa: "Visa" },
    { reviews: "Reviews" },
    { contacts: "Contacts" },
    {
      hero_header_1:
        "Provision of professional services in Thailand for tourists and expats!",
    },
    {
      hero_text_1:
        "Oriental Bamboo  - your partner in Thailand! We provide professional services for tourists and expats. A language school with courses in English, French, Chinese, and Thai. Visa processing, business support, and tourist services. Reliability and satisfied clients for 10 years of operation. Welcome to Thailand!",
    },
    {
      hero_header_2:
        "The Student Visa (ED-Visa) to Thailand with Oriental Bamboo is simple and safe!",
    },
    {
      hero_text_2:
        "Master languages with professionals - Oriental Bamboo! Our teachers are native speakers who make the learning process engaging and effective. Obtaining a student visa with us is simple and safe. Join us and immerse yourself in the world of cultural exchange in Thailand!",
    },
  ],
};

async function changeLanguage(lang) {
  await localStorage.setItem("lang", lang);
  changeLanguageText();
}

function changeLanguageText() {
  const langText = text[localStorage.getItem("lang")];

  for (let i = 0; i < langText.length; i++) {
    const key = Object.keys(langText[i])[0];
    const value = langText[i][key];

    document.getElementById(key).textContent = value;
  }
}

window.addEventListener("load", () => {
  changeLanguageText();
});
