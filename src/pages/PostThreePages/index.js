import React from 'react';
import {  Outlet,Link } from 'react-router-dom';
import styles from './style.module.scss'



const PostThreePages = () => {
    return(
        <div className={styles.postitem}>
            <h2 className={styles.title}>Post 3</h2>
            <Link to="comment" className={styles.comment}>Comment</Link>
           
            <Outlet />
        </div>
    )
}

export default PostThreePages;