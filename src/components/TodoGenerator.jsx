import {useContext, useState} from 'react';
import {TodoContext} from '../contexts/TodoContext';
import './TodoGenerator.css';

export function TodoGenerator() {
    const {dispatch, state} = useContext(TodoContext);
    const [text, setText] = useState('');

    const handleAdd = () => {
        if (text.trim() === '') return;
        dispatch({
            type: 'ADD_TODO',
            payload: {
                id: state.length ? Math.max(...state.map(t => t.id)) + 1 : 1,
                text,
                done: false
            }
        });
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