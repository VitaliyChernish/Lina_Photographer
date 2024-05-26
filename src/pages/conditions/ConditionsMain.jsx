import React from "react";
import PagesNavigations from "../../widgets/menuForPhotoGallery/PagesNavigations";

const btnsArr =[
    {name: 'sad'}
]

const ConditionsMain = () => {
    return (
        <>
            <PagesNavigations btnsArr={btnsArr} page1={''} page2={''} page3={''} />
            <h1>Conditions</h1>
        </>
    )
}

export default ConditionsMain;