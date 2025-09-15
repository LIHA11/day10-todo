import {useContext, useState} from 'react';
import {TodoContext} from '../contexts/TodoContext';
import './TodoGenerator.css';
import {api} from "../api/mockApi";


const createTodo = (text)  => {
    return api.post("/todos",
        {text: text.trim(), done: false})
        .then((res => res.data));
}




export function TodoGenerator() {
    const {dispatch, state} = useContext(TodoContext);
    const [text, setText] = useState('');

    const handleAdd = (e) => {
        if (text.trim() === '') return;
        createTodo(text)
            .then(todo =>
                dispatch({type: 'ADD_TODO', payload: todo})
            )
            .catch(err => console.error("Failed to add todo:", err));
        //
        setText('');
    };

    return (
        <div className="todo-generator">
            <input
                type="text"
                className="todo-input"
                value={text}
                onChange={e => setText(e.target.value)}

            />
            <button className="todo-add-btn" onClick={handleAdd}>add</button>
        </div>
    );
}