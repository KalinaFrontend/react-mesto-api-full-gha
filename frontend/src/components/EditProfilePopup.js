import React, { useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import forms from "../utils/forms";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

  const {values, errors, inactive, handleChange, handleSubmit, resetForm, setValues } = forms(onUpdateUser);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      about: currentUser.about});
  }, [currentUser, isOpen]);


  const closePopup = () => {
    onClose();
    resetForm();
  }


  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={closePopup}
      onSubmit={handleSubmit}
      inactive={inactive}
    >
      <label className="popup__label">
        <input
          id="userName-input"
          name="name"
          type="text"
          className="popup__input popup__input_type_name"
          minLength="2"
          maxLength="40"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
        <span className="popup__input-error userName-input-error">{errors.name}</span>
      </label>
      <label className="popup__label">
        <input
          id="useJob-input"
          name="about"
          type="text"
          className="popup__input popup__input_type_job"
          minLength="2"
          maxLength="200"
          value={values.about || ""}
          onChange={handleChange}
          required
        />
        <span className="popup__input-error useJob-input-error">{errors.about}</span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
