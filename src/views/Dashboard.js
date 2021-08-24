
import React, { useEffect, useState } from "react";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { Empty, Spin } from 'antd';
import * as companiesServices from '../services/companies/index';
import * as trainersServices from '../services/trainers/index';
import * as volunteersServices from '../services/volunteers/index';
import * as coursesServices from '../services/courses/index';
import * as cLoServices from '../services/courses/course-login-request';
import * as oppLoServices from '../services/opportunities/opportunities-login-request';
import * as exhibLoServices from '../services/exhibition/exhibition-login-request';
import * as prLoServices from '../services/projects-races';

function Dashboard() {
  const [spinning, setSpinning] = useState(true);

  const [companies, setCompanies] = useState([]);
  const [courses, setCourses] = useState([]);

  const [trainer, setTrainer] = useState([]);
  const [volunteer, setVolunteers] = useState([]);
  const [courseLoginRequest, setCourseLoginRequest] = useState([]);
  const [exhibLoginRequest, setExhibeLoginRequest] = useState([]);
  const [prLoginRequest, setPrLoginRequest] = useState([]);
  const [oppLoginRequest, setOppLoginRequest] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    setSpinning(true);
    (async () => {
      const data = await companiesServices.showAllCompanies();
      setCompanies(data.data.data);
      setSpinning(false);
    })();
    (async () => {
      const data = await trainersServices.showAllTrainers();
      setTrainer(data.data.data);
      setSpinning(false);
    })();
    (async () => {
      const data = await volunteersServices.showAllVolunteers();
      setVolunteers(data.data.data);
      setSpinning(false);
    })();
    (async () => {
      const data = await coursesServices.showAllCourses();
      setCourses(data.data.data);
      setSpinning(false);
    })();
    (async () => {
      const data = await cLoServices.showAllCourseLoginRequest();
      setCourseLoginRequest(data.data.data);
      setSpinning(false);
    })();
    (async () => {
      const data = await exhibLoServices.showAll();
      setExhibeLoginRequest(data.data.data);
      setSpinning(false);
    })();
    (async () => {
      const data = await oppLoServices.showAll();
      setPrLoginRequest(data.data.data);
      setSpinning(false);
    })();
    (async () => {
      const data = await prLoServices.showAllProjectsRaces();
      setOppLoginRequest(data.data.data);
      setSpinning(false);
    })();
  };
  return (
    <>
      <div className="content">

        <Spin spinning={spinning} >
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h3">
                    Companies
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    {companies?.length ? <div>
                      <h1 style={{ fontWeight: 'bolder', padding: '15%' }}>
                        {companies?.length + ' Companies'}
                      </h1>
                    </div> : <Empty />}

                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h3">
                    Volunteers
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <div className="chart-area">
                      {volunteer?.length ? <div>
                        <h1 style={{ fontWeight: 'bolder', padding: '15%' }}>
                          {volunteer?.length + ' Volunteers'}
                        </h1>
                      </div> : <Empty />}

                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h3">
                    Courses
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <div className="chart-area">
                      {courses?.length ? <div>
                        <h1 style={{ fontWeight: 'bolder', padding: '15%' }}>
                          {courses?.length + ' Courses'}
                        </h1>
                      </div> : <Empty />}

                    </div>
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
                    {courseLoginRequest?.length ? <div>
                      <h1 style={{ fontWeight: 'bolder', padding: '15%' }}>
                        {courseLoginRequest?.length + ' Login Requests'}
                      </h1>
                    </div> : <Empty />}

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
                    {prLoginRequest?.length ? <div>
                      <h1 style={{ fontWeight: 'bolder', padding: '15%' }}>
                        {prLoginRequest?.length + ' Login Requests'}
                      </h1>
                    </div> : <Empty />}

                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h3">
                    Trainers
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <div className="chart-area">
                      {trainer?.length ? <div>
                        <h1 style={{ fontWeight: 'bolder', padding: '15%' }}>
                          {courses?.length + ' Trainers'}
                        </h1>
                      </div> : <Empty />}

                    </div>
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
                    Exhibition Login Requests
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    {exhibLoginRequest?.length ? <div>
                      <h1 style={{ fontWeight: 'bolder', padding: '15%' }}>
                        {exhibLoginRequest?.length + ' Login Requests'}
                      </h1>
                    </div> : <Empty />}

                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h3">
                    Opportunities Login Requests
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    {oppLoginRequest?.length ? <div>
                      <h1 style={{ fontWeight: 'bolder', padding: '15%' }}>
                        {oppLoginRequest?.length + ' Login Requests'}
                      </h1>
                    </div> : <Empty />}

                  </div>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Spin>
      </div>
    </>
  );
}

export default Dashboard;
