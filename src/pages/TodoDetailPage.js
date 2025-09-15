import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {ToDoItem} from "../components/ToDoItem";

export function TodoDetailPage() {
    const {id} = useParams();
    const {state} = useContext(TodoContext);
    const todo = state.find((todo) => String(todo.id) === String(id));

    if (!todo) {
        return <div>ToDo item not found</div>
    }
    return <div>
        <ToDoItem todo={todo} index={id}/>
    </div>

}