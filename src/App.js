import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import './App.css';

const App = () => (
  <Container>
    <div> Stack the columns on mobile by making one full-width and the other half-width </div>
    <Row>
      <Col xs={12} md={8}>
        <Alert variant='primary'>
          xs=12 md=8
        </Alert>
      </Col>
      <Col xs={6} md={4}>
        <Alert variant='primary'>
          xs=6 md=4
        </Alert>
      </Col>
    </Row>

    <div> Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop </div>
    <Row>
      <Col xs={12} md={6} lg ={4}>
        <Alert variant='primary'>
          xs=12 md=6 lg=4
        </Alert>
      </Col>
      <Col xs={12} md={6} lg ={4}>
        <Alert variant='primary'>
          xs=12 md=6 lg=4
        </Alert>
      </Col>
      <Col xs={12} md={6} lg ={4}>
        <Alert variant='primary'>
          xs=12 md=6 lg=4
        </Alert>
      </Col>
    </Row>

    <div> Columns are always 50% wide, on mobile and desktop </div>
    <Row>
      <Col xs={6} md={6}>
        <Alert variant='primary'>
          xs=6 md=6
        </Alert>
      </Col>
      <Col xs={6} md={6}>
        <Alert variant='primary'>
          xs=6 md=6
        </Alert>
      </Col>
    </Row>
  </Container>
);

export default App;