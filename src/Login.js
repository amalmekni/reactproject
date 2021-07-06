import React,{useState,useEffect} from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import  "./App.css";
import App from './App';
import {Route,Switch} from 'react-router-dom';


function Login  ()  {
  const [Lo,L]=useState([]);
  const Loginfetch = () =>  {
    let mail=document.getElementById("formBasicEmail").value;
    let password=document.getElementById("formBasicPassword").value;
    
    fetch("http://127.0.0.1:8000/signin", {
          method: "POST",
          body:JSON.stringify( {mail:mail,pass:password})
        }).then(response=> response.json()).then(data=>L(data));

       
}





      

return (
  <div className="bgr">
    <div className ="ok">
    <Form className ="cc" >

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <center><Form.Control className="mail"type="email" placeholder="Enter email"/></center>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <center><Form.Control className="pswd"type="password" placeholder="Password" /></center>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <center> <Form.Check type="checkbox" label="Check me out" /></center>
  </Form.Group>
  <Button variant="warning" type="submit" onClick={Loginfetch}>
    Submit   

  </Button>


</Form>
</div>
</div>
) ;



}
export default Login ;