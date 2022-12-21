import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handelEmailBlur = e => {
    setEmail(e.target.value)
  }

  const handelPasswordBlur = e => {
    setPassword(e.target.value)
  }

  const handelLogin = e => {
    
  }

  return (
    <div className="mt-5 form-container">
      <h1 className="text-center">Please Login</h1>
      <Form onSubmit={handelLogin} className="form-main">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter Email" />
        </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onBlur={handelPasswordBlur} type="password" placeholder="Enter Password" />
        </Form.Group>



        <div className="d-flex justify-content-between">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
             <p className="forget-password"><Link to="/signup">Forget Password</Link></p>
        </div>


        <button className="log-sign-btn" type="submit">Login</button>

        <p className="text-center mt-3 text-secondary">New user? <Link className="text-decoration-none" to="/signup">Register Here</Link></p>
      </Form>
    </div>
  );
};

export default Login;
