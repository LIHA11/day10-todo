import React from "react";
import { Rate } from 'antd';

export function AboutPages() {
    return (
        <div style={{ padding: "2rem" }}>
            <h2>About To-Do System</h2>
            <p>
                This is a simple to-do management system built with React. It allows you to add, view, and manage your tasks efficiently.
            </p>
            <p>
                Enjoy your task management!
            </p>
            <div style={{ marginTop: 32 }}>
                <Rate allowHalf defaultValue={2.5} />
            </div>
        </div>
    );
}
