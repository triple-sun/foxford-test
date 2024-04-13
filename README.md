# FoxfordTest

Тестовое задание выполнено с помощью NX, NestJS, React и Bolt

Для запуска необходимо:

1. Задать переменные окружения по образцу файла `env.example`.
2. Смонтировать контейнер с базой данных `docker-compose up -d`.
3. Заполнить базу тестовыми данными `npx prisma db seed`
4. Запустить бот `nx serve slackbot`.
5. Запустить бекенд `nx serve api`. Интерфейс Swagger доступен по [localhost:4000/spec](адресу)
6. Запустить фронтенд `nx serve front-end`
