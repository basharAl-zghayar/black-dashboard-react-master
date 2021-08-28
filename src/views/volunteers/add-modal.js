import React, { useEffect, useState } from 'react';
import { Row, Modal, Button, Form, Input, Col, Tabs, InputNumber } from 'antd';
const { TabPane } = Tabs;

const AddVolunteerModal = ({ isVisible, setVisible, addVolunteer, formValues, updateVolunteer, isUpdate }) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const data = values;
        setLoading(true);
        if (isUpdate) {
            (async () => {
                await updateVolunteer(data);
                setLoading(false);
            })();
        } else {
            (async () => {
                await addVolunteer(data);
                setLoading(false);
            })();
        }
        form.resetFields();
    };
    useEffect(() => {
        if (isUpdate) {
            form.setFieldsValue({
                firstName: formValues.firstName,
                lastName: formValues.lastName,
                user_name: formValues?.user?.name,
                email: formValues?.user?.email,
                phone: formValues.phone,
                volunteerTitle: formValues.volunteerTitle,
                location: formValues.location,
                section: formValues.section,
                college: formValues.college,
                age: formValues.age,
                description: formValues.description,
                specialization: formValues.specialization,

            });
        }
    }, [formValues, form, isUpdate]);
    return (
        <>
            <Modal
                title='Add Volunteer'
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
                                        label="User Name"
                                        name="user_name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add User Name!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="Age"
                                        name="age"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add Age!',
                                            },
                                        ]}
                                    >
                                        <InputNumber style={{ width: '100%' }} min={0} />
                                    </Form.Item>
                                </Col>

                            </Row>
                            <Row gutter={24} justify='space-between'>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="First Name"
                                        name="firstName"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add First Name!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col sm={24} lg={12}>

                                    <Form.Item
                                        label="Last Name"
                                        name="lastName"
                                    >
                                        <Input />
                                    </Form.Item> </Col>
                            </Row>
                            <Row gutter={24} justify='space-between'>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add Email!',
                                            },
                                        ]}
                                    >
                                        <Input type='email' />
                                    </Form.Item>
                                </Col>
                                <Col sm={24} lg={12}>

                                    <Form.Item
                                        label="Phone"
                                        name="phone"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add Phone!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            {!isUpdate && <Row gutter={24} justify='space-between'>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: isUpdate ? false : true,
                                                message: 'Please Add Password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password style={{ width: '100%' }} />
                                    </Form.Item>
                                </Col>
                                <Col sm={24} lg={12}>

                                    <Form.Item
                                        label="Repeat Password"
                                        name="c_password"
                                        rules={[
                                            {
                                                required: isUpdate ? false : true,
                                                message: 'Please Add Password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password style={{ width: '100%' }} />
                                    </Form.Item>
                                </Col>
                            </Row>}
                        </TabPane>
                        <TabPane key='specialist' tab="Specialist" >
                            <Row gutter={24} justify='space-between'>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="Volunteer Title"
                                        name="volunteerTitle"
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
                                        label="Specialization"
                                        name="specialization"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add Specialization!',
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
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="Section"
                                        name="section"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add Section!',
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
                                        label="College"
                                        name="college"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add College!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>

                            </Row>
                            <Row gutter={24} justify='space-between'>
                                <Col sm={24} >
                                    <Form.Item
                                        label="Description"
                                        name="description"
                                    >
                                        <Input.TextArea />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </TabPane>

                    </Tabs>
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
                                    {isUpdate ? 'Update' : 'Add'}
                                </Button>
                            </Col>
                        </Form.Item>
                    </Row>
                </Form>
            </Modal>
        </>
    );

};

export default AddVolunteerModal;