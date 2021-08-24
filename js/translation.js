
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

  //Открытие/закрытие спойлеров в блоке facts

  (function () {
  
  const factsBlock = document.querySelector('.facts');
  
  factsBlock.addEventListener('click', (e) => {
    if (e.target.classList.contains('facts__main-button')) {
      console.log(e.target);
      e.target.classList.toggle('active');
      e.target.parentElement.nextElementSibling.classList.toggle('show');
      if (e.target.classList.contains('active')) {
        e.target.innerHTML = '-';
      } else {
        e.target.innerHTML = '+';
      }
    }
  });
  }());

  //Карусель камер в cams

  const leftPetsSwitcher = document.querySelector('.cams__arrow-left');
  const rightPetsSwitcher = document.querySelector('.cams__arrow-right');

  function slideToLeft (selector) {
    let items = document.querySelectorAll(selector);
    let itemClone = items[0].cloneNode(true)
    items[items.length - 1].after(itemClone);
    items[0].remove();
    items = document.querySelectorAll(selector);
    console.log(items);
  }

  function slideToRight (selector) {
    let items = document.querySelectorAll(selector);
    let itemClone = items[items.length - 1].cloneNode(true)
    items[0].before(itemClone);
    items[items.length - 1].remove();
    items = document.querySelectorAll(selector);
    console.log(items);
  }

  leftPetsSwitcher.addEventListener('click', () => {
    slideToLeft('.cams__card');
  });

  rightPetsSwitcher.addEventListener('click', () => {
    slideToRight('.cams__card');
  })

  //Показ камер на viewport от 640px до 320px (не включая)

  let camsButton = document.querySelector('.cams__title-button'),
      cams = document.querySelectorAll('.cams__card');

  camsButton.addEventListener('click', (e) => {
      let userScreen = window.innerWidth;
      if (userScreen <= 640 && userScreen > 320) {
        window.onresize = function () {
          window.location.onreload();
        };
        cams.forEach(item => {
          if (item.classList.contains('cams__card-hide')) {
            item.classList.remove('cams__card-hide');
            item.classList.add('cams__card-show');
            e.target.innerHTML = '&#9660;';
          } else if (item.classList.contains('cams__card-show')) {
            item.classList.remove('cams__card-show');
            item.classList.add('cams__card-hide');
            e.target.innerHTML = '&#9658;';
          }
        });
      }
    });

  const sidebar = document.querySelector('.sidebar');

  //Скрываем sidebar при достижении footer
  (function() {
    
    let sidebarBottom = sidebar.getBoundingClientRect().bottom;

    window.onresize = function () {
      window.location.onreload();
    };

    window.onscroll = function() {
      var footerTop = document.querySelector('.footer').getBoundingClientRect().top + pageYOffset;
      let sidebarToDoc = sidebarBottom + pageYOffset;
      if (sidebarToDoc >= footerTop) {
        sidebar.style.visibility = 'hidden';
      } else {
        sidebar.style.visibility = 'visible';
      }
    }
  }());

  const leftUpRelay = document.querySelector('.up');
  const rightDownRelay = document.querySelector('.down');
  const sidebarElems = document.querySelectorAll('.sidebar__pet');
  var currentElem = 0;

  function findCurrentElem() {
    var arrElems = Array.from(sidebarElems);
    console.log(arrElems);
    currentElem = arrElems.findIndex( i => i.classList.contains('sidebar__pet-active'));
    console.log(currentElem);
  }


  function changeCurrentItem(n) {
    currentElem = (n + sidebarElems.length) % (sidebarElems.length);
  }

  function prevItem (n) {
    changeCurrentItem(n - 1);
  }

  function nextItem(n) {
    changeCurrentItem(n + 1);
  }

  function goToPage() {

  }

  rightDownRelay.addEventListener('click', () => {
    findCurrentElem();
    sidebarElems[currentElem].classList.remove('sidebar__pet-active');
    nextItem(currentElem);
    sidebarElems[currentElem].classList.add('sidebar__pet-active');
    console.log(currentElem);
    window.location.href = sidebarElems[currentElem].lastElementChild.href;
  });

  leftUpRelay.addEventListener('click', () => {
    findCurrentElem();
    sidebarElems[currentElem].classList.remove('sidebar__pet-active');
    prevItem(currentElem);
    sidebarElems[currentElem].classList.add('sidebar__pet-active');
    console.log(currentElem);
    console.log(sidebarElems[currentElem].lastElementChild);
    window.location.href = sidebarElems[currentElem].lastElementChild.href;
  });

})
