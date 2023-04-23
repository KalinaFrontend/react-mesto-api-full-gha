import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ isOpen, onClose, isDeleteCard }) {
  function handleSubmit(e) {
    e.preventDefault();
    isDeleteCard();
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name=""
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      inactive={true}
      children={<></>}
    />
  );
}

export default DeleteCardPopup;
