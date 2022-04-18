import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import CheckOut from './components/CheckOut/CheckOut';
import AboutMe from './components/AboutMe/AboutMe';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<AboutMe/>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut/>
          </RequireAuth>
        }></Route>
        <Route path='/checkout/:checkid' element={
          <RequireAuth>
            <CheckOut/>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
