import React, { useState } from 'react';
import { Row, Modal, Button, Form, Input, Col, Select, Checkbox } from 'antd';

const AddCourseQuestionModal = ({ isVisible, setVisible, addQuestion, formValues }) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const data = values;

        data.CourseID = formValues.id;
        setLoading(true);
        (async () => {
            await addQuestion(data);
            setLoading(false);
        })();
    };

    return (
        <>
            <Modal
                title='Add  Question'
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
                                label="Question"
                                name="title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Add Question!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col sm={24} lg={12}>
                            <Form.Item
                                label="Type"
                                name="type"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Select Type!',
                                    },
                                ]}
                            >
                                <Select >
                                    <Select.Option key='active' value={1}>
                                        Free Question
                                    </Select.Option>
                                    <Select.Option key='active' value={2}>
                                        Check Box
                                    </Select.Option>
                                    <Select.Option key='active' value={3}>
                                        Radio Box
                                    </Select.Option>
                                    <Select.Option key='active' value={4}>
                                        File
                                    </Select.Option>

                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24} justify='space-between'>
                        <Col sm={24} lg={12}>
                            <Form.Item

                                name="required" valuePropName="checked"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Check!',
                                    },
                                ]}
                            >
                                <Checkbox >Required</Checkbox>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify='end'>
                        <Col style={{ margin: '0 8px 0 0' }}>
                            <Form.Item >
                                <Button htmlType="button" onClick={() => { setVisible(false); }}>
                                    Close
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
        </>
    );

};

export default AddCourseQuestionModal;