import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import CheckOut from './components/CheckOut/CheckOut';
import AboutMe from './components/AboutMe/AboutMe';
import Error from './components/Error/Error';

function App() {
  return (
    <div className='p-4 md:p-0'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/aboutme' element={<AboutMe/>}></Route>
        <Route path='/checkout' element={<CheckOut/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
