const spinner = document.querySelector('.spinner');

//Массив цветов для спиннера
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6'];
let colorIndex = 0;

// Функция для изменения цвета спиннера
function changeColor(){
    spinner.style.borderTopColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

// Добавляем обработчик события клика на спиннер
spinner.addEventListener('click', changeColor);