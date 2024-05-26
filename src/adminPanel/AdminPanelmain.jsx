import React, { useEffect, useState } from "react";
import s from './admin.module.scss';
import './main.scss'
import MenuLeft from "./menuLeft/MenuLeft";
import TopContent from "./topContent/TopContent";
import Cards from "./cards/CardsMain";
import MainBody from "./mainBody/MainBody";
import UsersManage from "./usersManage/UsersManage";
import TaskPlaneer from "./tasksPlaneer/TasksPlaneer";
import ContentEditor from "./contentEditor/ContentEditor";
import { Provider } from 'react-redux';
import { store } from "./store/store";

const AdminPanelMain = () => {

    const [page, setPage] = useState('stats')


    useEffect(() => {
        const changeElem = document.getElementById('changeMainContenFromAdminPanel')
        changeElem.style.animation = 'toggleMainBodyContentRender .5s'
    }, [page])

    const render = (page) => {

        switch (page) {
            case 'stats':
                return <MainBody />
            case 'users':
                return <UsersManage />
            case 'planeer':
                return <TaskPlaneer />
            case 'editContent':
                return <ContentEditor />
            default:
                return <MainBody />
        }
    }

    return (
        <Provider store={store}>
            <aside className={s.adminMainScreen} >
                <div className={s.wrapper}>
                    <MenuLeft setPage={setPage} /> {/*stats, users, planeer, editContent*/}
                    <main className={s.backgroundLayer}>
                        <div className={s.contentLayer}>
                            <TopContent />
                            <Cards />
                            <div id="changeMainContenFromAdminPanel">
                                {render(page)}
                            </div>
                        </div>
                    </main>
                </div>
            </aside>
        </Provider>
    )
}

export default AdminPanelMain