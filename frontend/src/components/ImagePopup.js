import React from "react";
function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_image-view ${card ? "popup_opened" : ""}`}
    >
      <figure className="popup__image-conteiner">
        <img
          src={card !== null ? card.link : "#"}
          alt={card !== null ? card.name : "#"}
          className="popup__image"
        />
        <figcaption className="popup__image-title">
          {card !== null ? card.name : "#"}
        </figcaption>
        <button
          className="popup__close-button popup__close-button_place_image-view"
          onClick={onClose}
        ></button>
      </figure>
    </div>
  );
}

export default ImagePopup;
