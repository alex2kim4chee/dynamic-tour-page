const urlParams = new URLSearchParams(window.location.search);
const encodedData = urlParams.get('data');

if (encodedData) {
    try {
        console.log("Base64 строка:", encodedData);
        
        // Декодирование Base64
        const jsonString = atob(encodedData);
        console.log("Декодированная строка JSON:", jsonString);
        
        // Парсинг JSON
        const tourData = JSON.parse(jsonString);
        console.log("Данные тура:", tourData);

        // Отображение данных на странице
        document.getElementById('tour-title').textContent = tourData.title;
        document.getElementById('tour-duration').querySelector('p').textContent = tourData.duration;
        document.getElementById('tour-activities').querySelector('p').textContent = tourData.activities.join(', ');
        document.getElementById('tour-includes').querySelector('p').textContent = tourData.includes.join(', ');
        document.getElementById('tour-not-includes').querySelector('p').textContent = tourData.not_includes.join(', ');
        document.getElementById('tour-details').querySelector('p').textContent = tourData.details;

    } catch (error) {
        console.error("Ошибка при обработке данных:", error);
        document.body.innerHTML = "<h1>Ошибка загрузки данных</h1>";
    }
} else {
    console.error("Параметр 'data' отсутствует в URL.");
    document.body.innerHTML = "<h1>Данные тура не найдены</h1>";
}
