import { serverApi } from "../consts";

export function getAllPriceCard(setPriceCardData) {
  fetch(`${serverApi}/api/priceCards/getAllPriceCard`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(elems => {
      setPriceCardData(elems);
    })
    .catch(error => console.error(error));
}

export function getAllPhotoGallery(setPhotoGalleryData) {
  fetch(`${serverApi}/api/photoGallery/getAllPhotoGallery`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(elems => {
      setPhotoGalleryData(elems);
    })
    .catch(error => console.error(error));
}

export function getAllCalendarData(setCalendarData) {
  fetch(`${serverApi}/api/calendar/getAllCalendar`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(elems => {
      setCalendarData(elems);
    })
    .catch(error => console.error(error));
}

export function getOneMarkup(setMarkupData) {
  const url = `${serverApi}/api/markup/getOneMarkup/:1`;
  fetch(url, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // }
  })
    .then(response => response.json())
    .then(elems => {
      setMarkupData(elems)
    })
    .catch(error => console.error(error))
}

export function getOneDiscount(setDiscount) {
  const url = `${serverApi}/api/discount/getOneDiscount/:1`;
  fetch(url, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // }
  })
    .then(response => response.json())
    .then(elems => {
      setDiscount(elems)
    })
    .catch(error => console.error(error))
}

export function getOneDiscountCard(setDiscountCard) {
  const url = `${serverApi}/api/discountCard/getOneDiscountCard/:1`;
  fetch(url, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // }
  })
    .then(response => response.json())
    .then(elems => {
      setDiscountCard(elems)
    })
    .catch(error => console.error(error))
}

export function getOneUser(setUser, id){
  const url = `${serverApi}/api/user/getOneUser/${id}`
  fetch(url, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // }
  })
    .then(response => response.json())
    .then(elems => {
      setUser(elems)
    })
    .catch(error => console.error(error))
}