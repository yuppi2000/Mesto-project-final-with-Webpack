//Объявление переменных

export const profile = document.getElementById('profile');
export const formEdit = document.querySelector('.profile__edit-btn'); //Находим кнопку карандаш для открытия попапа редактирования профиля
export const name = document.querySelector('.profile__name'); //Находим поле ввода для редактирования имени
export const job = document.querySelector('.profile__job'); //Находим поле ввода для редактрования профессии
export const nameInput = document.querySelector('.popup__info_name');
export const jobInput = document.querySelector('.popup__info_job');
export const galleryContainer = document.querySelector('.gallery__container'); //Находим пустой контейнер для карточек с городами
export const galleryTemplate = document.querySelector('#gallery__template').content; //Находим template карточки
export const addFormElement = document.querySelector('.popup-add-card'); //Находим элемент попапа для добавления новой карточки
export const addButton = document.querySelector('.profile__add-btn'); //Находим кнопку, открывающую элемент попапа для добавления новой карточки
export const pictureBig = document.querySelector('.popup_picture_big'); //Находим элемент зума
export const pictureImage = document.querySelector('.popup__big-image'); //Находим увеличенное фото места
export const pictureTitle = document.querySelector('.popup__image-title'); //Находим подпись названия места
export const pictureBigClose = document.querySelector('.popup__image-close'); //Находим кнопку крестик, закрывающую элемент зума
export const inputList = Array.from(document.querySelectorAll('input')); //Находим массив всех полей ввода

export const formProfileInfo = {
  profileAuthor: name,
  profileStatus: job,
};


export const items = [ //Массив с данными для карточек городов
  {
      name: 'Тель-Авив',
      link: 'https://avatars.mds.yandex.net/get-pdb/1608049/28890b74-7e98-4851-8a55-c85bce39daaf/s1200?webp=false'
  },
  {
      name: 'Прага',
      link: 'https://cs.pikabu.ru/post_img/big/2013/02/01/1/1359668928_1641023467.jpg'
  },
  {
      name: 'Париж',
      link: 'https://avatars.mds.yandex.net/get-pdb/989257/b3754e0a-7f09-4b8d-bd7d-857017190632/s1200?webp=false'
  },
  {
      name: 'Рим',
      link: 'https://i.artfile.ru/3400x2219_223030_[www.ArtFile.ru].jpg'
  },
  {
      name: 'Барселона',
      link: 'https://avatars.mds.yandex.net/get-zen_doc/15270/pub_5c8a82dcd1aa0c00b27f0c5d_5c8a832744a47600b4fac073/scale_1200'
  },
  {
      name: 'Лондон',
      link: 'https://avatars.mds.yandex.net/get-zen_doc/1593402/pub_5c9394eba060d700b3d2448c_5c93958362c99e00b3e1c0f8/scale_1200'
  }
];

export const validationConfig = { //Объект для валидации данных
  form: '.popup__form',
  inputSelector: '.popup__info',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_error',
  inputErrorClass: 'popup__error',
  errorClass: 'popup__error-message_active'
};
