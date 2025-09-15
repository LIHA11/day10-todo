import React, { useState } from 'react';
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {ToDoItem} from "../components/ToDoItem";
import { Checkbox, Divider, Button, Flex, Progress, Space } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

export function DonePages() {
    const {state} = useContext(TodoContext);
    const [percent, setPercent] = useState(0);
    const increase = () => {
        setPercent(prevPercent => {
            const newPercent = prevPercent + 10;
            if (newPercent > 100) {
                return 100;
            }
            return newPercent;
        });
    };
    const decline = () => {
        setPercent(prevPercent => {
            const newPercent = prevPercent - 10;
            if (newPercent < 0) {
                return 0;
            }
            return newPercent;
        });
    };

    return <div>
        <Flex vertical gap="small" style={{ margin: '24px auto', maxWidth: 220 }}>
            <Flex vertical gap="small">
                <Progress percent={percent} type="line" />
                <Progress percent={percent} type="circle" />
            </Flex>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Space.Compact>
                    <Button onClick={decline} icon={<MinusOutlined />} />
                    <Button onClick={increase} icon={<PlusOutlined />} />
                </Space.Compact>
            </div>
        </Flex>
        <Divider />
        {
            state.filter(item => item.done).map((item, index) => (
                <div className={"todo-group"} key={index}>
                    <ToDoItem todo={item} key={index} index={index}/>
                </div>
            ))
        }
    </div>
}
