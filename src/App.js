
import { Home } from "./mycomponent/Pages/home";
import { About } from "./mycomponent/Pages/about";
import { Menu } from "./mycomponent/menu";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Axiosapidemo from "./mycomponent/Pages/posts";
import Pagenotfound from "./mycomponent/Pages/pagenotfound";
import Postdetails from "./mycomponent/Pages/postdetails";
import Classifiedposts from "./mycomponent/Pages/classifiedposts";



function App() {
  return (
    <div className= "container">

      <BrowserRouter>
      <Menu/>
      <Routes>
      <Route path="/" element = {<Navigate to = "/home"/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/posts" element = {<Axiosapidemo/>}/>
        <Route path = "/posts/:ID"  element = {<Postdetails/>}/>
        <Route path="*" element = {<Pagenotfound/>}/>
        <Route path="/classifiedposts/*" element = {<Classifiedposts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
