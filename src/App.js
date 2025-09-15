import './App.css';
import {useReducer} from "react";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoList} from "./components/TodoList";
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useRouteError} from "react-router";

function DefaultLayout() {
    return <div>
        <header>
            <nav>
                <ul>
                    <li><NavLink to = {"/"}>Home</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
}

function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="error-page">
            {error.status === 404 ? (
                <div className="not-found">
                    <h1>404</h1>
                    <p>页面未找到</p>
                    <a href="/" className="back-home">返回首页</a>
                </div>
            ) : (
                <div className="error-info">{JSON.stringify(error)}</div>
            )}
        </div>
    );
}


const routes = createBrowserRouter([
    {
        path:"/",
        element:<DefaultLayout/>,
        errorElement:<ErrorPage />,
        children:[
            {
                path:"/",
                element:<TodoList/>
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