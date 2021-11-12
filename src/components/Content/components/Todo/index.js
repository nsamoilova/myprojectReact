import React from 'react';
import TodoItem from './components/TodoItem';
import styles from './style.module.scss';
import Input from 'components/Form/Input'
import Button from 'components/Form/Button'

class Todo extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {id: 1, title: 'Cходить на работу'},
                {id: 2, title: 'Подать экстренное извещение'},
                {id: 3, title: 'Сделать приказ на школу'},
                {id: 4, title: 'Повторить всё перед собесом'},
                {id: 5, title: 'Составить диалог по инглишу'},
                {id: 6, title: 'Пройти собес'},
            ],

            text: '',
        }
    }

    onRemoveHandler = (item) => {
        const newItems = this.state.todos.filter(todo => todo.id !== item);
        this.setState({
            todos:newItems
        })
    }

    onAddHandler = () => {
        this.setState({

        })
    }

    onInputAddHandler = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onClickButtonHandler = (item) => {
       const newItem = {
           id: Math.round(Math.random() * 100),
           title: this.state.text
       }

       const copy = [...this.state.todos];
       copy.push(newItem)

         this.setState({
             todos: copy
         })

      };

    render() {
        return(
             
            <div className={styles.content}>
                    <Input onChange={this.onInputAddHandler}/>
                    <Button onClick={this.onClickButtonHandler}>Add</Button>


                {this.state.todos.map(item => (
                    <TodoItem 
                    id={item.id}
                    title={item.title} 
                    onRemove={this.onRemoveHandler}/>
                ))}
            </div>
        )
    }
}

export default Todo;