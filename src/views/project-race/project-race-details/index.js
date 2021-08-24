import { Card, Spin, Tabs } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import * as projectRaceServices from '../../../services/projects-races';
import { useParams } from 'react-router-dom';
import InfoTab from './info-tab';
import QuestionsTab from './question-tab/questions-tab';
import LoginRequestsTab from './login-request-tab/login-request-tab';
import * as projectRacesQuestionsServices from '../../../services/projects-races/projects-races-questions';

const ProjectRaceDetails = () => {
    const { id } = useParams();
    const [projectRaceInfo, setProjectRace] = useState();
    const [spinning, setSpinning] = useState(true);

    useEffect(() => {
        (async () => {
            const data = await projectRaceServices.showProjectsRacesById(id);
            setProjectRace(data.data.data);
            setSpinning(false);
        })();
    }, [id]);
    const getData = useCallback((setCourses, setSpinning) => {
        setSpinning(true);
        (async () => {
            const data = await projectRacesQuestionsServices.showAllByQuestionID(id);
            setCourses(data.data.data);
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
                                <InfoTab projectRaceInfo={projectRaceInfo} />
                            </Tabs.TabPane>
                            <Tabs.TabPane key='questions' tab="ProjectRace Questions">
                                <QuestionsTab projectRaceID={id} getData={getData} />
                            </Tabs.TabPane>
                            <Tabs.TabPane key='questions-login-requests' tab="ProjectRace Login Requests">
                                <LoginRequestsTab projectRaceID={id} getQuestions={getData} />
                            </Tabs.TabPane>
                        </Tabs>

                    </Card>
                </Spin>
            </div>
        </>
    );
};

export default ProjectRaceDetails;