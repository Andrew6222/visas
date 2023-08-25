const text = {
  ru: [
    { nav_link_main: "Главная" },
    { nav_link_services: "Услуги" },
    { nav_sublink_school: "Языковая школа" },
    { nav_sublink_services: "услуги для бизнеса" },
    { nav_sublink_visa: "Визы" },
    { reviews: "Отзывы" },
    { contacts: "Контакты" },
    { hero_header_1: "Добро пожаловать в Международную Языковую Школу!" },
    {
      hero_text_1:
        "Здесь, на пересечении культур и возможностей, мы предлагаем вам незабываемое путешествие в мир языков, открывая двери к новым знаниям, увлекательным приключениям и впечатлениям. Вместе с нашей языковой школой вы сможете не только овладеть английским, китайским и тайским языками с носителями языка, но и расширить свои горизонты через получение студенческой визы в Таиланде.",
    },
    { connet_1: "Приступить" },
    { services_header: "Услуги языковой школы" },
    {
      services_1:
        "                  Занятия по Английскому, Китайскому и Тайскому языкам Базовый / Средний уровень",
    },
    { services_2: "Персональные занятия с носителями языка" },
    { services_3: "Предоставление студенческой визы" },
    { services_4: "Перевод документов" },
    { services_5: "Документы для открытия банковского счета в тайском банке" },
    { services_6: "Предоставляем сертификат об окончании курса ин. Языка" },
    { footer_main: "Главная" },
    { footer_services: "Услуги" },
    { footer_services_1: "Услуги для бизнеса" },
    { footer_school: "Языковая школа" },
    { footer_visa: "Визы" },
    { footer_review: "Отзывы" },
  ],
  en: [
    { nav_link_main: "Home" },
    { nav_link_services: "Services" },
    { nav_sublink_school: "Language school" },
    { nav_sublink_services: "Business services" },
    { nav_sublink_visa: "Visa" },
    { reviews: "Reviews" },
    { contacts: "Contacts" },
    { hero_header_1: "Welcome to the International Language School!" },
    {
      hero_text_1: `Here, at the crossroads of cultures and opportunities, we offer you an unforgettable journey into the world of languages, opening doors to new knowledge, exciting adventures, and impressions. With our language school, you'll not only be able to master English, Chinese, and Thai languages with native speakers, but also broaden your horizons through obtaining a student visa in Thailand.`,
    },
    { connet_1: "Get started" },
    { services_header: "Language school services" },
    {
      services_1:
        "Lessons in English, Chinese, and Thai Languages - Basic / Intermediate Levels",
    },
    { services_2: "Personal sessions with native speakers" },
    { services_3: "Student visa assistance" },
    { services_4: "Document translation" },
    { services_5: "Documents for opening a bank account in a Thai bank" },
    { services_6: "Certificate upon completion of language course" },
    { footer_main: "Home" },
    { footer_services: "Services" },
    { footer_services_1: "Business services" },
    { footer_school: "Language school" },
    { footer_visa: "Visa" },
    { footer_review: "Reviews" },
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
