import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Generator from "./Generator";


const LFSRTabs = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="pierwszy">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="pierwszy">Generator</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="pierwszy">
              <Generator />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default LFSRTabs;
