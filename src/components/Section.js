//Создаем класс для добавления элементов в разметку DOM

export class Section {
  constructor ({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItems() { //метод отрисовки элементов
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) { //метод добавления элементов в разметку
    this._container.prepend(element);
  }
}
