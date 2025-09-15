import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {ToDoItem} from "../components/ToDoItem";

export function DonePages() {
    const {state} = useContext(TodoContext)

    return <div>
        {
            state.filter(item => item.done).map((item, index) => (
                <div className={"todo-group"} key={index}>
                    <ToDoItem todo={item} key={index} index={index}/>
                </div>
            ))

        }
    </div>
}