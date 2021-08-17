import { Card, Spin, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import * as coursesServices from '../../../services/courses/index';
import { useParams } from 'react-router-dom';
import InfoTab from './info-tab';
import QuestionsTab from './question-tab/questions-tab';
import LoginRequestsTab from './login-request-tab/login-request-tab';

const CourseDetails = () => {
    const { id } = useParams();
    const [courseInfo, setCourseInfo] = useState();
    const [spinning, setSpinning] = useState(true);

    useEffect(() => {
        (async () => {
            const data = await coursesServices.showCourseById(id);

            setCourseInfo(data.data.data);
            setSpinning(false);
        })();
    }, [id]);

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
                                <QuestionsTab courseID={id} />
                            </Tabs.TabPane>
                            <Tabs.TabPane key='questions-login-requests' tab="Course Login Requests">
                                <LoginRequestsTab courseID={id} />
                            </Tabs.TabPane>
                        </Tabs>

                    </Card>
                </Spin>
            </div>
        </>
    );
};

export default CourseDetails;