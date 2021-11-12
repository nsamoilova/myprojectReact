import React from 'react';
import styles from './style.module.scss'
import Form from './components/Form';
import Todo from './components/Todo';
import FormRecording from './components/FormRecording'

class Content extends React.Component {
    render() {
        return (
            <div className={styles.content}>
               {/* <Form />
               <Todo /> */}
               <FormRecording />
            </div>
        )
    }
}

export default Content;