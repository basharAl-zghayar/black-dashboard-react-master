import React, { useEffect, useState } from "react";

import { Table, Row, Modal, Button, Form, Input, Col, Spin, Tooltip, Typography, Card, InputNumber } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { columns } from './columns';
import * as companiesServices from '../../services/companies/index';

function Companies(props) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [spinning, setSpinning] = useState(true);
    const [loading, setLoading] = useState(false);
    const [record, setRecord] = useState();
    const [companies, setCompanies] = useState([]);
    const [form] = Form.useForm();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setSpinning(true);
        (async () => {
            const data = await companiesServices.showAllCompanies();
            setCompanies(data.data.data);
            setSpinning(false);
        })();
    };
    const handleDelete = () => {
        (async () => {
            const data = await companiesServices.deleteCompany(record.id);
            setCompanies(data.data.data);
            getData();
            setSpinning(false);
        })();
    };
    const onFinish = (values) => {
        setLoading(true);
        (async () => {
            await companiesServices.addCompany(values);
            getData();
            setLoading(false);
        })();
    };
    const actionColumn = {
        key: 'actions',
        width: '13%',
        className: 'actions',
        render: (text, record, index) => {
            return (
                <Row justify="space-between">
                    <Col>
                        <Tooltip title={'DeleteCompany'}>
                            <Button
                                type='link'
                                danger
                                size="small"
                                shape="circle"
                                onClick={() => {
                                    setDeleteModalVisible(true);
                                    setRecord(record);
                                }}
                            >
                                <DeleteOutlined />
                            </Button>
                        </Tooltip>
                    </Col>

                </Row>
            );
        },
    };


    return (
        <>
            <div className="content">
                <Card style={{ minHeight: '85vh', borderRadius: '5px' }}>
                    <Spin spinning={spinning} >
                        <Row justify='end' align='middle'>
                            <Button type='primary' onClick={() => setModalVisible(true)} >
                                <Row align='middle'>
                                    <PlusOutlined /> Add Company
                                </Row>
                            </Button>
                        </Row>
                        <Row>
                            <Table dataSource={companies} columns={[...columns, actionColumn]} style={{
                                width: '100%',
                                padding: ' 16px 0 0',
                                borderRadius: '7px'
                            }} />
                        </Row>
                        <Modal
                            title='Add Company'

                            visible={isModalVisible}
                            onCancel={() => { setModalVisible(false); form.resetFields(); }}
                            okButtonProps={{ hidden: true }}
                            cancelButtonProps={{ hidden: true }}
                            width={675}
                        >
                            <Form
                                form={form}
                                layout='vertical'
                                onFinish={onFinish}
                            >
                                <Row gutter={24} justify='space-between'>
                                    <Col sm={24} lg={12}>
                                        <Form.Item
                                            label="Name"
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input company Name!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} lg={12}>

                                        <Form.Item
                                            label="Email"
                                            name="Email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input company Email!',
                                                },
                                            ]}
                                        >
                                            <Input type='email' />
                                        </Form.Item> </Col>
                                </Row>
                                <Row gutter={24} justify='space-between'>
                                    <Col sm={24} lg={12}>
                                        <Form.Item
                                            label="Location"
                                            name="Location"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input company Location!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col sm={24} lg={12}>

                                        <Form.Item
                                            label="Scope"
                                            name="scope"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input company Scope!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item> </Col>
                                </Row>
                                <Row gutter={24} justify='space-between'>
                                    <Col sm={24} lg={12}>
                                        <Form.Item
                                            label="PhoneNumber"
                                            name="PhoneNumber"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input company PhoneNumber!',
                                                },
                                            ]}
                                        >
                                            <InputNumber />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row justify='end'>
                                    <Col style={{ margin: '0 8px 0 0' }}>
                                        <Form.Item >
                                            <Button htmlType="button" onClick={() => { setModalVisible(false); form.resetFields(); }}>
                                                Reset
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                    <Form.Item>
                                        <Col>
                                            <Button loading={loading} disabled={loading} type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Form.Item>
                                </Row>
                            </Form>
                        </Modal>
                        <Modal
                            title='Delete Company'
                            visible={isDeleteModalVisible}
                            onCancel={() => { setDeleteModalVisible(false); }}
                            onOk={() => handleDelete()}

                        >
                            <Typography.Text strong>
                                Are you Sure You Want To Delete This Company ?
                            </Typography.Text>

                        </Modal>
                    </Spin>
                </Card>
            </div>
        </>
    );
}

export default Companies;
