import { Popup } from './Popup.js';
import { validationConfig } from '../utils/constants.js';

// Создаем класс для попапов с формой

export class PopupWithForm extends Popup {
  constructor (popupSelector, {submitForm}) {
    super(popupSelector);
    this.submitForm = submitForm;
  }

  getInputValues() { //метод получения данных с инпутов
    this._inputList = this.popupSelector.querySelectorAll('.popup__info');
    this._formValues = {};
    this._inputList.forEach(input => {
    this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  _setSubmitForm(evt) {
    evt.preventDefault();
    this.submitForm(this.getInputValues());
  }

  _clearError() { //метод очистки ошибок
    const errorSpanList = Array.from(this.popupSelector.querySelectorAll('.popup__error-message'));
    const errorInputList = Array.from(this.popupSelector.querySelectorAll(validationConfig.inputSelector));

    errorSpanList.forEach((span) => {
    span.classList.remove(validationConfig.errorClass);
    });
    errorInputList.forEach((input) => {
    input.classList.remove(validationConfig.inputErrorClass);
    });
  }

  close() { //метод закрытия
    this._clearError();
    super.close();
  }

  setEventListeners() {
    this._submit = this._setSubmitForm.bind(this);
    this.popupSelector.addEventListener('submit', this._submit, {once: true});
    super.setEventListeners();
}

}
