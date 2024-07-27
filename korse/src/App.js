import {BrowserRouter as Router, Routes,Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Offers from './pages/Offers';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/offers' element={<Offers/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
