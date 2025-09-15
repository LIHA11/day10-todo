import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {ToDoItem} from "../components/ToDoItem";

export function TodoDetailPage() {
    const {id} = useParams();
    const {state} = useContext(TodoContext);
    const todo = state.filter((todo) => todo.id === parseInt(id))

    if (todo.length === 0) {
        return <div>ToDo item not found</div>
    }

    return <div>
        <ToDoItem todo={todo[0]} index={id}/>
    </div>
}