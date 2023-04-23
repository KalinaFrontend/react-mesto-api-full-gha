import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteCardPopup from "./DeleteCardPopup";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Register from "./Register";
import * as auth from "../utils/auth";
import InfoTooltip from "../components/InfoTooltip";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [onEditAvatar, setOnEditAvatar] = useState(false);
  const [onAddPlace, setOnAddPlace] = useState(false);
  const [onDeleteCard, setOnDeleteCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState([]);
  const [cards, setCards] = useState([]);
  const [cardDeleteId, setCardDeleteId] = useState(null);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(
    null
  );
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });

    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });

    handleTokenCheck();
  }, []);

  const deleteCardPopup = () => {
    setOnDeleteCard(true);
  };

  const handleEditAvatarClick = () => {
    setOnEditAvatar(true);
  };

  const handleAddPlaceClick = () => {
    setOnAddPlace(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleCardDelete = (_id) => {
    setCardDeleteId(_id);
    deleteCardPopup();
  };

  //Удалить карточку
  const handleDeleteCardPopup = () => {
    api
      .deleteCard(cardDeleteId)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== cardDeleteId));
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  };

  //Закрать все PopUp
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setOnEditAvatar(false);
    setOnAddPlace(false);
    setOnDeleteCard(false);
    setIsInfoTooltipOpen(false);
    setSelectedCard(null);
  };

  //Изменить данные пользователя
  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        closeAllPopups();
      })
      .catch(console.error);
  }

  //Изменить аватар
  function handleUpdateAvatar(avatar) {
    api
      .updateAvatar(avatar)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
        closeAllPopups();
      })
      .catch(console.error);
  }

  //Добавить карточку
  function handleAddPlaceSubmit(card) {
    api
      .setCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(console.error);
  }

  //Авторироваться
  function handleAuthorization(data) {
    auth
      .authorization(data)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          handleTokenCheck();
        }
      })
      .catch(console.error);
  }

  //Зарегистрироваться
  function handleRegistration(data) {
    auth
      .registration(data)
      .finally(setIsInfoTooltipOpen(true))
      .then(() => {
        setIsRegistrationSuccessful(true);
      })
      .catch(console.error);
  }

  //Проверить токен
  const handleTokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }
    auth
      .getContent(jwt)
      .then((data) => {
        setUserData(data.data.email);
        setLoggedIn(true);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  //Получить колличество лайков на карточке
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch(console.error);
  }

  //Выйти из аккаунта
  function handleLoginOut() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="page">
          <Header userEmail={userData} onExit={handleLoginOut} />
          <Routes>
            <Route
              path="/sign-in"
              element={<Login onLogin={handleAuthorization} />}
            />
            <Route
              path="/sign-up"
              element={<Register onLogin={handleRegistration} />}
            />
            <Route
              path="/"
              element={
                <ProtectedRoute
                  element={Main}
                  loggedIn={loggedIn}
                  isEditProfilePopupOpen={handleEditProfileClick}
                  isAddPlacePopupOpen={handleAddPlaceClick}
                  isEditAvatarPopupOpen={handleEditAvatarClick}
                  isImagePopupOpen={handleCardClick}
                  isCardLike={handleCardLike}
                  handleCardDelete={handleCardDelete}
                  cards={cards}
                />
              }
            />
          </Routes>
          <Footer />

          {/* Popup 1 редактирование профиля */}
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          {/* Popup 2 добавление фото */}
          <AddPlacePopup
            isOpen={onAddPlace}
            onClose={closeAllPopups}
            onUpdateCards={handleAddPlaceSubmit}
          />
          {/* Popup 3 обновление аватара */}
          <EditAvatarPopup
            isOpen={onEditAvatar}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          {/* Popup 4 удaление карточки */}
          <DeleteCardPopup
            isOpen={onDeleteCard}
            onClose={closeAllPopups}
            isDeleteCard={handleDeleteCardPopup}
          />
          {/* Popup 5 открытие карточки */}
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeAllPopups}
            isSuccess={isRegistrationSuccessful}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
