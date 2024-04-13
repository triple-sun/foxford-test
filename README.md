# FoxfordTest

Тестовое задание выполнено с помощью NX, NestJS, React и Bolt

Для запуска необходимо:

1. Установить все зависимости `npm i`
2. Задать переменные окружения по образцу файла `env.example`.
3. Смонтировать контейнер с базой данных `docker-compose up -d`.
4. Заполнить базу тестовыми данными `npx prisma db seed`
5. Запустить бот `nx serve slackbot`.
6. Запустить бекенд `nx serve api`. Интерфейс Swagger доступен по [localhost:4000/spec](адресу)
7. Запустить фронтенд `nx serve front-end`
