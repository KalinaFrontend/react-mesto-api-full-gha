import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onLikeClick, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `elements__item-like ${
    isLiked && "element__item-like_type_active"
  }`;

  const handleCardClick = () => {
    onCardClick(card);
  };

  const handleCardLike = () => {
    onLikeClick(card);
  };

  const handleCardDelete = () => {
    onCardDelete(card._id);
  };

  return (
    <li className="elements__item">
      {isOwn && (
        <button
          type="button"
          className="elements__delete"
          onClick={handleCardDelete}
        />
      )}
      <img
        src={card.link}
        alt={card.name}
        className="elements__item-image"
        onClick={handleCardClick}
      />
      <div className="elements__item-card">
        <h3 className="elements__item-title">{card.name}</h3>
        <div className="elemants__item-likes">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleCardLike}
          ></button>
          <p className="elements__item-number-likes">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
export default Card;
