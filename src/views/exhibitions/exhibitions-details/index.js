import { Card, Spin, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import * as exhibitionsServices from '../../../services/exhibition/index';
import { useParams } from 'react-router-dom';
import InfoTab from './info-tab';
import QuestionsTab from './question-tab/questions-tab';
import LoginRequestsTab from './login-request-tab/login-request-tab';

const ExhibitionDetails = () => {
    const { id } = useParams();
    const [exhibitionInfo, setExhibitionInfo] = useState();
    const [spinning, setSpinning] = useState(true);

    useEffect(() => {
        (async () => {
            const data = await exhibitionsServices.showExhibitionById(id);
            setExhibitionInfo(data.data.data);
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
                                <InfoTab exhibitionInfo={exhibitionInfo} />
                            </Tabs.TabPane>
                            <Tabs.TabPane key='questions' tab="Exhibition Questions">
                                <QuestionsTab exhibitionID={id} />
                            </Tabs.TabPane>
                            <Tabs.TabPane key='questions-login-requests' tab="Exhibition Login Requests">
                                <LoginRequestsTab exhibitionID={id} />
                            </Tabs.TabPane>
                        </Tabs>

                    </Card>
                </Spin>
            </div>
        </>
    );
};

export default ExhibitionDetails;