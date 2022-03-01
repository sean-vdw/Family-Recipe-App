import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <>
      <Route path='/'>
        <Navbar />
      </Route>
      <Route exact path='/'>
        <Header />
      </Route>
      <Route exact path='/login'>
        <LoginForm />
      </Route>
      <Route exact path='/register'>
        <RegisterForm />
      </Route>
    </>
  );
}

export default App;
