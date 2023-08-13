import React from "react"
import { Link } from "react-router-dom"
// import { Routes, Route } from 'react-router-dom'
// import Oldest from "./Pages/oldest"

export const  Menu = () =>{
     return(   
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Menu</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0" /> */}
        <li className="nav-item" style={{listStyle : "none", fontSize: "20px", paddingLeft : "5px", paddingRight : "5px", paddingTop : "3px"}}>
          <Link className="nav-link active" aria-current="page" to="/home">
            Home
            </Link>
        </li>
        <li className="nav-item" style={{listStyle : "none", fontSize: "20px", paddingLeft : "5px", paddingRight : "5px", paddingTop : "3px"}}>
          <Link className="nav-link" to="/about">
            About
            </Link>
        </li>
        <li className="nav-item" style={{listStyle : "none", fontSize: "20px", paddingLeft : "5px", paddingRight : "5px", paddingTop : "3px"}}>
          <Link className="nav-link" to="/posts">
            Posts
            </Link>
        </li>
        <li className="nav-item" style={{listStyle : "none", fontSize: "20px", paddingLeft : "5px", paddingRight : "5px", paddingTop : "3px"}}>
          <Link className="nav-link" to="/classifiedposts">
            Classified posts
            </Link>
        </li>
    </div>
  </div>
</nav>
{/* <Routes>
     
     <Route path="latest" />
     <Route path="oldest" element = {<Oldest/>}/>
     <Route path="liked" />
     <Route path = "disliked"  />
  
   </Routes>   */}
        </>
     ) 
}