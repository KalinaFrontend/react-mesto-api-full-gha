const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  }

export const authorization = ({ email, password }) => {
    return fetch(`https://auth.nomoreparties.co/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
    },
      body: JSON.stringify({ password, email }),
    }).then(checkResponse);
}


export const registration = ({ email, password }) => {
  console.log({ email, password });
  return fetch('https://auth.nomoreparties.co/signup', {
    method: "POST",
    headers: {
      "Content-Type": "application/json" 
  },
    body: JSON.stringify({ password, email }),
  }).then(checkResponse);
}

export const getContent = (token) => {
    return fetch(`https://auth.nomoreparties.co/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
    },
    }).then(checkResponse);
}

