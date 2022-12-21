import React, { useState } from "react";
import {Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from "../Loading/Loading";


const Signup = () => {

// All State 
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [cpassword, setCPassword] = useState("");
const [number, setNumber] = useState("");
const [customError, setCustomErrorr] = useState("");
const [validated, setValidated] = useState(false);
const [updateProfile, updating, error2] = useUpdateProfile(auth);
const navigate = useNavigate()

const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
] = useCreateUserWithEmailAndPassword(auth);

if(loading || updating){
  return <Loading/>
}

let errorElement;
if(error || error2){
  errorElement = <p className="text-danger">Error : {error?.message}</p>
}

if(user){
  console.log(user)
}

// All Function 
const handelNameBlur = (e) => {
  setName(e.target.value)
}

const handelEmailBlur = (e) =>{
  setEmail(e.target.value)
}

const handelPhoneBlur = (e) => {
  setNumber(e.target.value)
}
const handelPasswordBlur = (e) => {
  setPassword(e.target.value)
}

const handelCPasswordBlur = (e) => {
  setCPassword(e.target.value)
}


const handelSignin = async (e) => {
  e.preventDefault()

  const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    // password validation regular expreation ::::
    if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
      setCustomErrorr("Error : Please Should Special creacter enter!!")
      return;
    }
    setValidated(true);


  if(number.length < 11){
    setCustomErrorr("Error : Please 11 degit enter");
    return;
  }
  if(password !== cpassword){
    setCustomErrorr("Error :  You two password did't match, please try again")
    return;
  }
  if(password < 6){
    setCustomErrorr("Error : Password must be 6 creacters");
    return;
  }
  await createUserWithEmailAndPassword(email, password);
  await updateProfile({name});
  navigate("/home")
  console.log("submit")
  console.log(user)
}






  return (
    <div className="mt-5 form-container">
    <h1 className="text-center">Sign Up Form</h1>
    <Form noValidate validated={validated} onSubmit={handelSignin} className="form-main">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control onBlur={handelNameBlur} type="text" placeholder="Enter Name" required />
        <Form.Control.Feedback type="invalid">
            Please provide a valid Name.
          </Form.Control.Feedback>
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter Email" required />
        <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Control onBlur={handelPhoneBlur} type="number" placeholder="+880"required  />
        <Form.Control.Feedback type="invalid">
            Please provide a valid number.
          </Form.Control.Feedback>
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control onBlur={handelPasswordBlur} type="password" placeholder="Enter Password"required  />
        <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control onBlur={handelCPasswordBlur} type="password" placeholder="Enter Confirm Password"required  />
        <Form.Control.Feedback type="invalid">
            Please provide a valid Confirm Password.
          </Form.Control.Feedback>
      </Form.Group>




      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check
          required label="Agree to terms and conditions" feedback="You must agree before submitting."  
         feedbackType="invalid"
        />
      </Form.Group>

      <p className="text-danger">{customError}</p>
      <button className="log-sign-btn" type="submit">Register</button>
      <p className="text-center mt-3 text-secondary">Already have an account?<Link className="text-decoration-none" to="/login"> Login Here</Link></p>
    </Form>
    {errorElement}
  </div>
  );
};

export default Signup;
