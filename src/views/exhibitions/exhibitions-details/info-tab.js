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
                            <Text strong>Couch:</Text>
                        </Col>
                        <Col>
                            <Text >{exhibitionInfo?.couchName}</Text>
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

                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>Cost:</Text>
                        </Col>
                        <Col>
                            <Text >{exhibitionInfo?.cost + ' SYP'}</Text>
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
                            <Text strong>StartTime:</Text>
                        </Col>
                        <Col>
                            <Text >{exhibitionInfo?.startTime}</Text>
                        </Col>
                    </Row>
                </Col>

                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>EndTime:</Text>
                        </Col>
                        <Col>
                            <Text >{exhibitionInfo?.endTime}</Text>
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
                            <Text >{exhibitionInfo?.CurrentStudents}</Text>
                        </Col>
                    </Row>
                </Col>

                <Col style={{ border: '1px solid #ccc', width: '49%', padding: '8px 16px ', borderRadius: '5px' }}>
                    <Row justify='space-between' align='middle'  >
                        <Col>
                            <Text strong>maxStudents:</Text>
                        </Col>
                        <Col>
                            <Text >{exhibitionInfo?.maxStudents}</Text>
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
                            <Text >{exhibitionInfo?.description}</Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default InfoTab;