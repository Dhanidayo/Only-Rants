import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Create from './pages/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './pages/404';

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
              <Route path="*" element={ <NotFound /> } />        
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;

































































// function App() {
//   const title = "Welcome to the new blog!";
//   const likes = 50;
//   // const person = {
//   //   name: "Yoshi",
//   //   age: 30
//   // };
//   const link = "http://google.com"

//   return (
//     <div className="App">
//       <div className="content">
//         <h1>{title}</h1>
//         <p>Liked <b>{likes}</b> times</p>

//         {/* <p>{person}</p> */}

//         <p>{10}</p>
//         <p>{"Hello Ninjas!"}</p>
//         <p>[1,2,3,4,5]</p>
//         <p>{Math.random() * 10}</p>

//         <a href={link} title="Google home link">Google Site</a>
//       </div>
//     </div>
//   );
// }

// export default App;