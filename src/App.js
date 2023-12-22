import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Form from './components/form';
import View from './components/view';
import SingleView from './components/singleView';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/logout';
import Sview from './components/Sview';
// import { Update } from '@mui/icons-material';
import SignIn from './components/update';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/form' element={<Form/>}/>
          <Route exact path='/view' element={<View/>}></Route>
          <Route exact path='/reg' element={<Register/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/logout' element={<Logout/>}></Route>
          <Route exact path='/singleview/:id' element={<SingleView/>}></Route>
          <Route exact path='/sview/:id' element={<Sview/>}></Route>
          <Route exact path='/update/:id' element={<SignIn/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
