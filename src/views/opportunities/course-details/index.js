import { Card, Spin, Tabs } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import * as opportunitiesServices from '../../../services/opportunities/index';
import { useParams } from 'react-router-dom';
import InfoTab from './info-tab';
import QuestionsTab from './question-tab/questions-tab';
import LoginRequestsTab from './login-request-tab/login-request-tab';
import * as coursesQuestionsServices from '../../../services/opportunities/opportunities-question/index';

const OpportunityDetails = () => {
    const { id } = useParams();
    const [opportunityInfo, setOpportunityInfo] = useState();
    const [spinning, setSpinning] = useState(true);

    useEffect(() => {
        (async () => {
            const data = await opportunitiesServices.showOpportunityById(id);

            setOpportunityInfo(data.data.data);
            setSpinning(false);
        })();
    }, [id]);
    const getData = useCallback((setCourses, setSpinning) => {
        setSpinning(true);
        (async () => {
            const data = await coursesQuestionsServices.showAllByQuestionID(id);
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
                                <InfoTab opportunityInfo={opportunityInfo} />
                            </Tabs.TabPane>
                            <Tabs.TabPane key='questions' tab="Opportunity Questions">
                                <QuestionsTab opportunityID={id} getData={getData} />
                            </Tabs.TabPane>
                            <Tabs.TabPane key='questions-login-requests' tab="Opportunity Login Requests">
                                <LoginRequestsTab opportunityID={id} getQuestions={getData} />
                            </Tabs.TabPane>
                        </Tabs>

                    </Card>
                </Spin>
            </div>
        </>
    );
};

export default OpportunityDetails;