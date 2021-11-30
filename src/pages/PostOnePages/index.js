import React, {useEffect, useState} from 'react';
import {  Outlet,Link } from 'react-router-dom';
import styles from './style.module.scss'



const PostOnePages = () => {

    const [post, setPost] = useState({
        post: []
      });

      useEffect(() => {
        console.log("post 1");
        fetch("https://jsonplaceholder.typicode.com/posts/1" )
        .then(response => response.json())
        .then(json => console.log(json))
      }, [post]);
   

    return(
        
        <div className={styles.postitem}>
            {post.post.map(item => {
            <h2 className={styles.title}>Post 1</h2>
            })}
            <Link to="comment" className={styles.comment}>Comment</Link>
            
            <Outlet />
        </div>
    )
}

export default PostOnePages;