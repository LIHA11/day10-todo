import React, { useState } from 'react';
import {NavLink, Outlet} from "react-router";
import './DefaultLayout.css';
import { Pagination, Button, Popconfirm, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';

export function DefaultLayout() {
    const [page, setPage] = useState(1);
    return <div>
        <header>
            <nav>
                <ul className="nav-center">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/todos/done"}>Done </NavLink></li>
                    <li><NavLink to={"/todos/about"}>About</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
            <Pagination
                current={page}
                total={50}
                pageSize={10}
                onChange={p => setPage(p)}
                style={{ marginTop: 24 }}
            />
            <Space style={{ marginTop: 32 }}>
                Space
                <Button type="primary">Button</Button>
                <Upload>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
                    <Button>Confirm</Button>
                </Popconfirm>
            </Space>
            {/* 新增浮动按钮 */}
            <FloatButton
                icon={<FileTextOutlined />}
                description="HELP INFO"
                shape="square"
                style={{ insetInlineEnd: 24 }}
            />
            <FloatButton description="HELP INFO" shape="square" style={{ insetInlineEnd: 94 }} />
            <FloatButton
                icon={<FileTextOutlined />}
                description="HELP"
                shape="square"
                style={{ insetInlineEnd: 164 }}
            />
        </main>
    </div>
}