document.addEventListener('DOMContentLoaded', () => {
  const generatorBtn = document.getElementById('generator-btn');
  const numbersContainer = document.getElementById('numbers-container');
  const themeToggle = document.getElementById('theme-toggle');

  // Load saved theme
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = 'Light Mode';
  }

  // Theme Switching logic
  themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggle.textContent = 'Dark Mode';
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.textContent = 'Light Mode';
      localStorage.setItem('theme', 'dark');
    }
  });

  // Generator logic
  generatorBtn.addEventListener('click', () => {
    generateLotteryNumbers();
  });

  function generateLotteryNumbers() {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
      const numberElement = document.createElement('div');
      numberElement.classList.add('number');
      numberElement.textContent = number;
      numbersContainer.appendChild(numberElement);
    });
  }
});
