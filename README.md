# User Management App

## Запуск по адресу https://danula-ded.github.io/user-management-app/

Angular приложение для управления пользователями с использованием Ng-Zorro.

## Разработка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm start

# Запуск тестов
npm test
```

## Деплой на GitHub Pages

### Автоматический деплой

Приложение автоматически деплоится на GitHub Pages при пуше в ветку `main`.

### Ручной деплой

1. Собрать проект:

```bash
npm run build
```

2. Деплой:

```bash
npm run deploy
```

### Настройка GitHub Pages

1. Перейти в Settings → Pages
2. Выбрать Source: Deploy from a branch
3. Выбрать Branch: gh-pages, folder: / (root)
4. Сохранить

После настройки сайт будет доступен по адресу:
`https://<ваш-логин>.github.io/user-management-app/`

## Технологии

- Angular 19
- Ng-Zorro
- SCSS
- GitHub Actions
- GitHub Pages
