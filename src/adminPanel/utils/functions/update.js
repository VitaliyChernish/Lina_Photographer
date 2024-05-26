import { serverApi } from "../consts";
import { showMessage } from "./functions";

export function updatePriceCard() {
    const url = `${serverApi}/api/priceCards/updatePriceCard`
    const formData = new FormData();
    const arr = Array.from(arguments)

    // const token = parseData('token')

    arr.forEach(el => {
        const arrKeys = Object.keys(el)
        const arrValues = Object.values(el)
        arrKeys.map((el, i) => formData.append([el], arrValues[i]))
    })

    fetch(url, {
        method: 'POST',
        // headers: {
        //     'Authorization': `Bearer ${token}`
        // },
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Обробка успішного оновлення
            showMessage(data.message === undefined ? 'Апдейт успішний' : "Помилка сервера: " + data.message, 7000); // Результат реєстрації (наприклад, токен)
        })
        .catch(error => {
            // Обробка помилки
            showMessage(`Помилка при оновленні: Неможливо з'єднатися з сервером`, 3000);
            console.error('Error updating offer:', error);
        });
}

// export function updatePhotoGallery() {
//     const url = `${serverApi}/api/photoGallery/updatePhotoGallery`
//     const formData = new FormData();
//     const arr = Array.from(arguments)

//     // const token = parseData('token')

//     arr.forEach(el => {
//         const arrKeys = Object.keys(el)
//         const arrValues = Object.values(el)
//         arrKeys.map((el, i) => formData.append([el], arrValues[i]))
//     })

//     fetch(url, {
//         method: 'POST',
//         // headers: {
//         //     'Authorization': `Bearer ${token}`
//         // },
//         body: formData
//     })
//         .then(response => response.json())
//         .then(data => {
//             // Обробка успішного оновлення
//             showMessage(data.message === undefined ? 'Апдейт успішний' : "Помилка сервера: " + data.message, 7000); // Результат реєстрації (наприклад, токен)
//         })
//         .catch(error => {
//             // Обробка помилки
//             showMessage(`Помилка при оновленні: Неможливо з'єднатися з сервером`, 3000);
//             console.error('Error updating offer:', error);
//         });
// }

export function updatePhotoGallery() {
    const url = `${serverApi}/api/photoGallery/updatePhotoGallery`;
    const formData = new FormData();
    const arr = Array.from(arguments);

    arr.forEach(el => {
        const arrKeys = Object.keys(el);
        const arrValues = Object.values(el);

        arrKeys.forEach((key, i) => {
            formData.append(key, arrValues[i]);
        });
    });

    fetch(url, {
        method: 'POST',
        // headers: {
        //     'Authorization': `Bearer ${token}`
        // },
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Обробка успішного оновлення
            showMessage(data.message === undefined ? 'Апдейт успішний' : "Помилка сервера: " + data.message, 7000); // Результат реєстрації (наприклад, токен)
        })
        .catch(error => {
            // Обробка помилки
            showMessage(`Помилка при оновленні: Неможливо з'єднатися з сервером`, 3000);
            console.error('Error updating offer:', error);
        });
}


export function updatePhotosForGallery(photoGalleryId, photoId, photo) {
    const url = `${serverApi}/api/photoForGallery/updatePhotosForGallery`;
    const formData = new FormData();
    // const arr = Array.from(arguments);

    console.log('photoGalleryId from updatePhotosForGallery: ', photoGalleryId);
    console.log('photo from updatePhotosForGallery: ', photo);

    formData.append('id', photoId)
    formData.append('photoGalleryId', photoGalleryId);
    formData.append('newPhoto', photo)

    // arr.forEach(el => {
    //     const arrKeys = Object.keys(el);
    //     const arrValues = Object.values(el);

    //     arrKeys.forEach((key, i) => {
    //         formData.append(key, arrValues[i]);
    //     });
    // });

    fetch(url, {
        method: 'POST',
        // headers: {
        //     'Authorization': `Bearer ${token}`
        // },
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Обробка успішного оновлення
            showMessage(data.message === undefined ? 'Апдейт успішний' : "Помилка сервера: " + data.message, 7000); // Результат реєстрації (наприклад, токен)
        })
        .catch(error => {
            // Обробка помилки
            showMessage(`Помилка при оновленні: Неможливо з'єднатися з сервером`, 3000);
            console.error('Error updating offer:', error);
        });
}

export function editMarkup(value, togglePosition) {
    const url = `${serverApi}/api/markup/updateMarkup`;
    const formData = new FormData();
    formData.append('index', 1)
    value && formData.append('murkupValue', value)
    formData.append('toggler', togglePosition)

    fetch(url, {
        method: 'PATCH',
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

export function editDiscount(value, togglePosition) {
    const url = `${serverApi}/api/discount/updateDiscount`;
    const formData = new FormData();
    formData.append('index', 1)
    value && formData.append('murkupValue', value)
    formData.append('toggler', togglePosition)

    fetch(url, {
        method: 'PATCH',
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

export function editDiscountCard(value, togglePosition) {
    const url = `${serverApi}/api/discountCard/updateDiscountCard`;
    const formData = new FormData();
    formData.append('index', 1)
    value && formData.append('murkupValue', value)
    formData.append('toggler', togglePosition)

    fetch(url, {
        method: 'PATCH',
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
