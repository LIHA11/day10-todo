import React, { useState } from 'react';
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {ToDoItem} from "../components/ToDoItem";
import { Checkbox, Divider } from 'antd';

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

    return <div>
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
