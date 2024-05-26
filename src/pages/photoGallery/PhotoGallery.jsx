import React, { useEffect, useState } from "react";
import './null.scss'
import Main from "./components/main/Main";
import SplitType from 'split-type';
import { gsap } from 'gsap';
import s from './photogallery.module.scss'
// import ScrollToTop from "../../widgets/scrollToTop/ScrollToTop";
import PagesNavigations from "../../widgets/menuForPhotoGallery/PagesNavigations";

//redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { whatSide } from '../../adminPanel/store/slices/swipeSideSlice'
//redux

const btnsArr = [
  { name: 'Головна', },
  { name: 'Послуги' },
  { name: 'Умови' }
]

const PhotoGallery = () => {
  //redux
  const dispatch = useDispatch()
  const choicedSideSide = useSelector(state => state.side.side)
  //redux


  useEffect(() => {
    const splitTypes = document.querySelectorAll('#texts')

    const content = document.getElementById('content')
    const mainGalleryImage = document.getElementById('heroSectionImage')

    if (window.innerWidth <= 850) {
      if (choicedSideSide === 'right') {
        content.style.animation = 'mountPhotoGalleryMobileRight .5s'
        mainGalleryImage.style.animation = 'mountPhotoGalleryMobileRight .5s'
      } else if (choicedSideSide === 'left') {
        content.style.animation = 'mountPhotoGalleryMobileLeft .5s'
        mainGalleryImage.style.animation = 'mountPhotoGalleryMobileLeft .5s'
      }

    }

    if (window.innerWidth > 850) {
      content.style.animation = 'mountPhotoGallery .5s'
      mainGalleryImage.style.animation = 'mountPhotoGalleryImage .5s'
    }

    splitTypes.forEach((char) => {

      const text = new SplitType(char, { types: 'chars' })
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1
      })
    })
  }, [])

  //swipe control start
  const [startX, setStartX] = useState(0);
  const [swipe, setSwipe] = useState('')

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX)
  };

  const handleTouchEnd = (event) => {
    const endX = event.changedTouches[0].clientX;

    //left and right swipe start
    if (startX > endX && startX - endX >= 100) {
      // console.log('left');
      setTimeout(() => {
        setSwipe('left')
      }, 0)
    } else if (startX < endX && endX - startX >= 100) {
      // console.log('right');
      setTimeout(() => {
        setSwipe('right')
      }, 0)
    }
    //left and right swipe end
  };

  useEffect(() => {
    if (swipe === 'left') {
      const wrapperElement = document.getElementById('content')
      wrapperElement.style.animation = 'swipeLeft .5s'
      dispatch(whatSide('left'))
      setTimeout(() => {
        const nawigateButton = document.getElementById('pricelistForSwipeId')
        nawigateButton.click()
      }, 500)
    }
    if (swipe === 'right') {
      dispatch(whatSide('right'))
      const wrapperElement = document.getElementById('content')
      wrapperElement.style.animation = 'swipeRight .5s'
      setTimeout(() => {
        const nawigateButton = document.getElementById('mainPageForSwipeId')
        nawigateButton.click()
      }, 500)
    }
  }, [swipe])

  //swipe control end

  return (
    <>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={s.photoGalleryMain}
        id='content'>
        {window.innerWidth >= 850
          && <div className={s.navigations}>
            <PagesNavigations btnsArr={btnsArr} page1={''} page2={'pricelist'} page3={'conditions'} />
          </div>}
        <Main />
      </div>
    </>
  )
}

export default PhotoGallery;