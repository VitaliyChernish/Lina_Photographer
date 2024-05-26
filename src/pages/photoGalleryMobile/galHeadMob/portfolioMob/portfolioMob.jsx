import React, { useEffect, useState } from "react";
import s from './portfolioMob.module.scss';
import GalleryRightMobile from "./galleryRight/GalleryRightMobile";
import { getAllPhotoGallery } from "../../../../adminPanel/utils/functions/get";
import { useDispatch } from "react-redux";
import { selectedPage } from "../../../../adminPanel/store/slices/mobileNavigationSlice";

const PortfolioMobile = () => {
    const[photoGalleryData, setPhotoGalleryData] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        getAllPhotoGallery(setPhotoGalleryData)
        dispatch(selectedPage(window.location.pathname))
    },[])

    return (
        <div className={s.portfolio}>
            <div className={s.container}>
                <main className={s.gallery}>
                    <GalleryRightMobile galleryData={photoGalleryData} />
                </main>
            </div>
        </div>
    )
}

export default PortfolioMobile;