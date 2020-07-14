
import './pages/index.css'; // добавляем импорт главного файла стилей

import { Card } from './components/Card.js';
import { FormValidator } from './components/FormValidator.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { Section } from './components/Section.js';
import { UserInfo } from './components/UserInfo.js';
import { items, validationConfig, profile, formEdit, name, job, nameInput, jobInput, galleryContainer, galleryTemplate, addFormElement, addButton, pictureBig, pictureImage, pictureTitle, pictureBigClose, inputList, formProfileInfo } from './utils/constants.js';


//Методы открытия и сабмита информации в профиле

  const userInfo = new UserInfo (formProfileInfo);
  const profileInfo = new PopupWithForm (profile, {
      submitForm: (item) => {
          userInfo.setUserInfo(item);
          profileInfo.close();
      }
  });

  profileInfo.setEventListeners();

  const openProfileInfo = () => {
    const user = userInfo.getUserInfo();
    nameInput.value = user.name;
    jobInput.value = user.info;
    profileInfo.open();
  }


//Создание  карточек с городами


//Метод загрузки карточек массива на сайт

const cardList = new Section({
  items, renderer: (item) => {
      const card = new Card('#template', {
          data: item, handleCardClick: () => {
              popupPictureBig.open(item);
          }
      });
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
  }
}, galleryContainer);

cardList.renderItems(items);


// функция создания попапа для добавления нового места (образец класса PopupWithForm)

const addPlacePopup = new PopupWithForm (addFormElement, {
    submitForm: (item) => {
    const card = new Card('#template', {
      data: item, handleCardClick: () => {
        popupPictureBig.open(item);
      }
    });
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
      addPlacePopup.close();
    }
  });

  const popupPictureBig = new PopupWithImage(pictureBig);
  const openAddForm = function () {
    addPlacePopup.open();
  }

  popupPictureBig.setEventListeners();
  addPlacePopup.setEventListeners();

// функция валидации данных

function startValidation() {
  const forms = Array.from(document.querySelectorAll('.popup__form')); // массив форм
  forms.forEach((form) => {
      const validator = new FormValidator(validationConfig, form);
      validator.enableValidation();
  });
}

// Вызовы функций

formEdit.addEventListener('click', () => openProfileInfo()); //Вызываем функцию открытия и сабмита информации в профиле
addButton.addEventListener('click', () => openAddForm()); //Вызываем функцию открытия и сабмита нового места

startValidation();//Вызываем функцию валидации данных
