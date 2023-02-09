import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import HomeList from "../homes/HomeList";
import Navi from "../navi/Navi";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navi />
        <Row>
          <Col xs="3">
            <CategoryList />
          </Col>
          <Col xs="9">
            <HomeList />
          </Col>
        </Row>
      </div>
    );
  }
}
