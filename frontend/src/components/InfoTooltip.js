import checkmarkIcon from '../images/checkmark.svg';
import crossIcon from '../images/cross.svg';

import React from "react";
import { useNavigate } from "react-router-dom";

function InfoTooltip ({isOpen, onClose, isSuccess}) {

    const navigate = useNavigate();

    const onCloseWindow = () => {
        onClose();
        navigate("/sign-in");
    }
  return (
    <div className={
          isOpen ?
          `popup popup_opened`
          : `popup`
      }>
      <div className="popup__content popup_type_info-tooltip">
        <button type="button" className="popup__close-button" onClick={onCloseWindow} />
        <img
          src={isSuccess ? checkmarkIcon : crossIcon}
          alt={
            isSuccess ? 'Регистрация прошла успешно' : 'Регистрация не прошла'
          }
          className="popup__info-tooltip-icon"
        />
        <h3 className="popup__info-tooltip-title">
          {isSuccess
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h3>
      </div>
    </div>
  );
}

export default InfoTooltip;