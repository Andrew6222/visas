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
    { th_header: "Учим тайский язык с Джен и Джу" },
    { th_1: "Курс тайского аудирования и разговорной речи" },
    { th_2: "Быстро освоить коммуникативные навыки" },
    { th_3: "Проработанный дизайн курса" },
    {
      th_4: "Преподаватель-носитель тайского языка, владеющий английским и китайским языками",
    },
    { ch_header: "Учим китайский с Рейчел, Уин и Ритой" },
    {
      ch_1: "Носители китайского языка с более чем 10-летним опытом преподавания приносят свои знания и страсть к образованию в области языка",
    },
    {
      ch_2: "Преподаватели с степенью магистра по преподаванию китайского языка как иностранного языка",
    },
    {
      ch_3: "Наши интерактивные мультимедийные курсы китайского языка подходят для учеников любого возраста и целей",
    },
    { services_header: "Услуги языковой школы" },
    {
      services_1:
        "Занятия по Английскому, Китайскому и Тайскому языкам Базовый / Средний уровень",
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
    { th_header: "Learning Thai language with Jen and Ju" },
    { th_1: "Thai listening and speaking course" },
    { th_2: "Quickly gain communication skills " },
    { th_3: "Well - developed course design " },
    { th_4: "Native Thai teacher proficient in English and Chinese" },
    { ch_header: "Learning Chinese with Rachel, Yun and Rita" },
    {
      ch_1: "Native Chinese speakers with over 10 years of teaching experience, they bring expertise and passion to language education",
    },
    {
      ch_2: `Instructors with Master's degrees in Teaching Chinese as a Foreign Language`,
    },
    {
      ch_3: "Our interactive multimedia Chinese courses cater to learners of all ages and purposes",
    },
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
