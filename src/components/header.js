import React from 'react';
import { Layout, Input, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import '../scss/header.scss';


const { Header } = Layout;

const CommonHeader = (props) => {
    const inputEvent = (e) => {
        const value = e.target.value.toLowerCase();
        props.onInputChange(value);
    }
    return (
        <Header>
            <Row>
                <Col span={4}></Col>
                <Col span={10}>
                    <div className="search">
                        <Input
                            onChange={inputEvent}
                            placeholder="Search ..."
                            prefix={<SearchOutlined className="site-form-item-icon"
                            />}
                        />
                    </div>
                </Col>
                <Col span={10}></Col>
            </Row>
        </Header>
    )
}

export default CommonHeader;