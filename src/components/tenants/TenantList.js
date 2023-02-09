import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tenantActions from "../../redux/actions/tenantActions";
import { Row, Col, Badge } from "reactstrap";
import FilterTenant from "./FilterTenants";
import Navi from "../navi/Navi";

class TenantList extends Component {
  componentDidMount() {
    this.props.actions.getTenants();
  }

  render() {
    return (
      <div>
        <Navi />
        <Row>
          <Col xs="3">
            <FilterTenant />
          </Col>
          <Col xs="9">
            <div className="content grid3 mtop">
              <h3>
                <Badge color="warning">Kiracılar</Badge>
              </h3>
              <Row>
                {this.props.tenants.map((tenants) => (
                  <Col xs="6" key={tenants.id} style={{ marginBottom: "1rem" }}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr, 1fr",
                      }}
                    >
                      <div
                        className="box shadow"
                        style={{ borderRadius: "10px" }}
                      >
                        <div className="img" style={{ margin: "10px" }}>
                          <img
                            src={tenants.image}
                            alt=""
                            style={{
                              borderRadius: "10px",
                              maxWidth: "100%",
                            }}
                          />
                        </div>
                        <div className="text">
                          <div
                            className="category flex"
                            style={{
                              display: "flex",
                              textAlign: "center",
                            }}
                          >
                            <h4
                              style={{
                                marginLeft: "auto",
                                marginRight: "10px",
                              }}
                            >
                              {tenants.name}
                            </h4>
                            <h4 style={{ marginRight: "auto" }}>
                              {tenants.surname}
                            </h4>
                          </div>

                          <p style={{ textAlign: "center" }}>{tenants.info}</p>
                          <h5 style={{ textAlign: "center" }}>
                            {tenants.phone}
                          </h5>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <Badge style={{ fontSize: "18px" }} color="danger">
                            Puan: {tenants.point}
                          </Badge>
                        </div>
                        <div style={{ padding: "0.2rem 1rem 1rem 1rem" }}>
                          <button
                            style={{
                              textAlign: "center",
                              backgroundColor: "orchid",
                            }}
                            className="btn2"
                          >
                            Bütçe: {tenants.budget}
                          </button>
                          <button className="btn3">
                            <i
                              style={{ alignItems: "right" }}
                              className="fa fa-heart"
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tenants: state.tenantListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getTenants: bindActionCreators(tenantActions.getTenants, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantList);
