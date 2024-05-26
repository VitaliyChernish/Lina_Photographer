// import { showMessage } from "./functions";
import { serverApi } from "../consts";
import { showMessage } from "./functions";
import { getAllPhotoGallery } from "./get";

export function createEditableElements(editableElem, editable) {
    //створення таблиці з елементами які будуть редагуватись
    const url = `${serverApi}/api/editableElement/createEditableElem`
    const formData = new FormData();
    formData.append('editableElementName', editableElem)
    formData.append('editable', editable)

    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.message === undefined ? 'Створення успішне' : "Помилка сервера: " + data.message, 7000);
        })
        .catch(error => {
            console.log(`Помилка при створенні: Неможливо з'єднатися з сервером`, 3000);
            console.error('Error updating offer:', error);
        });
}

export function createPriceCard() {
    const url = `${serverApi}/api/priceCards/createPriceCard`
    const formData = new FormData();
    const arr = Array.from(arguments)

    if (arr[1].name === '') {
        return showMessage(`Поле "ім'я" обов'язкове для заповнення`, 6000)
    } else {
        arr.forEach(el => {
            const arrKeys = Object.keys(el)
            const arrValues = Object.values(el)

            formData.append(arrKeys, arrValues)
        })

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                // Обробка успішного оновлення
                showMessage(data.message === undefined ? 'Створення успішне' : "Помилка сервера: " + data.message, 7000); // Результат реєстрації (наприклад, токен)
            })
            .catch(error => {
                // Обробка помилки
                showMessage(`Помилка при створенні: Неможливо з'єднатися з сервером`, 5000);
                console.error('Error updating offer:', error);
            });
    }
    
}

//try
export function createPhotoGallery(data) {
    const url = `${serverApi}/api/photoGallery/createPhotoGallery`;
    const formData = new FormData();

    formData.append('index', data.index)
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('optionDescription', data.optionDescription);

    const photosArr = [...data.photos]

    // Додавання фотографій до formData
    photosArr.forEach(photo => {
        formData.append('photos', photo);
    });

    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Обробка успішного створення галереї
            showMessage(data.message === undefined ? 'Створення успішне' : "Помилка сервера: " + data.message, 7000);
        })
        .catch(error => {
            // Обробка помилки
            showMessage(`Помилка при створенні: Неможливо з'єднатися з сервером`, 3000);
            console.error('Помилка при створенні галереї:', error);
        });
}
//try


export function addPhotoForGallery(photo, photoGalleryId) {
    const url = `${serverApi}/api/photoForGallery/addPhotoForGallery`;
    const formData = new FormData();
    formData.append('photoGalleryId', photoGalleryId)
    formData.append('addPhoto', photo)

    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Обробка успішного створення галереї
            showMessage(data.message === undefined ? 'Створення успішне' : "Помилка сервера: " + data.message, 7000);
        })
        .catch(error => {
            // Обробка помилки
            showMessage(`Помилка при створенні: Неможливо з'єднатися з сервером`, 3000);
            console.error('Помилка при створенні галереї:', error);
        });
}

export function createCustomer() {
    const url = `${serverApi}/api/user/registration`;
    const formData = new FormData();
    const arr = Array.from(arguments)

    arr.forEach((el) => {
        const arrKeys = Object.keys(el)
        const arrValues = Object.values(el)
        arrKeys.map((el, i) => {
            return formData.append([el], arrValues[i])
        })

    })

    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Обробка успішного створення галереї
            showMessage(data.message === undefined ? `Дякую, найближчим часом зв'яжусь із вами` : "Помилка сервера: " + data.message, 3000);
        })
        .catch(error => {
            // Обробка помилки
            showMessage(`Помилка при створенні: Неможливо з'єднатися з сервером`, 3000);
            console.error('Помилка при створенні галереї:', error);
        });
}

export function createCalendar(date) {
    const url = `${serverApi}/api/calendar/createCalendar`;
    const formData = new FormData();

    formData.append('date', date)
    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Обробка успішного створення галереї
            showMessage(data.message === undefined ? `Календар створено` : "Помилка сервера: " + data.message, 3000);
        })
        .catch(error => {
            // Обробка помилки
            showMessage(`Помилка при створенні: Неможливо з'єднатися з сервером`, 3000);
            console.error('Помилка при створенні галереї:', error);
        });
}