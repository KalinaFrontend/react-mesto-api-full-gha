import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import forms from "../utils/forms";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();
  const {errors, inactive, handleChange, resetForm } = forms(onUpdateAvatar);
  
  const closePopup = () => {
    onClose();
    resetForm();
  }

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    resetForm();
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="update-avatar"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={closePopup}
      onSubmit={handleSubmit}
      inactive={inactive}
    >
      <label className="popup__label">
        <input
          id="avatar-input"
          name="avatar"
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_avatar"
          onChange={handleChange}
          required
          ref={avatarRef}
        />
        <span className="popup__input-error avatar-input-error">{errors.avatar}</span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
