import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Oldest from "./oldest"
import Latest from './latest'
import Liked from './liked'
import Disliked from './disliked'
import axios from 'axios'

export default function Classifiedposts() {
    const navigate = useNavigate()
    // navigate('/classifiedposts/latest')
    function addrecord() {
        document.getElementById("newpostform").style.display = ""
        document.getElementById("newpostbutton").style.display = "none"
}

function addrecorddone(e){
          e.preventDefault()
          // console.log(typeof(data))
          // let newid = document.getElementById("newId").value
          let newtitle = document.getElementById("newtitle").value
          let newbody = document.getElementById("newbody").value
       
          let newrecord = {
            "userId": 1,
            "id": "",
            "title": newtitle,
            "body": newbody,
            "oldest": false,
            "newest" : true,
            "liked"  : false,
            "disliked" : false,
        }
        console.log (newrecord)
        document.getElementById("newpostform").style.display = "none"
        document.getElementById("newpostbutton").style.display = ""
        axios.post("http://127.0.0.1:5000/posts", newrecord)
        .then((res) => alert("New record added"))
        .catch(err => console.log(err))
        navigate('/classifiedposts/latest')
          }


  return (
        <>
        <button className='btn btn-primary' id = "newpostbutton"style={{fontSize : "20px"}} onClick={addrecord}>Add new post</button>
        <form id = "newpostform" style={{display : "none"}}>
          {/* <h2> Id</h2>
          <br />
          <input type="text" id = "newId" readOnly = {true} defaultValue = { }/>
          <br /> */}
          <br />
          <h2> Title</h2>
          <br />
          <input type="text" id ="newtitle"  style={{width : "60vw"}} />
          <br />
          <br />
          <h2> Body</h2>
          <br />
          <input type="text" id ='newbody' style={{width : "60vw"}} />
          <br />
          <br />
          <button className='btn btn-info'style={{fontSize : "20px"}} onClick={(e) => addrecorddone(e)}>Create</button>
        </form>
        <ul className="nav justify-content-center">
  <li className="nav-item">

    <Link className="nav-link active" aria-current="page" to="latest">Latest</Link>
    </li>
  <li className="nav-item">

    <Link className="nav-link" to="oldest">Oldest</Link>
    </li>
  <li className="nav-item">
    <Link className="nav-link " to="liked">Liked</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link " aria-disabled="true" to = "disliked">Disliked</Link>
  </li>
</ul>
<Routes>
     
     <Route path="latest"  element = {<Latest/>}/>
     <Route path="oldest" element = {<Oldest/>}/>
     <Route path="liked" element = {<Liked/>}/>
     <Route path = "disliked"  element = {<Disliked/>}/>
  
   </Routes>  
        </>
  )
}
