// Функция для декодирования Base64 с поддержкой UTF-8
function base64ToUtf8(str) {
    return decodeURIComponent(escape(atob(str)));
}

// Получение параметра из URL
const urlParams = new URLSearchParams(window.location.search);
const encodedData = urlParams.get('data');

if (encodedData) {
    try {
        console.log("Полученные данные:", encodedData);

        // Декодирование строки Base64
        const decodedData = base64ToUtf8(encodedData);
        console.log("Декодированные данные:", decodedData);

        // Преобразование JSON в объект
        const tourData = JSON.parse(decodedData);

        // Отображение данных на странице
        document.getElementById('tour-title').textContent = tourData.title;
        document.getElementById('tour-duration').querySelector('p').textContent = tourData.duration;
        document.getElementById('tour-activities').querySelector('p').textContent = tourData.activities.join(', ');
        document.getElementById('tour-includes').querySelector('p').textContent = tourData.includes.join(', ');
        document.getElementById('tour-not-includes').querySelector('p').textContent = tourData.not_includes.join(', ');
        document.getElementById('tour-details').querySelector('p').textContent = tourData.details;

    } catch (error) {
        console.error("Ошибка обработки данных:", error);
        document.body.innerHTML = "<h1>Ошибка загрузки данных</h1>";
    }
} else {
    console.error("Параметр 'data' отсутствует в URL.");
    document.body.innerHTML = "<h1>Данные тура не найдены</h1>";
}
