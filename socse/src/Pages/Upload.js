import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/Edit", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("User has not signed up");
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="login-box p-5 shadow-lg rounded" style={{ width: "500px", height: "500px" }}>
        <h1 className="mb-4 text-center">Login</h1>
        <Form onSubmit={submit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4 w-100">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;