import { galleryTemplate } from '../utils/constants.js';

//Класс карточки с городом

export class Card { //Объявляем класс
    constructor(cardSelector, {data, handleCardClick}) { //Собираем в конструктор все необходимые свойства
      this._name = data.name;
      this._link = data.link;
      this._handleCardClick = handleCardClick;
    }

    _getTemplate() { //Метод получения доступа к разметке и template
      const cardElement = galleryTemplate.querySelector('.gallery__item').cloneNode(true);
      this._element = cardElement;
      return this._element;
    }

    _like() { //Метод лайка
      this._element.querySelector('.gallery__link').classList.toggle('gallery__link_active');
    }

    _delete() { //Метод удаления карточки
      this._element.remove();
      this._element = null;
    }

    close() { //метод закрытия попапа
      this._element.classList.remove('popup_opened');
    }

    _handleEscClose(evt) { //метод закрытия попапа по клику на Esc
      if (evt.key === 'Escape') {
        this.close();
      }
    }

    _overlayClose(evt) {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
    }
  }

    setEventListeners() { //Устанавливаем классу слушатели событий
      this._element.querySelector('.gallery__link').addEventListener('click', () => {
        this._like()
      });

      this._element.querySelector('.gallery__image').addEventListener('click', () => {
        this._handleCardClick()
      });

      this._element.querySelector('.gallery__delete').addEventListener('click', () => {
        this._delete()
      });

      document.addEventListener('keydown', evt => this._handleEscClose(evt));
      document.addEventListener('mousedown', evt => this._overlayClose(evt));
    }


    generateCard() { //Метод добавления карточки в разметку и подготовки к публикации
      this._element = this._getTemplate(); //Запишем разметку в приватное поле _element. Так у других элементов появится доступ к ней.
      this.setEventListeners(); //Добавим слушатели событий

      this._element.querySelector('.gallery__image').src = this._link; //Добавим данные
      this._element.querySelector('.gallery__image').alt = this._name;
      this._element.querySelector('.gallery__title').textContent = this._name;

      return this._element; //Вернём элемент наружу
    }
  }
