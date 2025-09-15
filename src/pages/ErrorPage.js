import {useRouteError} from "react-router";

export function ErrorPage() {
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