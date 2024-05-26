import React from "react";
import s from './contentEditor.module.scss'
import EditedElements from "./editedElements/EditedElements";
import GeneralEditableElements from "./generalEditedElems/GeneralEditedElements";

const ContentEditor = () => {

    return (
        <section className={s.wrapper}>
            <div className={s.header}>
                <h2>Edit content</h2>
            </div>
            <div className={s.mainContainer}>
                <GeneralEditableElements />
                <EditedElements />
            </div>
        </section>
    )
}

export default ContentEditor;