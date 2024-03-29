<a name="readme-top"></a>


<div align="end">
  <h3 align="start">Проект: "Место"</h3>
  <p align="start">
    Данная работа выполняется в рамках образовательной программы <a href="https://practicum.yandex.ru/">Яндекс Практикума</a>. Проект представляет собой создание отзывчиво-адаптивного интерфейса, а так же работа с удаленной базой данных с использованием современных технологий <a href="https://reactjs.org/">React</a> и <a href="https://expressjs.com/">Express</a>. Он повторяет основной функционал популярных соцсетей: <a href="https://www.instagram.com/">Instagram</a>, <a href="https://www.facebook.com/">Facebook</a>, <a href="https://vk.com/">VKontakte</a>.
  </p>
</div>

---


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Содержание</summary>
  <ol>
    <li>
      <a href="#о-проекте">О проекте</a>
      <ul>
        <li><a href="#функционал">Функционал</a></li>
        <li><a href="#стек-технологий">Стек технологий</a></li>
      </ul>
    </li>
    <li><a href="#установка">Установка</a></li>
    <li><a href="#использование">Использование</a></li>
    <li><a href="#контакты">Контакты</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## О проекте


Данный проект - социальная сеть включающая фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. Приложение "Место" изначально созданное на нативных технологиях при использовании парадигмы объектно орентированного программирования, проделалало большой путь до своего конечного вида. В финешной версии используются современные технологии разработки, ООП заменен на функциональный подход, приложение использует собственный Бэкенд, который в свою очередь так же как и Фронтенд теперь расположен на виртуальной машине.

Frontend Frontend https://mesto-react-kalina.nomoredomains.monster

Backend https://api.mesto-react-kalina.nomoredomains.monster

![Mesto React - Opera 2023-07-20 20-34-36](https://github.com/KalinaFrontend/react-mesto-api-full-gha/assets/111464624/af2e493b-b7e4-4fcc-9cf9-6fb34ca35887)



### Функционал

* Адаптивный интерфейс
* Обмен данными с сервером
* Открытие и закрытие модальных окон (по кнопке, оверлею и клавише "Escape")
* Модальное окно с увеличенной фотографией карточки
* Редактирование информации пользователя
* Обновление аватара
* Добавление новой карточки
* Добавление и снятие лайка (включая счетчик лайков)
* Удаление карточки с модальным окном подтверждения действия
* Спиннеры загрузки
* Валидация форм




### Стек технологий

В проекте использпользовались: 

* [![React][React.js]][React-url]
    * <a href="https://reactjs.org/docs/context.html">React context</a>
    * <a href="https://reactjs.org/docs/hooks-overview.html">React hoocks</a>
    * <a href="https://reactrouter.com/en/main">React router</a>
* [![JavaScript][JavaScript]][JavaScript-url]
    * <a href="https://reactjs.org/docs/introducing-jsx.html">расширение jsx</a>
* [![Webpack][Webpack]][Webpack-url]
* [![Npm][Npm]][Npm-url]
* [![Babel][Babel]][Babel-url]
* [![BEM][Bem]][Bem-url]
    * <a href="https://ru.bem.info/methodology/filestructure/#nested">BEM nested</a>
* [![Node][Node]][Node-url]
* [![Mongodb][Mongodb]][Mongodb-url]
* [![Express][Express]][Express-url]
* [![Eslint][Eslint]][Eslint-url]

<p align="right">(<a href="#readme-top">вернуться на верх</a>)</p>



<!-- GETTING STARTED -->
## Установка

Для запуска проекта в своей среде разработке следуйте следующим инструкциям:

1. Клонируйте репозиторий
   ```sh
   git clone https://github.com/KalinaFrontend/react-mesto-api-full-gha.git
   ```
2. Установите пакеты NPM
   ```sh
   npm install
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Запустить приложение

    для Front-end
   ```sh
   npm run start
   ```

    для Back-end
   ```sh
   npm run dev
   ```
>* Если у вас не произошел автоматический переход в браузер с открытым приложением, введите в адресную строку самостоятельно -  [http://localhost:3000](http://localhost:3000)
>* В процессе изменения кода страница будет автоматически перезагружаться. 
>* Back-end работает на 3001 порту


<p align="right">(<a href="#readme-top">вернуться на верх</a>)</p>



<!-- USAGE EXAMPLES -->
## Использование
В приложении вы можете:
* Редактировать информацию о себе и изменять свой аватар
<br>
<a href="https://mesto-react-kalina.nomoredomains.monster"><img src="https://github.com/KalinaFrontend/react-mesto-api-full-gha/assets/111464624/7994750e-0954-4135-8cfb-248fa3ab19c8" width="550" alt="#"></a>
<br>
* Добавлять фото карточки с подписями, для этого необходимо придумать подпись и вставить ссылку на изображение
<br>
<a href="https://mesto-react-kalina.nomoredomains.monster/"><img src="https://github.com/KalinaFrontend/react-mesto-api-full-gha/assets/111464624/a120ef98-584e-497b-80f0-9b9b3e82bfcf" width="550" alt="#"></a>
<br>
* Оставлять реакцию на свои и чужие фотокарточки
<br>
<a href="https://mesto-react-kalina.nomoredomains.monster/"><img src="https://github.com/KalinaFrontend/react-mesto-api-full-gha/assets/111464624/9f716001-27cc-4e0c-bdaa-908c9e482491" width="550" alt="#"></a>
<br>
* Открывать изображения из фотокарточек в полном разрешении изображения
<br>
<a href="https://mesto-react-kalina.nomoredomains.monster/"><img src="https://github.com/KalinaFrontend/react-mesto-api-full-gha/assets/111464624/d74effd7-866f-4003-a654-6c71e4dc4549" width="550" alt="#"></a>
<br>
* Удалять карточки нажав корзину и далее подтвердив действие
<br>
<a href="https://mesto-react-kalina.nomoredomains.monster/"><img src="https://github.com/KalinaFrontend/react-mesto-api-full-gha/assets/111464624/e6ddaeca-e2eb-415d-986d-2b14e35fa51c" width="550" alt="#"></a>
<br>
<p align="right">(<a href="#readme-top">вернуться на верх</a>)</p>


<!-- CONTACT -->
## Контакты

Александр Грамс (разработчик):
 - Телеграм - [@dzhiltcov](https://t.me/dzhiltcov)
 - Email - dzhiltcov@yandex.ru

>Ссылка на проект: [https://github.com/KalinaFrontend/react-mesto-api-full-gha](https://github.com/KalinaFrontend/react-mesto-api-full-gha)

>Ссылка на хостинг Front-end: [https://mesto-react-kalina.nomoredomains.monster](https://mesto-react-kalina.nomoredomains.monster)

>Ссылка на хостинг Back-end: [https://api.mesto-react-kalina.nomoredomains.monster](https://api.mesto-react-kalina.nomoredomains.monster)

<p align="right">(<a href="#readme-top">вернуться на верх</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AlexanderGrams/react-mesto-api-full-gha.svg?style=for-the-badge
[contributors-url]: https://github.com/AlexanderGrams/react-mesto-api-full-gha/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AlexanderGrams/react-mesto-api-full-gha.svg?style=for-the-badge
[forks-url]: https://github.com/AlexanderGrams/react-mesto-api-full-gha/network/members
[stars-shield]: https://img.shields.io/github/stars/AlexanderGrams/react-mesto-api-full-gha.svg?style=for-the-badge
[stars-url]: https://github.com/AlexanderGrams/react-mesto-api-full-gha/stargazers
[issues-shield]: https://img.shields.io/github/issues/AlexanderGrams/react-mesto-api-full-gha.svg?style=for-the-badge
[issues-url]: https://github.com/AlexanderGrams/react-mesto-api-full-gha/issues
[license-shield]: https://img.shields.io/github/license/AlexanderGrams/react-mesto-api-full-gha.svg?style=for-the-badge
[license-url]: https://github.com/AlexanderGrams/react-mesto-api-full-gha/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png


[JavaScript]: https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=f7e01d
[JavaScript-url]: https://www.javascript.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Webpack]: https://img.shields.io/badge/webpack-20232A?style=for-the-badge&logo=webpack&logoColor=75afcc
[Webpack-url]: https://webpack.js.org/
[Npm]: https://img.shields.io/badge/npm-20232A?style=for-the-badge&logo=npm&logoColor=BC3433
[Npm-url]: https://www.npmjs.com/
[Babel]: https://img.shields.io/badge/babel-20232A?style=for-the-badge&logo=babel&logoColor=f5da55
[Babel-url]: https://babeljs.io/
[BEM]: https://img.shields.io/badge/BEM-20232A?style=for-the-badge&logo=bem&logoColor=ffffff
[BEM-url]: https://ru.bem.info/
[Node]: https://img.shields.io/badge/node.js-20232A?style=for-the-badge&logo=node.js&logoColor=green
[Node-url]: https://nodejs.org/en
[Mongodb]: https://img.shields.io/badge/mongodb-20232A?style=for-the-badge&logo=mongodb&logoColor=00ED64
[Mongodb-url]: https://www.mongodb.com/
[Express]: https://img.shields.io/badge/Express-20232A?style=for-the-badge&logo=Express&logoColor=ffffff
[Express-url]: https://expressjs.com/ru/
[Eslint]: https://img.shields.io/badge/eslint-20232A?style=for-the-badge&logo=eslint&logoColor=4B32C3
[Eslint-url]: https://eslint.org/
