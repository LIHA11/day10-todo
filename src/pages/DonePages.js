import React, { useState } from 'react';
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {ToDoItem} from "../components/ToDoItem";
import { Checkbox, Divider, Button, Flex, Progress, Space } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const CheckboxGroup = Checkbox.Group;
const weekOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const defaultCheckedList = ['Monday', 'Friday'];

export function DonePages() {
    const {state} = useContext(TodoContext);
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const checkAll = weekOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < weekOptions.length;

    const onChange = (list) => {
        setCheckedList(list);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? weekOptions : []);
    };

    // 新增进度条和按钮功能
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
        {/* 可调节进度条和按钮 */}
        <Flex vertical gap="small" style={{ margin: '24px auto', maxWidth: 220 }}>
            <Flex vertical gap="small">
                <Progress percent={percent} type="line" />
                <Progress percent={percent} type="circle" />
            </Flex>
            <Space.Compact>
                <Button onClick={decline} icon={<MinusOutlined />} />
                <Button onClick={increase} icon={<PlusOutlined />} />
            </Space.Compact>
        </Flex>
        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            Check all
        </Checkbox>
        <Divider />
        <CheckboxGroup options={weekOptions} value={checkedList} onChange={onChange} />
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
