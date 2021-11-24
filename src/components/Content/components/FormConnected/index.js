import React , {useState}from 'react';
import styles from './style.module.scss';
import axios  from "axios";
import LeftSideForm from './components/LeftSideForm';
import RightSideForm from './components/RightSideForm';

const UsersContext = React.createContext();

const FormConnected = () => {
    
        const [value, setValue] = useState('default');
        const { Provider } = UsersContext;
    
        const onChangeInput = (value) => {
            setValue(value)
        }



    return (
        <div className={styles.form}>
        <Provider value={{ value, onChangeInput}}>
            <LeftSideForm />
            <RightSideForm />
        </Provider>
        </div>
    )
}

export {
    UsersContext
}

export default FormConnected;