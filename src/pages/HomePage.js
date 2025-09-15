import React from 'react';
import {TodoList} from "../components/TodoList";
import { Flex, Progress } from 'antd';

export function HomePage() {
    return (
        <div>
            <Flex wrap gap="small" style={{ margin: '24px auto', maxWidth: 300 }}>
                <Progress type="circle" percent={30} size={80} />
                <Progress type="circle" percent={70} size={80} status="exception" />
                <Progress type="circle" percent={100} size={80} />
            </Flex>
            <TodoList/>
        </div>
    );
}