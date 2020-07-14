//Создаем класс для попапов

export class Popup {
  constructor (popupSelector) {
    this.popupSelector = popupSelector;
    this._handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
          this.close();
      }
    }
    this._overlayClose = (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
    }
  }

  open() { //метод открытия попапов
    this.popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    document.addEventListener('mousedown', this._overlayClose);
  }

  close() { //метод закрытия попапов
    this.popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('mousedown', this._overlayClose);
  }

  setEventListeners() { //добавляем классу слушателей событий
    this.closeButton = this.popupSelector.querySelector('.popup__close');
    this.closeButton.addEventListener('click', () => this.close());
  }
}
