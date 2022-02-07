import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                {/*<img*/}
                {/*    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt='изображение'/>*/}
            </div>
            <div className={s.descriptionBlock}>
                {/*<img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg' alt='аватар'/>*/}
                <img src={props.profile.photos.large}/>
                <div>{`Имя пользователя: ${props.profile.fullName}`}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.contacts.youtube}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;