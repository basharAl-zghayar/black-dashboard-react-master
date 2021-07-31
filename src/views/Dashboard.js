
import React from "react";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { Empty } from 'antd';
function Dashboard() {

  return (
    <>
      <div className="content">

        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                  Course Login Requests
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Empty />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                  Project Race Login Requests
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Empty />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                  Completed Tasks
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Empty />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                  Course Login Requests
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Empty />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                  Project Race Login Requests
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Empty />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                  Completed Tasks
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Empty />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
