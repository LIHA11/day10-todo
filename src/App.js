import './App.css';
import {useContext, useReducer} from "react";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useParams} from "react-router";
import {ErrorPage} from "./pages/ErrorPage";
import {HomePage} from "./pages/HomePage";
import {ToDoItem} from "./components/ToDoItem";

function DefaultLayout() {
    return <div>
        <header>
            <nav>
                <ul>
                    <li><NavLink to = {"/"}>Home</NavLink></li>
                    <li><NavLink to = {"/todos/1"}>ID 1</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
}


function TodoDetailPage() {
    const {id} = useParams();
    const{state} = useContext(TodoContext);
    const todo = state.filter((todo) => todo.id === parseInt(id))

    if(todo.length === 0) {
        return <div>ToDo item not found</div>
    }

    return <div>
        {JSON.stringify(todo)}
        <ToDoItem todo = {todo[0]} index = {id}/>
    </div>
}

const routes = createBrowserRouter([
    {
        path:"/",
        element:<DefaultLayout/>,
        errorElement:<ErrorPage />,
        children:[
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:"/todos/:id",
                element:<TodoDetailPage/>
            }
        ]
    }
]);


export const initState = [

];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <h1>TODO list</h1>
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes}/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;