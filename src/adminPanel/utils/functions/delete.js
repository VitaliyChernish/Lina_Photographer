import { serverApi } from "../consts";
import { showMessage } from "./functions";


export function deletePhotoGallery(cardId) {
    const url = `${serverApi}/api/photoGallery/deletePhotoGallery`
    const formData = new FormData();

    formData.append('id', cardId)

    fetch(url, {
        method: 'DELETE',
        // headers: {
        //     'Authorization': `Bearer ${token}`
        // },
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Обробка успішного оновлення
            showMessage(data.message === undefined ? 'Галерею видалено' : "Помилка сервера: " + data.message, 7000); // Результат реєстрації (наприклад, токен)
        })
        .catch(error => {
            // Обробка помилки
            showMessage(`Помилка при видаленні: Неможливо з'єднатися з сервером`, 3000);
            console.error('Error updating offer:', error);
        });
}

export function deleteOnePhoto(photoId) {
    const url = `${serverApi}/api/photoForGallery/deleteOnePhotoForGallery`
    const formData = new FormData();

    formData.append('id', photoId)

    fetch(url, {
        method: 'DELETE',
        // headers: {
        //     'Authorization': `Bearer ${token}`
        // },
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Обробка успішного оновлення
            showMessage(data.message === undefined ? 'Фотографію видалено' : "Помилка сервера: " + data.message, 7000); // Результат реєстрації (наприклад, токен)
        })
        .catch(error => {
            // Обробка помилки
            showMessage(`Помилка при видаленні: Неможливо з'єднатися з сервером`, 3000);
            console.error('Error updating offer:', error);
        });
}

export function deletePriceCard(index) {
    const url = `${serverApi}/api/priceCards/deletePriceCard`
    const formData = new FormData();

    formData.append('id', index)

    fetch(url, {
        method: 'DELETE',
        // headers: {
        //     'Authorization': `Bearer ${token}`
        // },
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Обробка успішного оновлення
            showMessage(data.message === undefined ? 'Картка видалена' : "Повідомлення з сервера: " + data.message, 7000); // Результат реєстрації (наприклад, токен)
        })
        .catch(error => {
            // Обробка помилки
            showMessage(`Помилка при видаленні: Неможливо з'єднатися з сервером`, 5000);
            console.error('Error updating offer:', error);
        });
}

export function deleteCalendarDay(date) {
    const url = `${serverApi}/api/calendar/deleteCalendarDay`;
    const formData = new FormData();
    formData.append('date', date)

    fetch(url, {
        method: 'DELETE',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Обробка успішного оновлення
            showMessage(data.message === undefined ? 'Запис календаря видалений' : "Повідомлення з сервера: " + data.message, 7000); // Результат реєстрації (наприклад, токен)
        })
        .catch(error => {
            // Обробка помилки
            showMessage(`Помилка при видаленні: Неможливо з'єднатися з сервером`, 5000);
            console.error('Error updating offer:', error);
        });
}

