import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div style={{ marginBottom: "15px" }}>
        <Navbar color="light" light expand="md" style={{ display: "flex" }}>
          <div style={{ width: "155", height: "50" }}>
            <NavbarBrand href="/">
              <img src={"images/logo.png"} alt=""></img>
            </NavbarBrand>
          </div>

          <NavbarToggler onClick={this.toggle} />
          <Nav
            className="ml-auto"
            navbar
            style={{ display: "flex", margin: "auto" }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <NavItem>
                <NavLink href="/tenants">
                  <h5>Kiracılar</h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/homes">
                  <h5>Evler</h5>
                </NavLink>
              </NavItem>
            </div>
          </Nav>
          <Nav className="ml-auto" navbar>
            <div>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Profil
                </DropdownToggle>
                <DropdownMenu>
                  <Link style={{ textDecoration: "none" }} to={"/login"}>
                    <DropdownItem>Giriş Yap</DropdownItem>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to={"/register"}>
                    <DropdownItem>Kayıt Ol</DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
