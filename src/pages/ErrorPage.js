import {useRouteError} from "react-router";

export function ErrorPage() {
    const error = useRouteError();
    const is404 = !error || error.status === 404;
    return (
        <div className="error-page">
            {is404 ? (
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