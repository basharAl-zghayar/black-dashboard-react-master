import { Col, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import * as companiesServices from '../../../services/companies';

const { Text } = Typography;
const InfoTab = ({ opportunityInfo }) => {
    const [company, setCompany] = useState();

    useEffect(() => {
        (async () => {
            const data = await companiesServices.showCompanyById(opportunityInfo?.companyID);
            setCompany(data.data.data);
        })();
    }, [opportunityInfo]);

    return (
        <>
            <Row justify='space-between' align='middle' style={{ marginTop: '16px' }}>
                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>Title:</Text>
                        </Col>
                        <Col>
                            <Text >{opportunityInfo?.title}</Text>
                        </Col>
                    </Row>
                </Col>

                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>Company:</Text>
                        </Col>
                        <Col>
                            <Text >{company?.name}</Text>
                        </Col>
                    </Row>
                </Col>

            </Row>
            <Row justify='space-between' align='middle' style={{ marginTop: '16px' }}>
                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>Location:</Text>
                        </Col>
                        <Col>
                            <Text >{opportunityInfo?.location}</Text>
                        </Col>
                    </Row>
                </Col>

                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>Cost:</Text>
                        </Col>
                        <Col>
                            <Text >{opportunityInfo?.cost + ' SYP'}</Text>
                        </Col>
                    </Row>
                </Col>

            </Row>
            <Row justify='space-between' align='middle' style={{ marginTop: '16px' }}>
                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>Work Time:</Text>
                        </Col>
                        <Col>
                            <Text >{
                                opportunityInfo?.time === 1 && (<>
                                    <Row>
                                        Part Time
                                    </Row>
                                </>)}{
                                    opportunityInfo?.time === 2 && <>
                                        <Row>


                                        </Row>
                                    </>
                                }</Text>
                        </Col>
                    </Row>
                </Col>

                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>Type:</Text>
                        </Col>
                        <Col>
                            <Text >{
                                opportunityInfo?.type === 1 && (<>
                                    <Row>
                                        Placement
                                    </Row>
                                </>)}{
                                    opportunityInfo?.type === 2 && <>
                                        <Row>
                                            Training

                                        </Row>
                                    </>
                                }</Text>
                        </Col>
                    </Row>
                </Col>

            </Row>
            <Row justify='space-between' align='middle' style={{ marginTop: '16px' }}>
                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>StartTime:</Text>
                        </Col>
                        <Col>
                            <Text >{opportunityInfo?.startTime}</Text>
                        </Col>
                    </Row>
                </Col>

                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>EndTime:</Text>
                        </Col>
                        <Col>
                            <Text >{opportunityInfo?.endTime}</Text>
                        </Col>
                    </Row>
                </Col>

            </Row>
            <Row justify='space-between' align='middle' style={{ marginTop: '16px' }}>
                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>CurrentStudents:</Text>
                        </Col>
                        <Col>
                            <Text >{opportunityInfo?.CurrentStudents}</Text>
                        </Col>
                    </Row>
                </Col>

                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>maxStudents:</Text>
                        </Col>
                        <Col>
                            <Text >{opportunityInfo?.maxStudents}</Text>
                        </Col>
                    </Row>
                </Col>

            </Row>
            <Row justify='space-between' align='middle' style={{ marginTop: '16px' }}>
                <Col style={{ border: '1px solid #ccc', width: '100%', padding: '8px 16px ', borderRadius: '5px', height: '200px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>Description:</Text>
                        </Col>
                        <Col>
                            <Text >{opportunityInfo?.description}</Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default InfoTab;