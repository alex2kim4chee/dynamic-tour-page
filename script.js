// Получение параметров из URL
const urlParams = new URLSearchParams(window.location.search);

// Чтение параметров
const title = urlParams.get('title');
const duration = urlParams.get('duration');
const activities = urlParams.get('activities');
const includes = urlParams.get('includes');
const notIncludes = urlParams.get('not_includes');
const details = urlParams.get('details');

// Динамическое отображение данных
if (title) document.getElementById('tour-title').textContent = title;
if (duration) document.getElementById('tour-duration').querySelector('p').textContent = duration;
if (activities) document.getElementById('tour-activities').querySelector('p').textContent = activities.replace(/,/g, ', ');
if (includes) document.getElementById('tour-includes').querySelector('p').textContent = includes.replace(/,/g, ', ');
if (notIncludes) document.getElementById('tour-not-includes').querySelector('p').textContent = notIncludes.replace(/,/g, ', ');
if (details) document.getElementById('tour-details').querySelector('p').textContent = details;
