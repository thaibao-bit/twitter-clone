import './App.css';
import { Route,Routes } from 'react-router-dom';
import NavPage from './pages/navpage';
import SignIn from './pages/signin';
import SignInForm from './component/signinform';
function App() {
  return (
    
    <div className="App">
      <Routes>
      <Route path='/navpage' element= {<NavPage/>}></Route>
      <Route path='/form' element= {<SignInForm/>}></Route>
      <Route path='/' element= {<SignIn/>}></Route>
      </Routes>
    </div>
   
  );
}

export default App;
