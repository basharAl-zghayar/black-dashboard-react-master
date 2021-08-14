import React, { useState, useEffect } from 'react';
import { Row, Modal, Button, Form, Input, Col, DatePicker, InputNumber } from 'antd';
import moment from 'moment';

const AddExhibitionModal = ({ isVisible, setVisible, addExhibition, formValues, updateExhibition }) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const data = values;
        data.startDate = moment(values.startDate).format("YYYY/MM/DD");
        data.endDate = moment(values.endDate).format("YYYY/MM/DD");
        setLoading(true);
        if (formValues) {

            (async () => {
                await updateExhibition(data);
                setLoading(false);
            })();
        } else {
            (async () => {
                await addExhibition(data);
                setLoading(false);
            })();
        }
    };
    useEffect(() => {
        if (formValues) {
            form.setFieldsValue({
                title: formValues.title,
                startDate: moment(formValues.startDate),
                endDate: moment(formValues.endDate),
                location: formValues.location,
                description: formValues?.description,
                manager: formValues?.manager,


            });
        }

    }, [formValues, form]);

    return (
        <>
            <Modal
                title='Add  Exhibition'
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
                                label="Title"
                                name="title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Add Title!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col sm={24} lg={12}>

                            <Form.Item
                                label="Manager"
                                name="manager"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Add Manager!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24} justify='space-between'>
                        <Col sm={24} lg={12}>
                            <Form.Item
                                label="Start Date"
                                name="startDate"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Add Start Date!',
                                    },
                                ]}
                            >
                                <DatePicker style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col sm={24} lg={12}>

                            <Form.Item
                                label="End Date"
                                name="endDate"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Add End Date!',
                                    },
                                ]}
                            >
                                <DatePicker style={{ width: '100%' }} />
                            </Form.Item> </Col>
                    </Row>
                    <Row gutter={24} justify='space-between'>
                        <Col sm={24} lg={12}>
                            <Form.Item
                                label="Duration (Days)"
                                name="Duration"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Add Duration!',
                                    },
                                ]}
                            >
                                <InputNumber style={{ width: '100%' }} min={0} />
                            </Form.Item>
                        </Col>
                        <Col sm={24} lg={12}>
                            <Form.Item
                                label="Location"
                                name="location"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Add Location!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify='end'>
                        <Col style={{ margin: '0 8px 0 0' }}>
                            <Form.Item >
                                <Button htmlType="button" onClick={() => { setVisible(false); form.resetFields(); }}>
                                    Reset
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

export default AddExhibitionModal;;