import React from "react";
import s from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/ifNoAvatar2.jpg'

let Users = (props) => {
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
        // props.setUsers([
        //         {
        //             id: 1,
        //             photoUrl: 'https://i.pinimg.com/originals/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
        //             followed: false,
        //             fullName: 'Dionis',
        //             status: 'I am a developer',
        //             location: {city: 'Tiraspol', country: 'Moldova'}
        //         },
        //         {
        //             id: 2,
        //             photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
        //             followed: true,
        //             fullName: 'Alexandr',
        //             status: 'I am a developer too, but with bigger exp',
        //             location: {city: 'Tiraspol', country: 'Moldova'}
        //         },
        //         {
        //             id: 3,
        //             photoUrl: 'http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg',
        //             followed: false,
        //             fullName: 'Sergey',
        //             status: 'I am a moldavian developer',
        //             location: {city: 'Homespace', country: 'Abstract universe'}
        //         },
        //         {
        //             id: 4,
        //             photoUrl: 'https://papik.pro/uploads/posts/2021-09/1631762381_7-papik-pro-p-prikolnie-avatarki-risunki-7.jpg',
        //             followed: true,
        //             fullName: 'Ivan',
        //             status: 'I am not a developer, but Im also here',
        //             location: {city: 'Hamburg', country: 'Germany'}
        //         },
        //     ]
        // )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Отписаться</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Подписаться</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                {/*<span>*/}
                {/*    <div>{'u.location.country'}</div>*/}
                {/*    <div>{'u.location.city'}</div>*/}
                {/*</span>*/}
            </span>
            </div>)
        }
    </div>
}

export default Users