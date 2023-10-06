import Nav from './components/nav'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter,Routes,Route} from 'react-router-dom'
import {Home,About,Blog} from './components/F2'
import Contact from './components/contact'
function App() {
  return (
   <div>
    <HashRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </HashRouter>
   </div>
  );
}

export default App;
 