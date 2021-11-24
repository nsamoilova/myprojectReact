import React from 'react';
import styles from './style.module.scss'
import Form from './components/Form';
import Todo from './components/Todo';
import MemoShould from './components/MemoShould';
import SmallImage from 'components/Image/versions/SmallImage';
import backgroundImage from 'images/vimeo.svg';
import PrevienImages from 'components/Image/versions/PrevienImages';
import FunctionalComponent from './components/FunctionalComponent';
import TodoFunc from './components/Todo/components/TodoFunc';
import Users from './components/Users';
import FormConnected from './components/FormConnected';

class Content extends React.Component {
    render() {
        return (
            <div className={styles.content}>
               {/* <SmallImage src={backgroundImage} />
              <PrevienImages src={backgroundImage} /> */}
              {/* <FunctionalComponent title='hello' />  */}
            {/* <TodoFunc /> */}
            {/* <Users /> */}
            <FormConnected />
              
            </div>
        )
    }
}

export default Content;