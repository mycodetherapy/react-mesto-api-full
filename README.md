# react-mesto-api-full
Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизация и регистрация пользователей, операции с карточками и пользователями. 
  
Домен: http://photosave.nomoredomains.xyz

Сервер: http://api.photosave.nomoredomains.work

Для получения доступа необходима регистрация.

## Как это работает
* Дерево элементов строится с помощью инструментов библиотеки React.js.
* Клиент отправляет featch-запросы к API.
* Сервер на платформе Node.js принимает данные и отдает ответ.
* Для упрощения обслуживания код серверной части написан с использованием функций Express.
* Данные пишутся в MongoDB.
* Непрерывную работоспособность обеспечивает pm2.
* Перенаправление запросов осуществляет Nginx.

## Планы на будущее
На сегодняшний день интерфейс клиента не позволяет напрямую увидеть создателя карточки и пользователей оценивших её, хотя API это предусматривает. Поэтому в мои планы входит поиск дизайнерского решения и соответствующее расширение функциональности.

