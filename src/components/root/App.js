import React from "react";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Tenants from "../tenants/TenantList";
import Login from "../login/Login";
import Register from "../register/Register";
import { Routes, Route } from "react-router-dom";

// TODO: login ve register ekranlarında üstte navbar hala gözüküyor bu sorunu çöz
function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/homes" element={<Dashboard />}></Route>
        <Route path="/tenants" element={<Tenants />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
