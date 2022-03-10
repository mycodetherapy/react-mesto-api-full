import { configApi } from "./constants"

 class Api {
  constructor() {
    this._url = configApi.url;
  }

  _onError = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo = (token) => {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      credentials: 'include',
      headers: {
        authorization:`Bearer ${token}`,
        "content-type": "application/json",
      } 
    }).then(this._onError);
  };

  getCards = (token) => {
    return fetch(`${this._url}cards`, {
      method: "GET",
      credentials: 'include',
      headers: {
        authorization:`Bearer ${token}`,
        "content-type": "application/json",
      }
    }).then(this._onError);
  };

  addCard = (data, token) => {
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: {
        authorization:`Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(this._onError);
  };

  removeCard = (dataId, token) => {
    return fetch(`${this._url}cards/${dataId}`, {
      method: "DELETE",
      headers: {
        authorization:`Bearer ${token}`,
        "content-type": "application/json",
      }
    }).then(this._onError);
  };

  setUserInfo = (userData, token) => {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: {
        authorization:`Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then(this._onError);
  };

  setAvatar = (avatar, token) => {
    return fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization:`Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(avatar),
    }).then(this._onError);
  };

  toggleLike = (method, dataId, token) => {
    return fetch(`${this._url}cards/${dataId}/likes`, {
      method: method,
      headers: {
        authorization:`Bearer ${token}`,
        "content-type": "application/json",
      }
    }).then(this._onError);
  };
}

const api = new Api(configApi);
export default api;
