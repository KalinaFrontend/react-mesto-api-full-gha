import React from "react";
import "../index.css";

function PopupWithForm({
  title,
  name,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  children,
  inactive
}) {
  return (
    <div
      className={
        isOpen
          ? `popup popup_type_${name} popup_opened`
          : `popup popup_type_${name}`
      }
    >
      <div className="popup__content">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <h2 className="popup__content-title">{title}</h2>
        <form
          name="popup-form-profile"
          className="popup__form form"
          onSubmit={onSubmit}
        >
          {children}
          <button type="submit" className={inactive ? `popup__save-button` : `popup__save-button popup__save-button_inactive`}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
