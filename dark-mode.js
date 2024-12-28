// Сам скрипт

(() => {
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      /* Добавляем плавный переход для всех режимов */
      transition: background-color 0.5s ease, color 0.5s ease;
    }
    
    body.dark-mode {
      background-color: #1e1e1e; /* Тёмно-серый фон */
      color: #e0e0e0; /* Светло-серый текст */
    }
    
    #dark-mode-toggle {
      position: fixed;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      z-index: 1000;
      background-color: #007BFF;
      color: #FFFFFF;
      border-radius: 5px;
      font-family: inherit; /* По умолчанию наследуем шрифт сайта */
      transition: background-color 0.3s, color 0.3s;
    }
    
    #dark-mode-toggle.light-mode {
      background-color: #ffffff;
      color: #000000;
    }
    `;
  document.head.appendChild(style);

  class DarkModeToggle {
    constructor(options = {}) {
      // Опции для кастомизации
      this.position = options.position || 'bottom-right';
      this.font = options.font || 'inherit';
      this.bgColor = options.bgColor || '#007BFF';
      this.textColor = options.textColor || '#FFFFFF';
      this.lightText = options.lightText || 'Светлый режим';
      this.darkText = options.darkText || 'Тёмный режим';

      // Создаём кнопку
      this.button = document.createElement('button');
      this.button.id = 'dark-mode-toggle';
      this.button.textContent = this.darkText;

      // Применяем стили кастомизации
      this.button.style.backgroundColor = this.bgColor;
      this.button.style.color = this.textColor;
      this.button.style.fontFamily = this.font;
      this.setPosition();

      // Добавляем кнопку в body
      document.body.appendChild(this.button);

      // Проверяем сохранённое состояние
      const isDarkMode = localStorage.getItem('dark-mode') === 'enabled';
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
        this.button.textContent = this.lightText;
      }

      // Добавляем обработчик события
      this.button.addEventListener('click', () => this.toggleMode());
    }

    setPosition() {
      const positions = {
        'bottom-right': { bottom: '10px', right: '10px' },
        'bottom-left': { bottom: '10px', left: '10px' },
        'top-right': { top: '10px', right: '10px' },
        'top-left': { top: '10px', left: '10px' },
      };
      const pos = positions[this.position] || positions['bottom-right'];
      Object.assign(this.button.style, pos);
    }

    toggleMode() {
      const isDarkMode = document.body.classList.toggle('dark-mode');
      localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
      this.button.textContent = isDarkMode ? this.lightText : this.darkText;
    }
  }

  // Инициализация с кастомными параметрами
  document.addEventListener('DOMContentLoaded', () => {
    new DarkModeToggle({
      position: 'top-right', // bottom-right, bottom-left, top-right, top-left
      font: 'Arial, sans-serif', // Кастомный шрифт
      bgColor: 'brown', // Цвет фона кнопки
      textColor: '#FFFFFF', // Цвет текста кнопки
      lightText: 'Включить светлый', // Текст для светлого режима
      darkText: 'Включить тёмный', // Текст для тёмного режима
    });
  });
})();
