import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <a>Новости</a>
            </div>
            <div className={s.item}>
                <a>Музыка</a>
            </div>
            <div className={s.item}>
                <a>Настройки</a>
            </div>
            <div className={s.itemTest}>
                <NavLink to="/users" >(временно) Пользователи</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;