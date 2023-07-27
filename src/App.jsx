import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="blogs" element={<Blogs/>}/>
          <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;