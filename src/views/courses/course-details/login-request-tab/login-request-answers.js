import React, { useState, useEffect } from 'react';
import { Row, Modal, Spin, Table } from 'antd';
import { columns } from './login-columns';

const StudentAnswersModal = ({ isVisible, setVisible, questions, answers }) => {
    const [loading, setLoading] = useState(false);
    const [loginQuestions, setLoginQuestions] = useState([]);
    const [loginAnswers, setLoginAnswers] = useState([]);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        setLoginAnswers(answers);
        setLoginQuestions(questions);
    }, [questions, answers]);

    useEffect(() => {
        setLoading(true);
        const data = loginQuestions.map((question, index) => {
            if (question?.id === loginAnswers[index]?.questionID)
                question.answers = loginAnswers[index];
            return question;
        });
        setDataSource(data);
        setLoading(false);

    }, [loginQuestions, loginAnswers]);


    return (
        <>
            <Modal
                title='Student Answers For Course Login Request'
                visible={isVisible}
                onCancel={() => { setVisible(false); }}
                width={675}
            >
                <>
                    <Spin spinning={loading}>

                        <Row >
                            <Table
                                dataSource={dataSource}
                                columns={columns}
                                style={{
                                    width: '100%',
                                }} />
                        </Row>
                    </Spin>
                </>
            </Modal>
        </>
    );

};

export default StudentAnswersModal;;