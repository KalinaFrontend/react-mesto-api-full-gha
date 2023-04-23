import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "../index.css";
import Card from "./Card";

function Main({
  loggedIn,
  isEditProfilePopupOpen,
  isAddPlacePopupOpen,
  isEditAvatarPopupOpen,
  isImagePopupOpen,
  isCardLike,
  handleCardDelete,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__card">
          <img
            src={currentUser.avatar}
            alt="Аватар пользователя"
            className="profile__avatar"
          />
          <button
            className="profile__avatar-edit-button"
            type="button"
            onClick={isEditAvatarPopupOpen}
          ></button>
          <div className="profile__info">
            <div className="profile__info-block">
              <h1 className="profile__info-name">{currentUser.name}</h1>
              <button
                type="button"
                className="profile__edit-button"
                onClick={isEditProfilePopupOpen}
              ></button>
            </div>
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={isAddPlacePopupOpen}
        ></button>
      </section>
      <section className="elements" aria-label="Фотографии">
        <ul className="elements__items">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={isImagePopupOpen}
                onLikeClick={isCardLike}
                onCardDelete={handleCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
