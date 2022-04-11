import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Create from './pages/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './pages/404';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />     
              <Route path="/Create" element={ <Create /> } /> 
              <Route path="/blogs/:id" element={ <BlogDetails /> } />
              <Route path="/Login" element={ <Login />} />
              <Route path="/Register" element={ <Register />} />
              <Route path="*" element={ <NotFound /> } />        
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
