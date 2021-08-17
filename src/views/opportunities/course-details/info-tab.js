import { Col, Row, Tag, Typography } from 'antd';
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
                            <Text strong>Last Date For Register:</Text>
                        </Col>
                        <Col>
                            <Text >{opportunityInfo?.lastDateForRegister}</Text>
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
                                        <Tag color='orange'>
                                            Part Time
                                        </Tag>
                                    </Row>
                                </>)}{
                                    opportunityInfo?.time === 2 && <>
                                        <Row>
                                            <Tag color='green'>
                                                Full Time
                                            </Tag>
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
                                        <Tag color='green'>
                                            Placement
                                        </Tag>
                                    </Row>
                                </>)}{
                                    opportunityInfo?.type === 2 && <>
                                        <Row>
                                            <Tag color='orange'>
                                                Training
                                            </Tag>
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
                            <Text strong >Salary:</Text>
                        </Col>
                        <Col>
                            <Text >{opportunityInfo?.salary + ' SYP'}</Text>
                        </Col>
                    </Row>
                </Col>

                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>Scope:</Text>
                        </Col>
                        <Col>
                            <Text >{opportunityInfo?.scope}</Text>
                        </Col>
                    </Row>
                </Col>

            </Row>
            <Row justify='space-between' align='middle' style={{ marginTop: '16px' }}>
                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>Free Desks:</Text>
                        </Col>
                        <Col>
                            <Text >{opportunityInfo?.freeDesks}</Text>
                        </Col>
                    </Row>
                </Col>

                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>State:</Text>
                        </Col>
                        <Col>
                            <Text >{
                                opportunityInfo?.state === 1 && (<>
                                    <Row>
                                        <Tag color='green'>
                                            Active
                                        </Tag>
                                    </Row>
                                </>)}{
                                    opportunityInfo?.state === 2 && <>
                                        <Row>
                                            <Tag color='orange'>
                                                Inactive
                                            </Tag>
                                        </Row>
                                    </>
                                }
                                {
                                    opportunityInfo?.state === 3 && <>
                                        <Row>
                                            <Tag color='red'>
                                                Deleted
                                            </Tag>
                                        </Row>
                                    </>
                                }
                                {
                                    opportunityInfo?.state === 4 && <>
                                        <Row>
                                            <Tag color='gray'>
                                                Finished
                                            </Tag>
                                        </Row>
                                    </>
                                }
                            </Text>
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