import React,{useState,useEffect} from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';


const Signup = () => {
  const[nom,setnom]=useState("");
  const[prenom,setPr]=useState("");
  const[mail,setmail]=useState("");
  const[psw,setp]=useState("");

    
  const Register=()=>{
  
    fetch('http://127.0.0.1:8000/createacc',{
    method: "POST",
    body:JSON.stringify({ email:mail,
       Psw:psw,
       Nom:nom,
       Prenom:prenom,})
  })
}

return (
  <div className="bgr">
    <div className ="ok">
    <Form className ="cc" >

  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Nom</Form.Label>
    <Form.Control type="Name" placeholder="saisir votre nom"  onChange={(e)=>setnom(e.target.value)}        
/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Prenom</Form.Label>
    <Form.Control type="Name" placeholder="saisir prenom" onChange={(e)=>setPr(e.target.value)}        
/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"   onChange={(e)=>setmail(e.target.value)}        
/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" pattern="[a-z,A-Z,0-9]{8}" onChange={(e)=>setp(e.target.value)}        
/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button href="/Gere" variant="success" onClick={Register} >
    Enregistrer
  </Button>
</Form>
</div>
</div>
) ;



}
export default Signup ;