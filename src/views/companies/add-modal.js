import React, { useState, useEffect } from 'react';
import { Row, Modal, Button, Form, Input, Col, InputNumber } from 'antd';

const AddCompanyModal = ({ isVisible, setVisible, addCourse, formValues, handleUpdate, isUpdate }) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const data = values;
        setLoading(true);
        if (isUpdate) {
            (async () => {
                await handleUpdate(data);
                setLoading(false);
            })();
        } else {
            (async () => {
                await addCourse(data);
                setLoading(false);
            })();
        }
        form.resetFields();
    };
    useEffect(() => {
        if (formValues) {
            form.setFieldsValue({
                name: formValues.name,
                Email: formValues.Email,
                Location: formValues.Location,
                scope: formValues.scope,
                PhoneNumber: formValues.PhoneNumber,
            });
        }

    }, [formValues, form]);

    return (
        <>
            <Modal
                title='Add Company'

                visible={isVisible}
                onCancel={() => { setVisible(false); form.resetFields(); }}
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
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify='end'>
                        <Col style={{ margin: '0 8px 0 0' }}>
                            <Form.Item >
                                <Button htmlType="button" onClick={() => {
                                    setVisible(false);
                                    form.resetFields();
                                }}>
                                    Close
                                </Button>
                            </Form.Item>
                        </Col>
                        <Form.Item>
                            <Col>
                                <Button loading={loading} disabled={loading} type="primary" htmlType="submit">
                                    Add
                                </Button>
                            </Col>
                        </Form.Item>
                    </Row>
                </Form>
            </Modal>
        </>
    );

};

export default AddCompanyModal;