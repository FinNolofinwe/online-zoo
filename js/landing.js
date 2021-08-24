document.addEventListener('DOMContentLoaded', () => {

  const modalFrame = document.querySelector('.modal');
  const formOpen = document.querySelector('.testim__button');
  const feedback = document.querySelector('.feedback');
  const closeButton = document.querySelector('.feedback__close');
  const submitButton = document.getElementById('submit');
  const body = document.querySelector('body');

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

// Скролл в сайдбаре
const scroller = document.querySelector('.sidebar__up');

scroller.addEventListener('click', () => {
  window.scrollTo(0,0);
});

// Показываем подложку модальных окон
function showCover(space, overlay) {
  overlay.classList.add(space);
};

// Скрываем подложку модальных окон
function hideCover(space, overlay) {
  overlay.classList.remove(space);
};

//Обработчики событий открытия-закрытия формы

formOpen.addEventListener('click', (e) => {
  e.preventDefault();
  showCover('modal-active', modalFrame);
  feedback.classList.add('feedback-active');
  body.style.cssText = "overflow: hidden; overflow-y: hidden;";
});

modalFrame.addEventListener('click', (e) => {
    if (e.target === modalFrame) {
      hideCover('modal-active', modalFrame);
      feedback.classList.remove('feedback-active');
      body.style.cssText = "overflow: initial; overflow-y: initial;";
    }
});

body.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    hideCover('modal-active', modalFrame);
    feedback.classList.remove('feedback-active');
    body.style.cssText = "overflow: initial; overflow-y: initial;";
  }
});
      
closeButton.addEventListener('click', () => {
  hideCover('modal-active', modalFrame);
  feedback.classList.remove('feedback-active');
  body.style.cssText = "overflow: initial; overflow-y: initial;";
});

// Проверка  заполнения формы перед отправкой
(function () {

let checkedName = false,
    checkedEmail = false,
    checkedReview = false;


feedback.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
        e.preventDefault();
        e.target.blur();
      }
    }
);

feedback.name.onblur = function(e) {
  if (feedback.name.value === '') {
    e.preventDefault();
    feedback.name.placeholder = 'Please, introduse yourself';
    feedback.name.focus();
    checkedName = false;
  } else {
    feedback.name.blur();
    checkedName = true;
  }
}

feedback.email.onblur = function(e) {
  if ((feedback.email.value === "") || (!feedback.email.value.includes('@'))) {
    feedback.email.placeholder = 'Please, enter your e-mail';
    e.preventDefault();
    feedback.email.focus();
    checkedEmail = false;
  } else {
    feedback.email.blur();
    checkedEmail = true;
  }
}

feedback.review.onblur = function(e) {
  if (feedback.review.value === "") {
    e.preventDefault();
    feedback.review.focus();
    checkedReview = false;
  } else {
    feedback.review.blur();
    checkedReview = true;
    if (checkedName & checkedEmail & checkedReview) {
        submitButton.focus();
        submitButton.style.background = "#080029";
    }
  }
}

}());

// Вызов формы по клику на значок аккаунта

(function () {
  const accountSpace = document.querySelector('.account');
  const accountIcon = document.querySelector('.header__account');
  const accountForm = document.querySelector('.profile');
  console.log(accountSpace);
  console.log(accountSpace.parentNode);

  accountIcon.addEventListener('click', () => {
    showCover('account-active', accountSpace);
    accountForm.classList.add('profile-active');
    body.style.cssText = "overflow: hidden; overflow-y: hidden;";
  });
  
  accountSpace.addEventListener('click', (e) => {
    if (e.target === accountSpace) {
      hideCover('account-active', accountSpace);
      accountForm.classList.remove('account-active')
      body.style.cssText = "overflow: initial; overflow-y: initial;";
    }
  });
}());

//Функция выбора карточки животного в Map

const mapArea = document.querySelector('.zoogeo');
const animalIcon = document.querySelectorAll('.zoogeo__animal');

function chooseAnimal (item) {
  let cardImg = document.querySelector('.card__image'),
  cardTitle = document.querySelector('.card__title'),
  cardInfo = document.querySelector('.card__text'),
  cardLink = document.querySelector('.card__link');
  if (item.classList.contains('panda')) {
    cardImg.src = "assets/img/panda_cam1.jpg";
    cardTitle.textContent = "Panda";
    cardInfo.textContent = "The yards at the Shenshuping Panda Center in China's Wolong Valley are filled with bamboo";
    cardLink.href = "html/panda_translation.html";
  } else if (item.classList.contains('alligator')) {
    cardImg.src = "assets/img/alligator_cam2.jpg";
    cardTitle.textContent = "Alligator";
    cardInfo.textContent = "Keep an eye out for alligators basking in the sun and tune in for feeding demonstrations.";
    cardLink.href = "html/alligator_translation.html";
  } else if (item.classList.contains('gorilla')) {
    cardImg.src = "assets/img/gorilla_cam2.jpg";
    cardTitle.textContent = "Gorilla";
    cardInfo.textContent = "The Gorilla Rehabilitation and Conservation Education Center is in the Republic of Congo.";
    cardLink.href = "html/gorilla_translation.html";
  } else {
    cardImg.src = "assets/img/ph_eagle.jpg";
    cardTitle.textContent = "Eagle";
    cardInfo.textContent = "The broadcast is from an island near Los Angeles. Watch their real life and feed them.";
    cardLink.href = "html/eagle_translation.html";
  }
}

// функция переключения карточек в Мар кнопками-стрелками
const leftZooButton = document.querySelector('.zoogeo__arrow-left');
const rightZooButton = document.querySelector('.zoogeo__arrow-right');

const zoogeoElems = document.querySelectorAll('.zoogeo__item');
var currentElem = 0;

function findCurrentElem() {
  var arrElems = Array.from(zoogeoElems);
  console.log(arrElems);
  currentElem = arrElems.findIndex( i => i.classList.contains('zoogeo__item-active'));
  console.log(currentElem);
}


function changeCurrentItem(n) {
  currentElem = (n + zoogeoElems.length) % (zoogeoElems.length);
}

function prevItem (n) {
  changeCurrentItem(n - 1);
}

function nextItem(n) {
  changeCurrentItem(n + 1);
}

rightZooButton.addEventListener('click', () => {
  findCurrentElem();
  zoogeoElems[currentElem].classList.remove('zoogeo__item-active');
  zoogeoElems[currentElem].firstElementChild.classList.remove('zoogeo__animal-active');
  nextItem(currentElem);
  console.log(currentElem);
  zoogeoElems[currentElem].classList.add('zoogeo__item-active');
  zoogeoElems[currentElem].firstElementChild.classList.add('zoogeo__animal-active');
  chooseAnimal(zoogeoElems[currentElem].firstElementChild);
});

leftZooButton.addEventListener('click', () => {
  findCurrentElem();
  zoogeoElems[currentElem].classList.remove('zoogeo__item-active');
  zoogeoElems[currentElem].firstElementChild.classList.remove('zoogeo__animal-active');
  prevItem(currentElem);
  zoogeoElems[currentElem].classList.add('zoogeo__item-active');
  zoogeoElems[currentElem].firstElementChild.classList.add('zoogeo__animal-active');
  console.log(currentElem);
  chooseAnimal(zoogeoElems[currentElem].firstElementChild);
});

// Событие переключения карточек в Map

mapArea.addEventListener('click', (e) => {
  if (e.target !== leftZooButton && e.target !== rightZooButton) {
    animalIcon.forEach( function(item) {
      if (e.target === item) {
        item.classList.add('zoogeo__animal-active');
        item.parentElement.classList.add('zoogeo__item-active');
        chooseAnimal(item);
      } else {
        item.classList.remove('zoogeo__animal-active');
        item.parentElement.classList.remove('zoogeo__item-active');
      }
    });
  }
});


// Функция включения/выключения доп информации о животных в карточках Pets

const switcherArea = document.querySelector('.pets__cards');

const cardSwitcher = (e) => {
    let switcher = document.querySelectorAll('.pets__more-btn');
      

      switcher.forEach(i => {
        i.classList.remove('btn__active');
        i.parentElement.classList.remove('pets__more-active');
        i.innerHTML = '+';
        i.nextElementSibling.style.display = 'block';
      });

      if (e.target.classList.contains('pets__more-btn')) {
        e.target.classList.add('btn__active');
        e.target.parentElement.classList.add('pets__more-active');
        e.target.nextElementSibling.style.display = 'none';

        if (e.target.classList.contains('pets-lilpanda')) {
          e.target.innerHTML = '<a href="#" class="pets__card-link">China, East Asia</a>';
        } else if (e.target.classList.contains('pets-penguin')) {
          e.target.innerHTML = '<a href="#" class="pets__card-link">In the sea of the Southern Hemisphere</a>';
        } else if (e.target.classList.contains('pets-squirrel')) {
          e.target.innerHTML = '<a href="#" class="pets__card-link">Russia, forests in the Orenburg region</a>';
        } else if (e.target.classList.contains('pets-panda')) {
          e.target.innerHTML = '<a href="html/panda_translation.html" class="pets__card-link">Western central China</a>';
        } else if (e.target.classList.contains('pets-eagle')) {
          e.target.innerHTML = '<a href="html/eagle_translation.html" class="pets__card-link">North America, islands near Los Angeles</a>';
        } else if (e.target.classList.contains('pets-gorilla')) {
          e.target.innerHTML = '<a href="html/gorilla_translation.html" class="pets__card-link">Equatorial forests of western Africa</a>';
        } else if (e.target.classList.contains('pets-tiger')) {
          e.target.innerHTML = '<a href="#" class="pets__card-link">Russia, Amur region</a>';
        } else if (e.target.classList.contains('pets-alligator')) {
          e.target.innerHTML = '<a href="html/alligator_translation.html" class="pets__card-link">American state of Florida</a>';
        }
      } 
    }

switcherArea.addEventListener('click', cardSwitcher);


//Функции перемотки слайдера

const leftPetsSwitcher = document.querySelector('.pets__arrow-left');
const rightPetsSwitcher = document.querySelector('.pets__arrow-right');

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
  slideToLeft('.pets__pair');
});

rightPetsSwitcher.addEventListener('click', () => {
  slideToRight('.pets__pair');
})

// Карусель комментариев в блоке Testimonials

const leftTestimSwitcher = document.querySelector('.testim__arrow-left');
const rightTestimSwitcher = document.querySelector('.testim__arrow-right');


leftTestimSwitcher.addEventListener('click', () => {
  slideToLeft('.testim__card');
});

rightTestimSwitcher.addEventListener('click', () => {
  slideToRight('.testim__card');
});

  //Скрываем sidebar при достижении footer
  const sidebar = document.querySelector('.sidebar');

  (function() {
    
    let sidebarBottom = sidebar.getBoundingClientRect().bottom;

    window.onresize = function () {
      window.location.onreload();
    };
    
    let userScreen = window.innerWidth;
      if (userScreen <= 1920 && userScreen > 640) {
        window.onscroll = function() {
          let sidebarToDoc = sidebarBottom + pageYOffset;
          console.log(sidebarBottom);
          console.log(pageYOffset);
          console.log(sidebarToDoc);
          var footerTop = document.querySelector('.footer').getBoundingClientRect().top + pageYOffset;
          console.log(footerTop);
          if (sidebarToDoc >= footerTop) {
            sidebar.style.visibility = 'hidden';
          } else {
            sidebar.style.visibility = 'visible';
          }
        }
      }
  }());

});
