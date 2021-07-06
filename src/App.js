import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import {
Route,Switch} from "react-router-dom";
import Login from './Login';
import Gere from './Gere';
import './App.css';
import Signup from './Signup';


function App() {
  return (
    <div className="App">
      <Header> 
      </Header>
      
      <Switch>
        <Route path ="/MainContent">
        <MainContent>
      </MainContent>
        </Route>
        <Route path ="/Login">
          <Login >
            </Login>
          </Route>
          <Route path ="/Signup">
          <Signup >
            </Signup>
          </Route>
          <Route path ="/Gere">
          <Gere >
            </Gere>
          </Route>
      </Switch>
      <Footer> 
      </Footer>
    
    </div>
   
  );
}

export default App;