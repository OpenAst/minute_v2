import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react'
import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

const Dashboard = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center">Dashboard</h1>
      <Row className="mt-4">
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Welcome User!</CardTitle>
              <p>Your recent activity:</p>
              {/* Add recent activity list or summary here */}
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Statistics</CardTitle>
              <p>Some cool stats here.</p>
              {/* Add statistics here */}
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Updates</CardTitle>
              <p>Latest updates and notifications.</p>
              {/* Add updates or notifications */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
