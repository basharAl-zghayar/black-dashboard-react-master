import React, { useState, useEffect } from 'react';
import { Row, Modal, Button, Form, Input, Col, Select, Checkbox, Divider, Tooltip, Spin } from 'antd';
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const AddQuestionModal = ({
    isVisible,
    setVisible,
    addQuestion,
    formValues,
    updateQuestion,
    isUpdate }) => {
    const [loading, setLoading] = useState(false);
    const [spinning, setSpinning] = useState(true);
    const [form] = Form.useForm();
    const [questionType, setQuestionType] = useState();

    useEffect(() => {
        setSpinning(true);
        if (isUpdate) {
            form.setFieldsValue({
                questionsAnswers: formValues?.questionsAnswers,
                title: formValues?.title,
                CourseID: formValues?.CourseID,
                type: formValues?.type,
                id: formValues?.id,
                required: formValues?.required,
            });
            setQuestionType(formValues?.type);
            setSpinning(false);

        } else {
            form.resetFields();
            form.setFieldsValue({
                required: false,
            });
            setSpinning(false);
        }

    }, [formValues, form, isUpdate]);

    const onFinish = (values) => {
        let data = values;
        if (!values.required) {
            data.required = false;
        }
        const modAnswers = values.questionsAnswers.map((answer) => {

            if (answer.state === true) {
                answer.state = 1;
            } else if (answer.state === false) {
                answer.state = 2;
            }
            return answer;
        });
        form.setFieldsValue({ questionsAnswers: modAnswers });

        setLoading(true);
        if (isUpdate) {
            (async () => {
                await updateQuestion(form.getFieldsValue());
                setLoading(false);
                setVisible(false);
            })();
        } else {
            (async () => {
                await addQuestion(form.getFieldsValue());
                setLoading(false);
                setVisible(false);
            })();
        }

    };

    return (
        <>
            <Modal
                title={isUpdate ? 'Update Question' : 'Add Question'}
                visible={isVisible}
                onCancel={() => { setVisible(false); form.resetFields(); }}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
                width={675}
            >
                <Form
                    form={form}
                    layout='horizontal'
                    onFinish={onFinish}
                >
                    <Spin spinning={spinning}>
                        <Row
                            gutter={24}
                            justify='space-between'
                            align='middle'
                        >
                            <Col sm={24} lg={10}>
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
                            <Col sm={24} lg={10}>
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
                                    <Select
                                        onChange={(value) => {
                                            setQuestionType(value);
                                            form.setFieldsValue({
                                                questionsAnswers: []
                                            });
                                        }}>
                                        <Select.Option key='free-question' value={1}>
                                            Free Question
                                        </Select.Option>
                                        <Select.Option key='check-box' value={2}>
                                            Check Box
                                        </Select.Option>
                                        <Select.Option key='radio-box' value={3}>
                                            Radio Box
                                        </Select.Option>

                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col sm={24} lg={4}>
                                <Form.Item
                                    name="required" valuePropName="checked"
                                >
                                    <Checkbox >Required</Checkbox>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Divider> Answers </Divider>
                        {questionType && questionType === 1
                            ? (
                                <Form.List name="questionsAnswers">
                                    {() => {
                                        return (
                                            <Row>
                                                <Col sm={24} lg={24}>
                                                    <Form.Item
                                                        label={"Answer"}
                                                        name={[0, "title"]}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Please Add Question Answer!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input.TextArea onChange={(value) => {
                                                            form.setFieldsValue({
                                                                questionsAnswers: [{ title: value.target.value, state: 1 }]
                                                            });
                                                        }} />
                                                    </Form.Item>
                                                </Col>

                                            </Row>
                                        );
                                    }}
                                </Form.List>

                            ) : null
                        }
                        {questionType && (questionType === 2 || questionType === 3)
                            ? (
                                <>
                                    <Form.List name="questionsAnswers">
                                        {(fields, { add, remove }) => {
                                            return (
                                                <div>
                                                    {fields.map((field, index) => (
                                                        <div key={field.key}>
                                                            <Row align='top' justify='space-between'>

                                                                <Col sm={24} lg={16}>
                                                                    <Form.Item
                                                                        label={"Answer " + (index + 1)}
                                                                        name={[index, "title"]}
                                                                        rules={[
                                                                            {
                                                                                required: true,
                                                                                message: 'Please Add Question Answer!',
                                                                            },
                                                                        ]}
                                                                    >
                                                                        <Input />
                                                                    </Form.Item>
                                                                </Col>
                                                                <Col sm={24} lg={4}>
                                                                    <Form.Item
                                                                        name={[index, "state"]} valuePropName="checked"
                                                                    >
                                                                        <Checkbox >Is Correct</Checkbox>
                                                                    </Form.Item>
                                                                </Col>
                                                                <Tooltip title={'Delete Answer'}>
                                                                    <Button

                                                                        size='small'
                                                                        danger
                                                                        type="link"
                                                                        shape='circle'
                                                                        onClick={() => remove(field.name)}
                                                                        icon={<DeleteOutlined />}
                                                                    />
                                                                </Tooltip>
                                                            </Row>

                                                        </div>
                                                    ))}
                                                    <Divider />
                                                    <Form.Item>
                                                        <Row align='middle' justify='center'>

                                                            <Button
                                                                type="primary"
                                                                onClick={() => add()}
                                                                style={{ width: '150px' }}
                                                            >
                                                                <PlusOutlined /> Add Answer
                                                            </Button>

                                                        </Row>
                                                    </Form.Item>
                                                </div>
                                            );
                                        }}
                                    </Form.List>

                                </>
                            ) : null
                        }

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
                                        {isUpdate ? 'Update' : 'Add'}
                                    </Button>
                                </Col>
                            </Form.Item>
                        </Row>

                    </Spin>
                </Form>
            </Modal>
        </>
    );

};

export default AddQuestionModal;