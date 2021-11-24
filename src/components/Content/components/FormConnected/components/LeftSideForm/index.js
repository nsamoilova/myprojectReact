import React, {memo,useState,useContext } from "react";
import Input from 'components/Form/Input';
import styles from './style.module.scss'
import axios  from "axios";
import {UsersContext} from '../../index'




const LeftSideForm = () => {
  
    const { onChangeInput } = useContext(UsersContext);

    const onChangeHandler = (value) => {
        onChangeInput(value)
    }

    return (
        <div className={styles.form}>
           
            <Input onChange={onChangeHandler}/>
           
        </div>
    )
}



export default LeftSideForm;