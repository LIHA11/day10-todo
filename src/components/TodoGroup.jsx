import React, { useState, useContext } from "react";
import { ToDoItem } from "./ToDoItem";
import './TodoGroup.css';
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router";
import { useTodoService } from "../useTodoService";
import { Button, Modal } from 'antd';

export function TodoGroup() {
    const { state, dispatch } = useContext(TodoContext)
    const navigate = useNavigate();
    const { deleteTodo,updateTodo } = useTodoService();


    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('');
    const [item, setItem] = useState(null);

    function detailItem(id, done) {
        navigate(`/todos/${id}`);
    }

    function deleteItem(id, done) {
        if (!done) {
            alert("You can only delete a task that is marked as done.");
            return;
        }

        deleteTodo(id)
            .then(() => {
                dispatch({ type: "DELETE_TODO", payload: { id } });
            })
            .catch(err => console.error("Failed to delete todo:", err));
    }

    function showModal(item) {
        setItem(item);
        setModalText(item.text);
        setOpen(true);
    }
    function handleOk() {
        setConfirmLoading(true);
        const newTodo = { ...item, text: modalText };
        updateTodo(newTodo).then(todo=>{
            dispatch({ type: "EDIT_TODO", payload: newTodo });
        })
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 500);
    }
    function handleCancel() {
        setOpen(false);
    }

    function handleInputChange(e) {
        setModalText(e.target.value);
    }

    return <div>
        {
            state.map((item, index) => {
                return <div className={"todo-group"} key={index}>
                    <ToDoItem todo={item} key={index} index={index} />
                    <button onClick={() => deleteItem(item.id, item.done)}>X</button>
                    <button onClick={() => detailItem(item.id, item.done)}>detail</button>
                    <Button type="primary" style={{ marginLeft: 8 }} onClick={() => showModal(item)}>edit</Button>
                </div>
            })
        }
        <Modal
            title="Edit Todo"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            <input
                value={modalText}
                onChange={handleInputChange}
                style={{ width: '90%', marginBottom: 16, fontSize: 18, height: 40, padding: '0 12px' }}
            />
        </Modal>
    </div>
}