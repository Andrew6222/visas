const text = {
  ru: [
    { nav_link_main: "Главная" },
    { nav_link_services: "Услуги" },
    { nav_sublink_school: "Языковая школа" },
    { nav_sublink_services: "услуги для бизнеса" },
    { nav_sublink_visa: "Визы" },
    { reviews: "Отзывы" },
    { contacts: "Контакты" },
    //

    { visa_header: "Любой тип виз, для вас" },
    {
      visa_text:
        "Планируете долгое пребывание в Таиланде? Нужна виза? Обратитесь к нам. Мы ценим каждую минуту вашего времени и предоставим профессиональную помощь в оформлении визы. Мы поможем вам разобраться в вашей индивидуальной ситуации и выбрать наиболее оптимальный вариант.",
    },
    {
      visa_text_2:
        " Свяжитесь с нами, чтобы получить подробную и БЕСПЛАТНУЮ консультацию.",
    },
    { visa_btn: "Связаться с нами" },
    { section_header: "Какой тип визы вас интересует?" },
    { type_item_1: "Студенческая виза" },
    { type_item_2: "Университетская виза" },
    { type_item_3: "Пенсионная виза" },
    { type_item_4: "Бизнес Виза / Разрешение на работу" },
    { type_item_5: "Туристическая виза" },
    { type_item_6: "Border run/Visa run" },

    //
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
    { visa_header: "Any type of visa, for you" },
    {
      visa_text:
        "Planning a long stay in Thailand? Need a visa? Reach out to us. We value every moment of your time and will provide professional assistance in visa processing. We will help you navigate your individual situation and choose the most suitable option.  ",
    },
    { visa_text_2: "Contact us to receive a detailed and FREE consultation." },
    { visa_btn: "Contact us " },
    { section_header: "Which type of visa are you interested in?" },
    { type_item_1: "Student visa" },
    { type_item_2: "University visa " },
    { type_item_3: "Retirement visa" },
    { type_item_4: "Business visas / Work permit" },
    { type_item_5: "Tourist visa" },
    { type_item_6: "Border run / Visa run assistance " },
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
