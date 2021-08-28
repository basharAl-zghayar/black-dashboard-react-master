/* eslint-disable react-hooks/exhaustive-deps */
import { Spin, Row, Table } from 'antd';
import React, { useState, useEffect } from 'react';
import { columns } from './columns';
const StudentsTab = ({ getData }) => {

    const [spinning, setSpinning] = useState(true);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getData(setStudents, setSpinning);
    }, []);

    return (
        <>
            <Spin spinning={spinning} >
                <Row>
                    <Table dataSource={students} columns={columns} style={{
                        width: '100%',
                        padding: ' 16px 0 0',
                        borderRadius: '7px'
                    }} />
                </Row>

            </Spin>
        </>
    );
};

export default StudentsTab;