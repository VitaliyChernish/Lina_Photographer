import React, { useEffect, useRef, useState } from "react";
import s from './portfolio.module.scss';
import GalleryLeft from "./GalleryLeft";
import GalleryRight from "./GalleryRight";
import { getAllPhotoGallery } from "../../../../adminPanel/utils/functions/get";

const Portfolio = ({ y, y1, motion }) => {
    const[photoGalleryData, setPhotoGalleryData] = useState([])

    useEffect(() => {
        getAllPhotoGallery(setPhotoGalleryData)
    },[])

    return (
        <div className={s.portfolio}>
            <div className={s.container}>
                <main className={s.gallery}>
                    <GalleryLeft y={y1} motion={motion} />
                    <GalleryRight galleryData={photoGalleryData} y={y} motion={motion} />
                </main>
            </div>
        </div>
    )
}

export default Portfolio;
