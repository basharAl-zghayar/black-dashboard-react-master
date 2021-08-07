import React, { useState, useEffect } from 'react';
import { Row, Modal, Button, Form, Input, Col, Tabs, DatePicker, TimePicker, Select, InputNumber } from 'antd';
import moment from 'moment';
const { TabPane } = Tabs;

const AddCourseModal = ({ isVisible, setVisible, addCourse, formValues, updateCourse }) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const data = values;
        data.startDate = moment(values.startDate).format("YYYY/MM/DD");
        data.endDate = moment(values.endDate).format("YYYY/MM/DD");
        data.startTime = moment(values.startTime).format("YYYY/MM/DD HH:mm Z");
        data.endTime = moment(values.endTime).format("YYYY/MM/DD HH:mm Z");
        setLoading(true);
        if (formValues) {

            (async () => {
                await updateCourse(data);
                setLoading(false);
            })();
        } else {
            (async () => {
                await addCourse(data);
                setLoading(false);
            })();
        }
    };
    useEffect(() => {
        if (formValues) {
            form.setFieldsValue({
                title: formValues.title,
                coachID: formValues.coachID,
                maxStudents: formValues.maxStudents,
                CurrentStudents: formValues.CurrentStudents,
                cost: formValues.cost,
                state: formValues.state,
                startDate: moment(formValues.startDate),
                endDate: moment(formValues.endDate),
                startTime: moment(formValues.startTime, 'HH:mm:ss'),
                endTime: moment(formValues.endTime, 'HH:mm:ss'),
                Duration: formValues.Duration,
                location: formValues.location,

            });
        }

    }, [formValues, form]);

    return (
        <>
            <Modal
                title='Add  Course'
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
                    <Tabs >
                        <TabPane key='info  ' tab="Info" >
                            <Row gutter={24} justify='space-between'>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="Title"
                                        name="title"
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
                                        label="Coach"
                                        name="coachID"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add Coach!',
                                            },
                                        ]}
                                    >
                                        <Select >
                                            <Select.Option key='active' value={1}>
                                                Quais
                                            </Select.Option>

                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={24} justify='space-between'>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="Max Students"
                                        name="maxStudents"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add Max Students!',
                                            },
                                        ]}
                                    >
                                        <InputNumber style={{ width: '100%' }} min={0} />
                                    </Form.Item>
                                </Col>
                                <Col sm={24} lg={12}>

                                    <Form.Item
                                        label="Current Students"
                                        name="CurrentStudents"
                                    >
                                        <InputNumber style={{ width: '100%' }} min={0} />
                                    </Form.Item> </Col>
                            </Row>
                            <Row gutter={24} justify='space-between'>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="Cost"
                                        name="cost"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add Cost!',
                                            },
                                        ]}
                                    >
                                        <InputNumber style={{ width: '100%' }} />
                                    </Form.Item>
                                </Col>
                                <Col sm={24} lg={12}>

                                    <Form.Item
                                        label="Status"
                                        name="state"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add Status!',
                                            },
                                        ]}
                                    >
                                        <Select >
                                            <Select.Option key='active' value={1}>
                                                active
                                            </Select.Option>
                                            <Select.Option key='inactive' value={0}>
                                                Inactive
                                            </Select.Option>

                                        </Select>
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
                        </TabPane>
                        <TabPane key='date' tab="Dates and Duration" >
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
                                        label="Start Time"
                                        name="startTime"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add Start Time!',
                                            },
                                        ]}
                                    >
                                        <TimePicker style={{ width: '100%' }} />
                                    </Form.Item>
                                </Col>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="End Time"
                                        name="endTime"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add End Time!',
                                            },
                                        ]}
                                    >
                                        <TimePicker style={{ width: '100%' }} />
                                    </Form.Item>
                                </Col>
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
                        </TabPane>

                    </Tabs>
                </Form>
            </Modal>
        </>
    );

};

export default AddCourseModal;;