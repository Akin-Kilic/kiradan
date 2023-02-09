import React, { Component } from "react";
import { Badge, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as homeActions from "../../redux/actions/homeActions";
import "./HomeList.css";

class HomeList extends Component {
  componentDidMount() {
    this.props.actions.getHomes();
  }

  render() {
    return (
      <div>
        <h3>
          <Badge style={{ marginRight: "10px" }} color="warning">
            Homes
          </Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>

        <div className="content grid3 mtop">
          <Row>
            {this.props.homes.map((homes) => (
              <Col xs="6" key={homes.id} style={{ marginBottom: "1rem" }}>
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr, 1fr" }}
                >
                  <div className="box shadow" style={{ borderRadius: "10px" }}>
                    <div className="img" style={{ margin: "10px" }}>
                      <img
                        src={homes.image}
                        alt=""
                        style={{ borderRadius: "10px", maxWidth: "100%" }}
                      />
                    </div>
                    <div className="text">
                      <div className="category flex"></div>
                      <h4 style={{ textAlign: "center" }}>{homes.name}</h4>
                      <p style={{ textAlign: "center" }}>
                        <i className="fa fa-location-dot"></i> {homes.location}
                      </p>
                    </div>
                    <div style={{ padding: "0.2rem 1rem 1rem 1rem" }}>
                      <button style={{ textAlign: "center", backgroundColor:"crimson" }} className="btn2">
                        {homes.price} TL
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    homes: state.homeListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getHomes: bindActionCreators(homeActions.getHomes, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeList);
