import { Card, Spin, Tabs } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import * as coursesServices from '../../../services/courses/index';
import { useParams } from 'react-router-dom';
import InfoTab from './info-tab';
import QuestionsTab from './question-tab/questions-tab';
import LoginRequestsTab from './login-request-tab/login-request-tab';
import * as coursesQuestionsServices from '../../../services/courses/question-course/index';
import * as coursesLoginServices from '../../../services/courses/course-login-request/index';
import StudentsTab from './students';

const CourseDetails = () => {
    const { id } = useParams();
    const [courseInfo, setCourseInfo] = useState();
    const [spinning, setSpinning] = useState(true);

    useEffect(() => {
        setSpinning(true);

        (async () => {
            const data = await coursesServices.showCourseById(id);
            setCourseInfo(data.data.data);
            setSpinning(false);
        })();
    }, [id]);
    const getData = useCallback((setCourses, setSpinning) => {
        setSpinning(true);
        (async () => {
            const data = await coursesQuestionsServices.showQuestionById(id);
            setCourses(data.data.data);
            setSpinning(false);
        })();
    }, [id]);

    const getStudents = useCallback((setCourses, setSpinning) => {
        setSpinning(true);
        (async () => {
            const data = await coursesLoginServices.showCourseLoginRequestAcceptedLogs();
            setCourses(data.data.data);
            setSpinning(false);
        })();
    }, []);
    return (
        <>
            <div className="content">
                <Spin spinning={spinning}>
                    <Card style={{ minHeight: '85vh', borderRadius: '5px' }}>
                        <Tabs>
                            <Tabs.TabPane key='info' tab="Info">
                                <InfoTab courseInfo={courseInfo} />
                            </Tabs.TabPane>
                            <Tabs.TabPane key='questions' tab="Course Questions">
                                <QuestionsTab courseID={id} getData={getData} />
                            </Tabs.TabPane>
                            <Tabs.TabPane key='questions-login-requests' tab="Course Login Requests">
                                <LoginRequestsTab courseID={id} getQuestions={getData} />
                            </Tabs.TabPane>
                            <Tabs.TabPane key='students-tab' tab="Course Students">
                                <StudentsTab getData={getStudents} />
                            </Tabs.TabPane>
                        </Tabs>

                    </Card>
                </Spin>
            </div>
        </>
    );
};

export default CourseDetails;