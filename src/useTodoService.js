import {api} from "./api/mockApi";

export function useTodoService() {
    const loadTodos = () => {
        return api.get('/todos')
            .then(response => response.data);
    }

    const createTodo = (text)  => {
        return api.post("/todos",
            {text: text.trim(), done: false})
            .then((res => res.data));
    }

    const putTodo = (props) => {
        return api.put(`/todos/${props.todo.id}`, {
            ...props.todo,
            done: !props.todo.done
        })
            .then(res => res.data);
    }

    const deleteTodo = (id) => {
        return api.delete(`/todos/${id}`)
            .then(res => res.data);
    }

    return {loadTodos,createTodo, putTodo, deleteTodo}
}