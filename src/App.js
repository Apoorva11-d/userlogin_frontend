import 'bootstrap/dist/css/bootstrap.css'
import HeaderComponent from './components/HeaderComponent.js'
import { BrowserRouter as Router ,Switch , Route, Redirect } from 'react-router-dom'
import UserRegister from "./components/UserRegister.js";
import UserLogin from "./components/UserLogin.js";
import UpdatePassword from './components/UpdatePassword.js';
import HomePage from './components/HomePage.js';
import Welcome from './components/Welcome.js';



function App() {
  return (
<div>
      <HeaderComponent/>
      <Router>
        <Switch>
        <Route exact path='/' component={Welcome} >
          <Redirect to="/welcome"/>
          </Route>
        <Route path='/welcome' exact component={Welcome} />
          <Route path='/login' exact component={UserLogin} />
          <Route path='/register' exact component={UserRegister} />
          <Route path='/resetpassword' exact component={UpdatePassword} />
          <Route path='/homepage' exact component={HomePage} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
