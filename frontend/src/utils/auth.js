import { baseUrl } from "./constants";

const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  }

  const handleResponse = async (data) => {
    const res = await data.json()
    if (data.ok) {
        return res
    } else {
        return Promise.reject(res);
    }
}

export async function authorization ({ email, password }) {
  const data = await fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
  },
    body: JSON.stringify( { email, password } ),
  })
  return handleResponse(data);
}

export async function registration({ email, password }) {
  const data = await fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
           Accept: 'application/json',
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          password,
          email
      })
  })
  return handleResponse(data);
}

export const getContent = (token) => {
    return fetch(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
    },
    }).then(checkResponse);
}

