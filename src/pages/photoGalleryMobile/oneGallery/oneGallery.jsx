import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAllPhotoGallery } from "../../../adminPanel/utils/functions/get";
import { serverApi } from "../../../adminPanel/utils/consts";
import s from './oneGallery.module.scss';
import ScrollToTop from "../../../widgets/scrollToTop/ScrollToTop";

const OneMobileGallery = () => {
    const [sliderData, setSliderData] = useState([])
    const [justImage, setJustImage] = useState([])
    const [choicedImage, setChoicedImage] = useState('')
    const [selectedData, setSelectedData] = useState()

    // const arr = [oksana, kostya]
    const { title } = useParams()

    useEffect(() => {
        getAllPhotoGallery(setSliderData)
    }, [])

    const getValues = (sliderData) => {
        if (sliderData) {
            setSelectedData(sliderData)
            setChoicedImage(`${serverApi}/static/${sliderData.photos[0].filename}`)
            return setJustImage(sliderData.photos)
        }
    }

    useEffect(() => {
        getValues(sliderData[title])
    }, [sliderData])

    const choiceImage = () => {
        const photo = document.getElementById('photoImageForMountCompinent')
        const mobilePhotoDescription = document.getElementById('mobilePhotoDescription')
        const content = document.getElementById('photoContent')
        const contentDescription = document.getElementById('contentDescription')
        const wrapper = document.getElementById('wrapperOfOneMobileGallery')
        photo.style.animation = 'mountSlider 1.5s'

        setTimeout(() => {
            const height = photo.offsetHeight
            const percentOfScreen = height / window.innerHeight * 100
            console.log('percentOfScreen: ', percentOfScreen);
            if (percentOfScreen <= 50) {
                photo.style.setProperty('--top-value', '0vh')
                contentDescription.style.setProperty('--top-value3', `${height}px`);
                mobilePhotoDescription.style.setProperty('--top-value4', `7vh`);
                content.style.setProperty('--top-content', '25vh');
            } else {
                if (window.innerHeight / window.innerWidth >= 1.9) {
                    photo.style.setProperty('--top-wrapper', '0vh')
                    content.style.setProperty('--top-content', '15vh');
                    wrapper.style.setProperty('--height-wrapper', '100vh')
                    mobilePhotoDescription.style.setProperty('--top-value4', `30vh`);
                } else {
                    mobilePhotoDescription.style.setProperty('--top-value4', `5vh`);
                    photo.style.setProperty('--top-value', '-25vh')
                    content.style.setProperty('--top-content', percentOfScreen <= 50 ? '15vh' : '-5vh');
                }
                contentDescription.style.setProperty('--top-value3', `${height - (window.innerHeight / 100 * 25)}px`);
            }
        }, 100)
    }

    useEffect(() => {
        choicedImage && choiceImage()
    }, [choicedImage])

    const mainImage = (e, element) => {
        const elements = document.querySelectorAll('#oneOfMobileGalleryElement')
        elements.forEach((el, i) => {
            el.style.filter = 'brightness(.5) grayscale(1)'
        })
        e.target.style.filter = 'brightness(1) grayscale(0)'
        setChoicedImage(`${serverApi}/static/${element.filename}`)
    }

    return (
        <div id="wrapperOfOneMobileGallery" className={s.wrapper}>
            <ScrollToTop />
            <div id="photoImageForMountCompinent" className={s.photoImage}>
                <img src={choicedImage} alt="photo_image" />
            </div>

            {selectedData &&
                <div id="contentDescription" className={s.contentDescription}>
                    <h2>{selectedData.name}</h2>
                    <div id="mobilePhotoDescription" className={s.photoDescription}>
                        <p>{selectedData.description}</p>
                        <p>{selectedData.optionDescription}</p>
                    </div>
                </div>
            }
            <div id="photoContent" className={s.items} >
                <div className={s.sliderImages}
                    style={{
                        width: `${justImage.length * 30}vw`,
                        left: `${((justImage.length * 30) - 100) / 2}vw`,
                    }}
                >
                    {justImage.map((el, i) => {
                        return (
                            <div id="oneOfMobileGalleryElement" key={i} 
                            onClick={(e) => mainImage(e, el)} 
                            className={s.item} 
                            style={{ backgroundImage: `url(${serverApi}/static/${el.filename})` }}>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OneMobileGallery;