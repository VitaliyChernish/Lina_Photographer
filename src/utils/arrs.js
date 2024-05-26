import {  mainPageIcon, galleryIcon, priceIcon, calendarIcon } from "./consts"

export const mobileButtons = [
    {
        name: 'Головна', link: '/', id: 'mainPageForSwipeId', blockId: 'mainBlockPageForSwipeId',
        icon: mainPageIcon
    },
    {
        name: 'Галерея', link: '/photoGallery', id: 'galleryForSwipeId', blockId: 'galleryBlocForSwipeId',
        icon: galleryIcon
    },
    {
        name: 'Послуги', link: '/pricelist', id: 'pricelistForSwipeId', blockId: 'pricelistBlocForSwipeId',
        icon: priceIcon
    },
    {
        name: 'Календар', link: '/calendar', id: 'conditionsForSwipeId', blockId: 'conditionsBlocForSwipeId',
        icon: calendarIcon
    },
]