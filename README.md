# Dark Mode Toggle — Скрипт для переключения тёмного режима

## Подключение

1. Скачайте файл `dark-mode.js`.
2. Подключите его в вашем HTML-документе перед закрывающим тегом `</body>`:
   ```html
   <script src="dark-mode.js" defer></script>
   ```
3. Скрипт автоматически добавит кнопку на ваш сайт.

## Настройка

Вы можете настроить внешний вид и поведение кнопки, изменив параметры в файле `dark-mode.js`.

### Доступные параметры:

- **`position`** — положение кнопки (`top-right`, `top-left`, `bottom-right`, `bottom-left`).
- **`bgColor`** — цвет фона кнопки (например, `#007BFF`).
- **`textColor`** — цвет текста кнопки (например, `#FFFFFF`).
- **`lightText`** — текст для светлого режима (например, "Светлая тема").
- **`darkText`** — текст для тёмного режима (например, "Тёмная тема").

### Пример настройки:

```javascript
new DarkModeToggle({
  position: "bottom-left",
  bgColor: "#FF5722",
  textColor: "#FFFFFF",
  lightText: "Светлый режим",
  darkText: "Тёмный режим",
});
```

## Использование в CMS

1. Подключите файл `dark-mode.js` в настройках вашей CMS (обычно в разделе "Подключение скриптов").
2. Если ваша CMS позволяет вставить пользовательский HTML или JS, просто добавьте:
   ```html
   <script src="dark-mode.js" defer></script>
   ```

## Пример использования

Чтобы протестировать работу скрипта, откройте прилагаемый файл `index.html` в вашем браузере. Вы увидите кнопку для переключения между тёмным и светлым режимами.
