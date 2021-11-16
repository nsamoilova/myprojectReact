import React from 'react';
import styles from './style.module.scss'
import Form from './components/Form';
import Todo from './components/Todo';
import FormRecording from './components/FormRecording';
import MemoShould from './components/MemoShould';

class Content extends React.Component {
    render() {
        return (
            <div className={styles.content}>
               
               {/* <Todo /> */}
               <MemoShould/>
              
            </div>
        )
    }
}

export default Content;