import './App.css';
import { Route,Routes } from 'react-router-dom';
import SignIn from './pages/signin';
import SignInForm from './component/signinform';
import { Helmet } from 'react-helmet';
import HomePage from './pages/home';
function App() {
  return (
    
    <div className="App">
      <Helmet>
      <title>Qitter. It's what happening / Qitter</title>
      </Helmet>
      
      <Routes>
      <Route path='/form' element= {<SignInForm/>}></Route>
      <Route path='/' element= {<SignIn/>}></Route>
      <Route path='/home/*' element= {<HomePage/>}></Route>
      </Routes>
    </div>
   
  );
}

export default App;
