import {useContext} from 'react';
import {TodoContext} from '../contexts/TodoContext';
import {TodoItem} from './TodoItem';

export function TodoList({children}) {
    const {state} = useContext(TodoContext);
    return (
        <div className="todo-list-container">
            <h1 className="todo-list-title">Todo List</h1>
            <div className="todo-list-subtitle">Add the things you need to do today...</div>
            <ul>
                {state.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
            {children}
        </div>
    );
}