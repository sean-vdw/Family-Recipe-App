import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Route path='/'>
      <Header />
    </Route>
  );
}

export default App;
