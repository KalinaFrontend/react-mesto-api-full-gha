import React from "react";
import PopupWithForm from "./PopupWithForm";
import forms from "../utils/forms";

function AddPlacePopup({ isOpen, onClose, onUpdateCards }) {
  const {values, errors, inactive, handleChange, handleSubmit, resetForm } = forms(onUpdateCards);
  
  const closePopup = () => {
    onClose();
    resetForm();
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-element"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={closePopup}
      onSubmit={handleSubmit}
      inactive={inactive}
    >
      <label className="popup__label">
        <input
          id="imageName-input"
          name="name"
          type="text"
          placeholder="Название"
          className="popup__input popup__input_type_image-name"
          minLength="2"
          maxLength="30"
          required
          value={values.name || ''}
          onChange={handleChange}
        />
        <span className="popup__input-error  imageName-input-error">{errors.name}</span>
      </label>
      <label className="popup__label">
        <input
          id="imageLink-input"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_image-link"
          required
          value={values.link || ''}
          onChange={handleChange}
        />
        <span className="popup__input-error imageLink-input-error">{errors.link}</span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
