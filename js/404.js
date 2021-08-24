document.addEventListener('DOMContentLoaded', () => {
  // Открытие-заккрытие бургер-меню

  (function () {
    const burgerItem = document.querySelector('.header__burger');
    const navigation = document.querySelector('.header__nav');
    const closeMenu = document.querySelector('.header__close');
    burgerItem.addEventListener('click', () => {
      navigation.classList.add('header__nav-active');
      burgerItem.classList.add('header__burger-none');
      closeMenu.classList.add('header__close-active');
    });
    closeMenu.addEventListener('click', () => {
      navigation.classList.remove('header__nav-active');
      burgerItem.classList.remove('header__burger-none');
      closeMenu.classList.remove('header__close-active');
    })
  }());

});