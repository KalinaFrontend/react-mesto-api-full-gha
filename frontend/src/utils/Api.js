import { baseUrl } from "./constants";

class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  setUserInfo(forms) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(forms),
    }).then(this._checkResponse);
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  setCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(_id) {
    return fetch(
      `${this._baseUrl}/cards/${_id} `,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        },
      }
    ).then(this._checkResponse);
  }

  setLike(_id) {
    return fetch(
      `${this._baseUrl}/cards/${_id}/likes`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        },
      }
    ).then(this._checkResponse);
  }

  deleteLike(_id) {
    return fetch(
      `${this._baseUrl}/cards/${_id}/likes`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        },
      }
    ).then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(
      `${this._baseUrl}/cards/${cardId}/likes`,
      {
        method: `${!isLiked ? "DELETE" : "PUT"}`,
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          "Content-Type": "application/json",
        },
      }
    ).then(this._checkResponse);
  }

  updateAvatar(data) {
    return fetch(
      `${this._baseUrl}/users/me/avatar`,
      {
        method: "PATCH",
        headers: {
          Accept: 'application/json',
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },

        body: JSON.stringify(data),
      }
    ).then(this._checkResponse);
  }
}

const api = new Api( baseUrl );
export default api;
