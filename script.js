// Функция для декодирования Base64 с поддержкой UTF-8
function base64ToUtf8(str) {
    return decodeURIComponent(escape(atob(str)));
}

// Получение параметра 'data' из URL
const urlParams = new URLSearchParams(window.location.search);
const encodedData = urlParams.get('data');

if (encodedData) {
    try {
        // Декодирование Base64
        const decodedData = base64ToUtf8(encodedData);

        // Парсинг JSON
        const tourData = JSON.parse(decodedData);

        // Отображение данных на странице
        document.getElementById('tour-title').textContent = tourData.title || "Название тура";
        document.getElementById('tour-description').querySelector('p').textContent = tourData.description || "Описание отсутствует";
        document.getElementById('tour-duration').querySelector('p').textContent = tourData.duration || "Продолжительность не указана";

        const highlightsList = document.getElementById('highlights-list');
        highlightsList.innerHTML = tourData.highlights ? tourData.highlights.map(item => `<li>${item}</li>`).join('') : "<li>Данные отсутствуют</li>";

        const activitiesList = document.getElementById('activities-list');
        activitiesList.innerHTML = tourData.activities ? tourData.activities.map(item => `<li>${item}</li>`).join('') : "<li>Данные отсутствуют</li>";

        const includesList = document.getElementById('includes-list');
        includesList.innerHTML = tourData.includes ? tourData.includes.map(item => `<li>${item}</li>`).join('') : "<li>Данные отсутствуют</li>";

        const notIncludesList = document.getElementById('not-includes-list');
        notIncludesList.innerHTML = tourData.not_includes ? tourData.not_includes.map(item => `<li>${item}</li>`).join('') : "<li>Данные отсутствуют</li>";

        const programList = document.getElementById('program-list');
        programList.innerHTML = tourData.program ? tourData.program.map(item => `<li>${item}</li>`).join('') : "<li>Данные отсутствуют</li>";

        document.getElementById('tour-cost').querySelector('p').textContent = tourData.cost || "Стоимость не указана";

        const additionalInfoList = document.getElementById('additional-info-list');
        additionalInfoList.innerHTML = tourData.additional_info ? tourData.additional_info.map(item => `<li>${item}</li>`).join('') : "<li>Данные отсутствуют</li>";

        document.getElementById('contact-phone').textContent = tourData.contacts.phone || "Телефон не указан";
        document.getElementById('contact-email').textContent = tourData.contacts.email || "Email не указан";
        const contactWebsite = document.getElementById('contact-website');
        contactWebsite.textContent = tourData.contacts.website || "Сайт не указан";
        contactWebsite.href = tourData.contacts.website || "#";

        // Настройка ссылки для кнопки CTA (WhatsApp)
        const ctaLink = document.getElementById('cta-link');
        const message = encodeURIComponent(`Здравствуйте! Меня интересует тур: ${tourData.title || "Название тура"}`);
        ctaLink.href = `https://wa.me/13474798289?text=${message}`;
        ctaLink.textContent = tourData.cta || "Свяжитесь с нами";

    } catch (error) {
        console.error("Ошибка обработки данных:", error);
        document.body.innerHTML = "<h1>Ошибка загрузки данных</h1>";
    }
} else {
    console.error("Параметр 'data' отсутствует в URL.");
    document.body.innerHTML = "<h1>Данные тура не найдены</h1>";
}
