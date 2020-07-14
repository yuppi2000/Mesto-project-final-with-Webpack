import { Popup } from './Popup.js';
import { pictureImage,pictureTitle } from '../utils/constants.js';

// Создаем класс для попапа с картинкой

export class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
  }

  open(data) { //метод открытия попапа
    this.popupSelector.querySelector('.popup__big-image').src = data.link;
    this.popupSelector.querySelector('.popup__big-image').alt = data.name;
    this.popupSelector.querySelector('.popup__image-title').textContent = data.name
    super.open();
  }
}
