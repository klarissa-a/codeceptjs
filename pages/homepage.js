const { locator } = require("codeceptjs");

const { I } = inject();

module.exports = {
 clickAboutService: async () => {
   I.click('О сервисе');
 },

 login: () => {
    I.amOnPage('/');
    I.click(locate('span').withText('Войти'));
    I.fillField('Электронная почта', 'lkudryakovf@mail.ru');
    I.fillField('Пароль', '');
    I.click('Войти');
  },
  clickTarifs: () => {
    I.click('Тарифы');
  },
  clickUserMenuButton: () => {
    I.click(locate('[data-qa=user-menu-button]'));
  },
  clickUserAvatar: () => {
    I.click(locate('a[href^="/user/"]'));
  },
  clickPudarkusLogo: () => {
    I.click(locate('[data-qa=pudarkus-logo]'));
  },

  clickSearch: () => {
    I.click(locate('[placeholder=Поиск]'));
  }
}
