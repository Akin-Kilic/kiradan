import React from "react";
import axios from "axios";

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Component } from "react";

//TODO: kullanıcı giriş yaptığında eğer kullanıcı kayıtlı ise ilgili sayfa açılsın ve o saydfada o kullanıcı bilgisi bulıunsun.

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .get("http://localhost:3001/tenants", this.state)
      .then((response) => {
        //TODO: get isteği ile çekilen datanın değişkenlere kaydedilmesi ve üzerinde işlem yapılması
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <MDBInput
            wrapperClass="mb-4"
            label="Email"
            id="form1"
            type="email"
            name="email"
            value={email}
            onChange={this.changeHandler}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Şifre"
            id="form2"
            type="password"
            name="password"
            value={password}
            onChange={this.changeHandler}
          />

          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Beni Hatırla"
            />
            <a href="!#">Şifreni Mİ Unuttun?</a>
          </div>

          <MDBBtn className="mb-4" href="/">Giriş Yap</MDBBtn>

          <div className="text-center">
            <p>
              Üye değil misin? <a href="/register">Kayıt Ol</a>
            </p>
            <p>ya da şunlarla oturum aç:</p>

            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
          </div>
        </MDBContainer>
      </form>
    );
  }
}

export default Login;
