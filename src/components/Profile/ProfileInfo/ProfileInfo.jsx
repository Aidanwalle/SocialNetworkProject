import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                {/*<img*/}
                {/*    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt='изображение'/>*/}
            </div>
            <div className={s.descriptionBlock}>
                <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg' alt='аватар'/>
                <div>Дионис Сердюков</div>
            </div>
        </div>
    )
}

export default ProfileInfo;