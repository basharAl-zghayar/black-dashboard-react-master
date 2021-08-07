/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Modal, Row, Spin, Table, Tabs, Tooltip, Typography } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

import * as expensiveServices from '../../../services/costs/expansive-costs/index';
import { useParams } from 'react-router-dom';
import { columns } from './columns';
import AddExpansiveModal from './add-expansive';
// import InfoTab from './info-tab';

const ItemCostDetails = () => {
    const { code } = useParams();
    const [itemCostInfo, setItemCostInfo] = useState();
    const [spinning, setSpinning] = useState(true);
    const [isExpansiveModalVisible, setExpansiveModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const [record, setRecord] = useState();
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const handleDelete = () => {
        setSpinning(true);

        (async () => {
            await expensiveServices.deleteExpansiveCosts(record.id);
            setDeleteModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const addExpansive = (values) => {
        setSpinning(true);
        (async () => {
            await expensiveServices.addExpansiveCosts({ ...values, itemCode: record.itemCode });
            setExpansiveModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const updateExpansive = (values) => {
        setSpinning(true);
        (async () => {
            await expensiveServices.updateExpansiveCosts({ ...values, itemCode: record.itemCode });
            setExpansiveModalVisible(false);
            getData();
            setSpinning(false);
        })();
    };
    const getData = () => {
        setSpinning(true);
        (async () => {
            const data = await expensiveServices.showExpansiveByItemCode(code);
            setItemCostInfo(data.data.data);
            setSpinning(false);
        })();
    };

    const actionColumn = {
        key: 'actions',
        width: '13%',
        className: 'actions',
        render: (text, record, index) => {
            return (
                <Row justify="space-between">
                    <Col>
                        <Tooltip title={'Delete Expansive'}>
                            <Button
                                type='link'
                                danger
                                size="small"
                                shape="circle"
                                onClick={() => {
                                    setDeleteModalVisible(true);
                                    setRecord(record);
                                }}
                            >
                                <DeleteOutlined />
                            </Button>
                        </Tooltip>
                    </Col>
                    <Col>
                        <Tooltip title={'Edit Course'}>
                            <Button
                                type='link'
                                size="small"
                                shape="circle"
                                onClick={() => {
                                    setRecord(record);
                                    setExpansiveModalVisible(true);
                                    setIsUpdate(true);
                                }}
                            >
                                <EditOutlined />
                            </Button>
                        </Tooltip>
                    </Col>
                </Row>
            );
        },
    };
    return (
        <>
            <div className="content">
                <Card style={{ minHeight: '85vh', borderRadius: '5px' }}>
                    <Tabs>
                        <Tabs.TabPane key='info' tab="Expansive Cost Details">
                            <Spin spinning={spinning} >
                                <Row justify='end' align='middle'>
                                    <Button type='primary' onClick={() => {
                                        setExpansiveModalVisible(true);
                                        setIsUpdate(false);
                                    }} >
                                        <Row align='middle'>
                                            <PlusOutlined /> Add  Expansive
                                        </Row>
                                    </Button>
                                </Row>
                                <Row>
                                    <Table dataSource={itemCostInfo} columns={[...columns, actionColumn]} style={{
                                        width: '100%',
                                        padding: ' 16px 0 0',
                                        borderRadius: '7px'
                                    }} />
                                </Row>
                                <AddExpansiveModal
                                    isVisible={isExpansiveModalVisible}
                                    setVisible={setExpansiveModalVisible}
                                    addExpansive={addExpansive}
                                    updateExpansive={updateExpansive}
                                    formValues={record}
                                    isUpdate={isUpdate}
                                    itemCode={code}
                                />
                                <Modal
                                    title='Delete  Expansive'
                                    visible={isDeleteModalVisible}
                                    onCancel={() => { setDeleteModalVisible(false); }}
                                    onOk={() => handleDelete()}

                                >
                                    <Typography.Text strong>
                                        Are you Sure You Want To Delete This  Expansive ?
                                    </Typography.Text>

                                </Modal>
                            </Spin>
                        </Tabs.TabPane>

                    </Tabs>

                </Card>

            </div>
        </>
    );
};

export default ItemCostDetails;