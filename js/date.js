const daysArr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятницы', 'Суббота'];
const monthsArr = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const currentDate = new Date().getDate();
const currentMonth = monthsArr[new Date().getMonth()];
const currentDay = daysArr[new Date().getDay()];

const dateHtml = document.querySelector('.date-container__date');
const dayHtml = document.querySelector('.date-container__day');

dateHtml.innerText = `${currentDate} ${currentMonth}`;
dayHtml.innerText = currentDay;