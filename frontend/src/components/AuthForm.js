import forms from "../utils/forms";
import { Link, useLocation } from "react-router-dom";
import React from "react";

function AuthForm({ title, onLogin }) {
  const { values, errors, handleChange, handleSubmit } = forms(onLogin);
  const location = useLocation();

  return (
    <div className="login">
      <h2 className="login__title">Регистрация</h2>
      <form
        name="login-form form"
        className="login__form form"
        onSubmit={handleSubmit}
      >
        <input
          id="email-input"
          name="email"
          type="email"
          className="login__input"
          minLength="2"
          maxLength="40"
          placeholder="Email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <span className="popup__input-error  imageName-input-error">
          {errors.email}
        </span>
        <input
          id="password-input"
          name="password"
          type="text"
          className="login__input"
          minLength="8"
          maxLength="200"
          placeholder="Пароль"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <span className="popup__input-error  imageName-input-error">
          {errors.password}
        </span>
        <button type="submit" className="login__save-button">
          Зарегистрироваться
        </button>
        {location.pathname === "/sign-in" && (
          <Link to="" className="login__auth-link"></Link>
        )}
        {location.pathname === "/sign-up" && (
          <Link to="/sign-in" className="login__auth-link">
            Уже зарегистрированы? Войти
          </Link>
        )}
      </form>
    </div>
  );
}

export default AuthForm;
