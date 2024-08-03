Feature('homepage');

Scenario('Страница о сервисе открывается',  ({ I, homePage }) => {
    I.say('Given пользователь авторизован');
    homePage.login();
    I.say('When кликнуть в О сервисе');
    homePage.clickAboutService();
    I.say('Then странца о сервисе открывается');
    I.see('Сервис вишлистов «Подаркус»')
});

Scenario('Страница тарифы открывается',  ({ I, homePage }) => {
    I.say('Given пользователь авторизован');
    homePage.login();
    I.say('When кликнуть тарифы');
    homePage.clickTarifs();
    I.say('Then страница тарифы открывается');
    I.see('Тарифы и цены')
});

Scenario('Меню пользователя',  ({ I, homePage }) => {
    I.say('Given пользователь авторизован');
    homePage.login();
    I.say('When кликнуть меню пользователя');
    homePage.clickUserMenuButton();
    I.say('Then отображаются пункты: Мои подарки, Вишлисты, Подарки друзьям, Открытки,  Моя свадьба, Календарь событий, Настройки, Выйти');
    I.see('Мои подарки')
    I.see('Вишлисты')
    I.see('Подарки друзьям')
    I.see('Открытки')
    I.see('Моя свадьба')
    I.see('Календарь событий')
    I.see('Настройки')
    I.see('Выйти')

});

Scenario('Клик на аватар пользователя',  ({ I, homePage }) => {
    I.say('Given пользователь авторизован');
    homePage.login();
    I.say('When кликнуть на аватар пользователя');
    homePage.clickUserAvatar();
    I.say('Then отображается Добавить подарок');
    I.see('Мои подарки')
});

Scenario('Клик в поиск на главной страницу',  ({ I, homePage }) => {
    I.say('Given пользователь авторизован');
    homePage.login();
    I.say('When кликнуть в поиск');
    homePage.clickSearch();
    I.say('Then отображается синяя стрелка');
    I.seeElement(locate('img[alt=arrow]'))
});
