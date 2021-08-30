import React, { useState, useEffect } from 'react';
import {
    Row, Modal, Form, Input, Col, Tabs, DatePicker, Select, InputNumber
}
    from 'antd';
import moment from 'moment';
import * as companiesServices from '../../services/companies/index';

const { TabPane } = Tabs;

const AddOpportunityModal = ({ isVisible, setVisible, addOpportunity, formValues, updateOpportunity, isUpdate }) => {
    const [loading, setLoading] = useState(false);
    const [companies, setCompanies] = useState([]);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const data = values;
        data.lastDateForRegister = moment(values.startDate).format("YYYY/MM/DD");
        setLoading(true);
        if (isUpdate) {

            (async () => {
                await updateOpportunity(data);
                setLoading(false);
            })();
        } else {
            (async () => {
                await addOpportunity(data);
                setLoading(false);
            })();
        }
    };

    useEffect(() => {
        (async () => {
            const data = await companiesServices.showAllCompanies();
            setCompanies(data.data.data);
        })();

    }, []);

    return (
        <>
            <Modal
                title='Add Opportunity'
                visible={isVisible}
                okText={isUpdate ? 'Update' : 'Add'}
                cancelText="Cancel"
                onCancel={() => { setVisible(false); form.resetFields(); }}
                onOk={() => {
                    form
                        .validateFields()
                        .then(values => {
                            onFinish(values);
                        });
                }}
                okButtonProps={{ loading: loading, disabled: loading }}
                cancelButtonProps={{ disabled: loading }}
                width={675}
            >
                <Form
                    form={form}
                    layout='vertical'
                    onFinish={onFinish}
                    initialValues={{
                        title: formValues?.title,
                        companyID: formValues?.companyID,
                        time: formValues?.time,
                        type: formValues?.type,
                        scope: formValues?.scope,
                        state: formValues?.state,
                        freeDesks: formValues?.freeDesks,
                        location: formValues?.location,
                        salary: formValues?.salary,
                        description: formValues?.description,
                        lastDateForRegister: moment(formValues?.lastDateForRegister),
                    }}
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
                                                message: 'Please Add Title!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col sm={24} lg={12}>

                                    <Form.Item
                                        label="Company"
                                        name="companyID"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Select Company!',
                                            },
                                        ]}
                                    ><Select >
                                            {companies?.map((company) => {
                                                return (

                                                    <Select.Option key={company.id} value={company.id}>
                                                        {company?.name}
                                                    </Select.Option>

                                                );
                                            })}
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={24} justify='space-between'>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="Work Type"
                                        name="time"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Select Work Type!',
                                            },
                                        ]}
                                    >
                                        <Select >
                                            <Select.Option key='Part' value={1}>
                                                Part Time
                                            </Select.Option>
                                            <Select.Option key='Full' value={2}>
                                                Full Time
                                            </Select.Option>

                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="Opportunity Type"
                                        name="type"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Select Opportunity Type!',
                                            },
                                        ]}
                                    >
                                        <Select >
                                            <Select.Option key='Placement' value={1}>
                                                Placement
                                            </Select.Option>
                                            <Select.Option key='Training' value={2}>
                                                Training
                                            </Select.Option>

                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={24} justify='space-between'>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="State"
                                        name="state"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Select State!',
                                            },
                                        ]}
                                    >
                                        <Select >
                                            <Select.Option key='active' value={1}>
                                                active
                                            </Select.Option>
                                            <Select.Option key='inactive' value={2}>
                                                inactive
                                            </Select.Option>
                                            <Select.Option key='delete' value={3}>
                                                deleted
                                            </Select.Option>
                                            <Select.Option key='finished' value={4}>
                                                finished
                                            </Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="Scope"
                                        name="scope"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add Scope!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>

                        </TabPane>
                        <TabPane key='date' tab="Description" forceRender>
                            <Row gutter={24} justify='space-between'>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="Last Date For Register"
                                        name="lastDateForRegister"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add Last Date For Register!',
                                            },
                                        ]}
                                    >
                                        <DatePicker style={{ width: '100%' }} />
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

                            <Row gutter={24} justify='space-between'>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="Free Desks"
                                        name="freeDesks"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add Free Desks!',
                                            },
                                        ]}
                                    >
                                        <InputNumber min={0} style={{ width: '100%' }} />
                                    </Form.Item>

                                </Col>
                                <Col sm={24} lg={12}>
                                    <Form.Item
                                        label="Salary"
                                        name="salary"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please Add Salary!',
                                            },
                                        ]}
                                    >
                                        <InputNumber min={0} style={{ width: '100%' }} />
                                    </Form.Item>

                                </Col>
                            </Row>
                            <Row gutter={24} justify='space-between'>
                                <Col sm={24} lg={24}>
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
                </Form>
            </Modal>
        </>
    );

};

export default AddOpportunityModal;;