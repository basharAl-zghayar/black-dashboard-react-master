import React, { useState, useEffect } from 'react';
import { Row, Modal, Form, Input, Col, Button, InputNumber, DatePicker, Select } from 'antd';
import moment from 'moment';

const AddExpansiveModal = ({
    isVisible,
    setVisible,
    addExpansive,
    formValues,
    updateExpansive,
    isUpdate,
    itemCode }) => {

    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const data = values;
        data.date = moment(values.date).format("YYYY/MM/DD");
        setLoading(true);
        if (isUpdate) {
            (async () => {
                await updateExpansive(data);
            })();
        } else {
            (async () => {
                await addExpansive(data);
            })();
        }
        setLoading(false);
        form.resetFields();
    };
    useEffect(() => {
        setLoading(false);
        if (isUpdate) {
            form.setFieldsValue({
                name: formValues.name,
                itemCode: itemCode,
                paidValue: formValues.paidValue,
                date: moment(formValues.date),
                state: formValues.state,
            });
        } else {
            form.resetFields();
            form.setFieldsValue({
                itemCode: itemCode,
            });
        }

    }, [formValues, form, itemCode, isUpdate]);

    return (
        <>
            <Modal
                title={isUpdate ? 'Update Expansive' : 'Add Expansive'}
                visible={isVisible}
                onCancel={() => { setVisible(false); }}
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
                                        message: 'Please input Expansive Name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col sm={24} lg={12}>

                            <Form.Item
                                label="Item Code"
                                name="itemCode"
                            >
                                <Input disabled value={itemCode} />
                            </Form.Item> </Col>
                    </Row>
                    <Row gutter={24} justify='space-between'>
                        <Col sm={24} lg={12}>
                            <Form.Item
                                label="Value"
                                name="paidValue"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Add Value!',
                                    },
                                ]}
                            >
                                <InputNumber min={0} style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col sm={24} lg={12}>

                            <Form.Item
                                label="Date"
                                name="date"
                            >
                                <DatePicker style={{ width: '100%' }} />

                            </Form.Item> </Col>
                    </Row>
                    <Row gutter={24} justify='space-between'>
                        <Col sm={24} lg={12}>
                            <Form.Item
                                label="State"
                                name="state"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Add Value!',
                                    },
                                ]}
                            >
                                <Select >
                                    <Select.Option key='paid' value={1}>
                                        Paid
                                    </Select.Option>
                                    <Select.Option key='unpaid' value={2}>
                                        Unpaid
                                    </Select.Option>
                                </Select>
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

export default AddExpansiveModal;