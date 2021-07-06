import { Navbar} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav }from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './App.css';





function Header()
{
    return(


<>

<div class="row align-items-center" >
      <div class="col-md-3 col-3 logo" >
         <div className="img">
         <img className="img"src="https://www.transtu.tn/images/front/transtu_logo.png" alt="logot"    ></img></div>
      </div>
   
   <div class="col-md-9 col-6">

     <Navbar  className="navbar">
  
        <Container>
          <Nav className="me-auto">
          
          <div className="lis"> 
          <div className="li"> 
           
              <Nav.Link  href="/MainContent">Acceuil</Nav.Link></div>
                  </div>
          <div className="lis"> 
                 <Nav.Link className="li" href="#features">Gérer vehicule</Nav.Link> </div>
         
              </Nav>
         </Container>
         <div class=" col-6">
                 <Button href="./Signup" variant="success">Sign up</Button>{''}
                 <Button  href="./Login" variant="success">Login</Button>{' '}
                  </div>
      </Navbar>

    </div>
    
  </div>
</>

);
}

export default Header;