import { Col, Row, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;
const InfoTab = ({ exhibitionInfo }) => {

    return (
        <>
            <Row justify='space-between' align='middle' style={{ marginTop: '16px' }}>
                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>Title:</Text>
                        </Col>
                        <Col>
                            <Text >{exhibitionInfo?.title}</Text>
                        </Col>
                    </Row>
                </Col>

                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>Manager:</Text>
                        </Col>
                        <Col>
                            <Text >{exhibitionInfo?.manager}</Text>
                        </Col>
                    </Row>
                </Col>

            </Row>

            <Row justify='space-between' align='middle' style={{ marginTop: '16px' }}>
                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>StartDate:</Text>
                        </Col>
                        <Col>
                            <Text >{exhibitionInfo?.startDate}</Text>
                        </Col>
                    </Row>
                </Col>

                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>EndDate:</Text>
                        </Col>
                        <Col>
                            <Text >{exhibitionInfo?.endDate}</Text>
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
                            <Text >{exhibitionInfo?.location}</Text>
                        </Col>
                    </Row>
                </Col>

            </Row>
            <Row justify='space-between' align='middle' style={{ marginTop: '16px' }}>
                <Col style={{ border: '1px solid #ccc', width: '100%', padding: '8px 16px ', borderRadius: '5px', height: '200px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Row>

                                <Text strong>Description:</Text>
                            </Row>
                            <br />
                            <Row>

                                <Text >{exhibitionInfo?.description}</Text>
                            </Row>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default InfoTab;