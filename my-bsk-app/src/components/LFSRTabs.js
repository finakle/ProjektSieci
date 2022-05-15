import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Generator from "./Generator";
import Szyfr from "./Szyfr";
import Pliki from "./Pliki";
import Obrazy from "./Obrazy";
import Des from "./Des";
import DesPliki from "./DesPliki";


const LFSRTabs = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="pierwszy">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="pierwszy">Generator</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="drugi">Szyfrowanie</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="trzeci">Pliki</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="czwarty">Obrazy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="piaty">DES szyfr</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="szosty">DES obrazy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="siodmy">DES pliki</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="pierwszy">
              <Generator />
            </Tab.Pane>
            <Tab.Pane eventKey="drugi">
              <Szyfr />
            </Tab.Pane>
            <Tab.Pane eventKey="trzeci">
              <Pliki />
            </Tab.Pane>
            <Tab.Pane eventKey="czwarty">
              <Obrazy />
            </Tab.Pane>
            <Tab.Pane eventKey="piaty">
              <Des />
            </Tab.Pane>
            <Tab.Pane eventKey="siodmy">
              <DesPliki />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default LFSRTabs;