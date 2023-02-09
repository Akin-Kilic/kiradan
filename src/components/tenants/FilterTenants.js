import React, { Component } from "react";
import { Badge } from "reactstrap";
import "./filtertenants.css";
import {
  MDBInput,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBCheckbox,
  MDBRadio,
} from "mdb-react-ui-kit";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as cityActions from "../../redux/actions/cityActions";

// TODO: Konum, Puan(belirli metrikleri çıkart kirada kalma süresi, kovulmuş mu, evi nasıl kullanmış, kiralarını ödemişmi...), Bütçe, ev oda sayısı, bina yaşı

class FilterTenant extends Component {
  componentDidMount() {
    this.props.actions.getCities();
  }

  render() {
    return (
      <div>
        <h2>
          <Badge color="warning">Filter</Badge>
        </h2>

        <div id="arkaplan">
          Adres
          <MDBDropdown group className="shadow-0 form formdrop">
            <MDBDropdownToggle color="light">İl</MDBDropdownToggle>
            <MDBDropdownMenu className="formdrop dropdown-menu-end">
              {this.props.cities.map((city) => (
                <MDBDropdownItem key={city.plaka} link>
                  {city.il}
                </MDBDropdownItem>
              ))}
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown group className="shadow-0 form formdrop">
            <MDBDropdownToggle color="light">İlçe</MDBDropdownToggle>
            <MDBDropdownMenu className="formdrop">
              <MDBDropdownItem link></MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown group className="shadow-0 form formdrop">
            <MDBDropdownToggle color="light">Semt/Mahalle</MDBDropdownToggle>
            <MDBDropdownMenu className="formdrop">
              <MDBDropdownItem link></MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>

        <div id="arkaplan">
          Bütçe
          <MDBInput
            className="form"
            label="Minimum TL"
            id="form1"
            type="text"
          />
          <MDBInput
            className="form"
            label="Maksimum TL"
            id="form2"
            type="text"
          />
        </div>
        <div id="arkaplan">
          <MDBDropdown group className="shadow-0 form formdrop">
            <MDBDropdownToggle color="light">Banyo Sayısı</MDBDropdownToggle>
            <MDBDropdownMenu
              className="formdrop"
              style={{ padding: "8px" }}
              responsive="lg-start"
            >
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault1"
                label="0"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault2"
                label="1"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault3"
                label="2"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault4"
                label="3"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault5"
                label="4"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault6"
                label="5"
              />
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
        <div id="arkaplan">
          <MDBDropdown group className="shadow-0 form formdrop">
            <MDBDropdownToggle color="light">Balkon</MDBDropdownToggle>
            <MDBDropdownMenu
              className="formdrop"
              style={{ padding: "8px" }}
              responsive="lg-start"
            >
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Var"
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Yok"
              />
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
        <div id="arkaplan">
          <MDBDropdown group className="shadow-0 form formdrop">
            <MDBDropdownToggle color="light">Eşyalı</MDBDropdownToggle>
            <MDBDropdownMenu
              className="formdrop"
              style={{ padding: "8px" }}
              responsive="lg-start"
            >
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Evet"
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Hayır"
              />
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
        <div className="button">
          <button
            type="button"
            style={{
              backgroundColor: "#938229",
              width: "100%",
              height: "45px",
              textAlign: "center",
              marginBottom: "10px",
              border: "1px solid #938229",
              borderRadius: "15px",
            }}
          >
            FİLTRELE
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCity: state.changeCityReducer,
    cities: state.cityListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCities: bindActionCreators(cityActions.getCities, dispatch),
      changeCity: bindActionCreators(cityActions.changeCity, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTenant);
