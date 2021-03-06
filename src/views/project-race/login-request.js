import React, { useState, useEffect } from 'react';
import { Row, Modal, Form, Input, Col, Button, Select } from 'antd';
import * as projectRacecourseQuestions from '../../services/projects-races/projects-races-questions';

const AddLoginRequestModal = ({ isVisible, setVisible, addCourse, id }) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [questions, setQuestions] = useState([]);
    const [questionsAnswers, setQuestionsAnswers] = useState([]);

    useEffect(() => {
        if (id) {
            (async () => {
                const data = await projectRacecourseQuestions.showAllByQuestionID(id);
                setQuestions(data.data.data);
            })();
        }

    }, [id]);
    useEffect(() => {
        let testData = [];
        const answers = questions?.map((answer) => {
            const a = answer?.answerQuestion;
            const b = a?.map((v) => { return v.title; });
            testData.push(b);
            return a;
        });
        setQuestionsAnswers(answers);
    }, [questions]);
    const onFinish = () => {

        const data = form.getFieldsValue();
        const value = data.Answers.map((v, index) => {
            v.questionID = questions[index].id;
            return v;
        });


        (async () => {
            await addCourse(value);
            setLoading(false);
        })();
    };


    return (
        <>
            <Modal
                title='Login Request'
                visible={isVisible}
                onCancel={() => { setVisible(false); form.resetFields(); }}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
                width={800}
            >
                <Form
                    form={form}
                    layout='vertical'
                    onFinish={onFinish}
                >
                    {questions.map((question, index) => {
                        return (
                            <div style={{
                                margin: '16px 0',
                                padding: '8px 16px'
                            }}>
                                <Row>
                                    <Col lg={6}>
                                        {(index + 1) + '- ' + question?.title}
                                    </Col>
                                    <Col lg={18}>
                                        <Form.List name="Answers">
                                            {() => {
                                                return (

                                                    <Form.Item
                                                        name={[index, "answer"]}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Please Add Answer!',
                                                            },
                                                        ]}
                                                    >
                                                        {question.type === 2 || question.type === 3 ?
                                                            <Select onSelect={(value) => {
                                                                form.setFieldsValue({
                                                                    questionID: question.id,
                                                                    questionsAnswers: [{ answer: value, questionID: question.id }]
                                                                });
                                                            }} >
                                                                {questionsAnswers[index]?.map((answer, index) => {
                                                                    return (
                                                                        <Select.Option key={answer.id} value={answer.title}>{answer.title}</Select.Option>
                                                                    );
                                                                })}

                                                            </Select>
                                                            :
                                                            <Input.TextArea onChangeCapture={(value) => {
                                                                form.setFieldsValue({
                                                                    questionID: question.id,
                                                                    questionsAnswers: [{ answer: value.target.value, questionID: question.id }]
                                                                });
                                                            }} />}
                                                    </Form.Item>
                                                );
                                            }}
                                        </Form.List>
                                    </Col>

                                </Row>


                            </div>
                        );
                    })}
                    <Row justify='end'>
                        <Col style={{ margin: '0 8px 0 0' }}>

                            <Button htmlType="button" onClick={() => {
                                setVisible(false);
                                form.resetFields();
                            }}>
                                Close
                            </Button>
                        </Col>

                        <Col>
                            <Button onClick={() => onFinish()} loading={loading} disabled={loading} type="primary" >
                                {'Add'}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    );

};

export default AddLoginRequestModal;;