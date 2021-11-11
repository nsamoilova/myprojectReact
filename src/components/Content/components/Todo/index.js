import React from 'react';
import TodoItem from './components/TodoItem';
import styles from './style.module.scss'

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
            ]
        }
    }

    onRemoveHandler = (item) => {
        const newItems = this.state.todos.filter(todo => todo.id !== item);
        this.setState({
            todos:newItems
        })
    }

    render() {
        return(
            <div className={styles.content}>
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