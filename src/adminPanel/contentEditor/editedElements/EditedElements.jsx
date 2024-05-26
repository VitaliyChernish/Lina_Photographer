import React, { useEffect, useState, useRef } from "react";
import s from './editedElem.module.scss'
import PriceCardsForm from "../forms/priceCardsForm";
import PhotoGalleryForm from "../forms/photoGalleryForm";
import MenuElement from "./MenuElement";
import { getAllPhotoGallery, getAllPriceCard } from "../../utils/functions/get";
import CreateGalleryButton from "../../widgets/createButton/CreateGalleryButton";
import CreateCardPriceButton from "../../widgets/createButton/CreatePriceCardButton";
import AddNewPhotoGalleryForm from "../forms/addNewPhotoGalleryForm";
import AddNewPriceCardsForm from '../forms/addNewPriceCardsForm'

//redux
import { useSelector } from "react-redux";
//redux

const EditedElements = () => {
    //redux
    const galleryes = useSelector(state => state.photoGallery.galleryes)
    const cards = useSelector(state => state.priceCards.priceCards)
    //redux

    const [toggleContent, setToggleContent] = useState('PriceCardsForm')

    const [toggleList, setToggleList] = useState(false)
    const [togglePhotoList, setTogglePhotoList] = useState(false)
    const [trigger, setTrigger] = useState(0)
    const [triggerPrice, setTriggerPrice] = useState(0)

    const [photoGalleryData, setPhotoGalleryData] = useState([])
    const [priceData, setPriceData] = useState([])
    const [gallerySelected, setGallerySelected] = useState({})
    const [cardSelect, setCardSelected] = useState({})
    const [myRef, setMyRef] = useState(null)

    const toggleContentFunc = (toggleContent) => {
        switch (toggleContent) {
            case 'PriceCardsForm': {
                return cardSelect.name && <PriceCardsForm trigger={triggerPrice} setTrigger={setTriggerPrice} cardSelected={cardSelect} />
            } case 'PhotoGalleryForm': {
                return gallerySelected.name && <div key={gallerySelected.name}><PhotoGalleryForm trigger={trigger} setTrigger={setTrigger} cardSelected={gallerySelected} /></div>
            } case 'AddNewPhotoGalleryForm': {
                return <AddNewPhotoGalleryForm setTrigger={setTrigger} trigger={trigger} />
            } case 'AddNewPriceCardsForm': {
                return <AddNewPriceCardsForm trigger={triggerPrice} setTrigger={setTriggerPrice} cardSelected={cardSelect} />
            } default: {
                return ''
            }
        }
    }

    useEffect(() => {
        galleryes.length !== 0 && setToggleContent('AddNewPhotoGalleryForm')
    }, [galleryes])
    useEffect(() => {
        cards.length !== 0 && setToggleContent('AddNewPriceCardsForm')
    }, [cards])

    useEffect(() => {
        console.log('trigger: ', trigger);
        getPhotosAndRefresh()
    }, [trigger])

    useEffect(() => {
        console.log('triggerPrice: ', triggerPrice);
        getPricesAndRefresh()
    }, [triggerPrice])

    const editPhotoContent = (e, i) => {
        setGallerySelected(photoGalleryData[i])
        setToggleContent('PhotoGalleryForm')
    }

    const editContent = (e, i) => {
        setCardSelected(priceData[i])
        setToggleContent('PriceCardsForm')
    }

    const getPhotosAndRefresh = async () => {
        const myPromise = new Promise((res, rej) => {
            getAllPhotoGallery(setPhotoGalleryData)
            res(gallerySelected)
        })
        if (myRef && gallerySelected) {
            myPromise.then((value) => {
                setTimeout(() => {
                    myRef.click()
                }, 500)
            })
        }
    }

    const getPricesAndRefresh = () => {
        const myPromise = new Promise((res, rej) => {
            getAllPriceCard(setPriceData)
            res(gallerySelected)
        })
        if (myRef && gallerySelected) {
            myPromise.then((value) => {
                setTimeout(() => {
                    myRef.click()
                }, 500)
            })
        }
    }

    const openSubMenu = () => {
        const element = document.getElementById('arrowMenu')
        setToggleList(!toggleList)
        if (toggleList) {
            element.style.transform = `rotate(0deg)`
        } else if (!toggleList) {
            element.style.transform = `rotate(90deg)`
        }
    }

    const openPhotoList = () => {
        const element = document.getElementById('arrowPhotoMenu')
        setTogglePhotoList(!togglePhotoList)
        if (togglePhotoList) {
            element.style.transform = `rotate(0deg)`
        } else if (!togglePhotoList) {
            element.style.transform = `rotate(90deg)`
        }
    }

    return (
        <div className={s.editedElements}>
            <div className={s.elementsList}>
                <MenuElement
                    setMyRef={setMyRef}
                    openSubMenu={openSubMenu}
                    header={'КАРТКИ ПОСЛУГ'}
                    toggleList={toggleList}
                    cardData={priceData}
                    editContent={editContent}
                    arrowId={`arrowMenu`}
                    SomeComponent={CreateCardPriceButton} />
                <MenuElement
                    setMyRef={setMyRef}
                    openSubMenu={openPhotoList}
                    header={'ФОТО ГАЛЕРЕЯ'}
                    toggleList={togglePhotoList}
                    cardData={photoGalleryData}
                    editContent={editPhotoContent}
                    arrowId={`arrowPhotoMenu`}
                    SomeComponent={CreateGalleryButton} />
            </div>
            <div key={trigger} className={s.editableElement}>
                {toggleContentFunc(toggleContent)}
            </div>
        </div>
    )
}

export default EditedElements