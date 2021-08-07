import React, { useState, useEffect } from 'react';
import { Row, Modal, Form, Input, Col, Button } from 'antd';

const AddItemCostModal = ({ isVisible, setVisible, addItemCost, formValues, handleUpdate, isUpdate }) => {
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
                await addItemCost(data);
                setLoading(false);
            })();
        }
        form.resetFields();
    };
    useEffect(() => {
        if (formValues) {
            form.setFieldsValue({
                name: formValues.name,
                code: formValues.code,
            });
        }

    }, [formValues, form]);

    return (
        <>
            <Modal
                title={isUpdate ? 'Update Item Cost' : 'Add Item Cost'}
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
                                        message: 'Please input Item Cost Name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col sm={24} lg={12}>

                            <Form.Item
                                label="Code"
                                name="code"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input Item Cost Code!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item> </Col>
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

export default AddItemCostModal;