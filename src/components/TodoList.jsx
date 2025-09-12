import {TodoGroup} from './TodoGroup';
import {useContext} from 'react';
import {TodoContext} from '../contexts/TodoContext';
import {TodoItem} from './TodoItem';

export function TodoList() {
    return (
        <div className="todo-list-container">
            <h1 className="todo-list-title">Todo List</h1>
            <div className="todo-list-subtitle">Add the things you need to do today...</div>
            <TodoGroup />
        </div>
    );
}