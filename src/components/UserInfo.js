

//Создаем класс для добавления информации о пользователе в профиль

export class UserInfo {
  constructor (author) {
    this._name = author.profileAuthor;
    this._info = author.profileStatus;
  }

  getUserInfo() { //метод получения информации
    const userInfo = {
      name: this._name.textContent,
      info: this._info.textContent
  }
    return userInfo;
  }

  setUserInfo(data) { //метод добавления информации
    this._name.textContent = data.name;
    this._info.textContent = data.link;
  }
}
