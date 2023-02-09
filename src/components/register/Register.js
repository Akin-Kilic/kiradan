import React, { Component } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

//TODO: bir if koşulu at ve tenant ya da homeowner seçiciliğini sağla
// TODO: kullanıcı kayıtlarında seçilen chechbox a göre db.json a kaydet

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordretry: "",
      phone: "",
      identityno: "",
      homeowner: true,
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:3001/tenants", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const {
      name,
      surname,
      email,
      password,
      passwordretry,
      phone,
      identityno,
      // homeowner,
    } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <MDBContainer fluid>
          <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Kayıt Ol
                  </p>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      label="İsim"
                      id="form1"
                      type="text"
                      name="name"
                      value={name}
                      className="w-100"
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user-tag me-3" size="lg" />
                    <MDBInput
                      label="Soyisim"
                      id="form2"
                      type="text"
                      name="surname"
                      value={surname}
                      className="w-100"
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      label="Email"
                      id="form3"
                      type="email"
                      name="email"
                      value={email}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Şifre"
                      id="form4"
                      type="password"
                      name="password"
                      value={password}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size="lg" />
                    <MDBInput
                      label="Şifreni Tekrar Gir"
                      id="form5"
                      type="password"
                      name="passwordretry"
                      value={passwordretry}
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="mobile me-3" size="lg" />
                    <MDBInput
                      label="Telefon Numarası"
                      id="form6"
                      type="text"
                      name="phone"
                      value={phone}
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="id-card me-3" size="lg" />
                    <MDBInput
                      label="TC Numarası"
                      id="form7"
                      type="text"
                      name="identityno"
                      value={identityno}
                    />
                  </div>

                  <div
                    className="d-flex justify-content-between mx-auto"
                    style={{ width: "30%" }}
                  >
                    <div className="mb-4">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        // TODO: post için name ve value değerleri checkbox tamamla
                        id="flexCheckDefault1"
                        label="Kiracı"
                      />
                    </div>
                    <div className="mb-4">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckDefault2"
                        label="Ev Sahibi"
                      />
                    </div>
                  </div>

                  <MDBBtn className="mb-4" size="lg">
                    Kayıt Ol
                  </MDBBtn>
                  <a href="/login"> Oturum Açmak İçin Tıkla</a>
                </MDBCol>

                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    fluid
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </form>
    );
  }
}

export default Register;
