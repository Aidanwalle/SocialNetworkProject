import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>

            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={newPostElement}
                              placeholder='Введите сообщение' value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ onAddPost }>Опубликовать запись</button>
                </div>
            </div>
            <h3>Мои сообщения</h3>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;