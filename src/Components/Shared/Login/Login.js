import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  auth from '../../../firebase.init'
import './Login.css'
import Loading from "../Loading/Loading";

const Login = () => {

  // All State 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate()

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error1,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);






  // All Function 
  const handelEmailBlur = e => {
    setEmail(e.target.value)
  }

  const handelPasswordBlur = e => {
    setPassword(e.target.value)
  }

  let errorElement;
      if (error1 || error2) {
      errorElement = <p className="text-danger">Error: {error1?.message || error2?.message}</p>
  }

  if(loading || sending){
    return <Loading/>
  }


  if(user){
    navigate("/blog")
  }
  const handelLogin = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    signInWithEmailAndPassword(email, password)
  }


  // Forget Password 
  const forgetPassword = async() => {
    if(email){
      await sendPasswordResetEmail(email)
      toast("send email")
    }
    else{
        toast("Enter Your Email address")
    }
  }





  return (
    <div className="mt-5 form-container">
      <h1 className="text-center">Please Login</h1>
      <Form noValidate validated={validated} onSubmit={handelLogin} className="form-main">

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter Email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onBlur={handelPasswordBlur} type="password" placeholder="Enter Password" required/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password
          </Form.Control.Feedback>
        </Form.Group>



        <div className="d-flex justify-content-between">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Remember Me" required 
               feedback="You must agree before submitting."
               feedbackType="invalid"/>
                </Form.Group>
             <p className="forget-password"><Link onClick={forgetPassword}>Forget Password</Link></p>
        </div>


        <button className="log-sign-btn" type="submit">Login</button>

        <p className="text-center mt-3 text-secondary">New user? <Link className="text-decoration-none" to="/signup">Register Here</Link></p>
      </Form>
      {errorElement}
      <ToastContainer/>
    </div>
  );
};

export default Login;
