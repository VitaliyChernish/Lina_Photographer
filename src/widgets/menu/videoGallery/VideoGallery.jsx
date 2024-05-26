import React, {useRef} from "react";
import s from './videogallery.module.scss'
import { Link } from "react-router-dom";

const VideoGallery = () => {
    const btnRef1 = useRef()

    const btnClick = () => {

        setTimeout(() => {
            btnRef1.current.click()   
        }, 0)

    }
    return (
        <>
            <div onClick={btnClick} className={s.videoMain}>
                VideoGallery
            </div>
            <Link ref={btnRef1} to='/videoGallery'></Link>
        </>
    )
}

export default VideoGallery