



import React, { useEffect }  from 'react'
import {useState} from 'react'
import axios from 'axios'
import react from 'react'
import { Alert } from 'bootstrap'
import {Link} from 'react-router-dom'

export default function Axiosapidemo() {

    // const [dummydata, setdumydata] = useState([{"id" : 1, "title" : "nothing", "body" : "not post body"}])
    const [data, setdata] = useState()
    const [currentposts, setcurrentposts] = useState()
    const [titleedited, settitleedited] = useState(0)
    const [bodyedited, setbodyedited] = useState(0)
    // const [titlebeingedited, settitlebeingedited] = useState("")
    // const [bodybeingedited, setbodybeingedited] = useState("")
    // const [usef, setusef] = useState(0)
    // const [url, seturl] = useState("http://localhost:5000/posts")
    let titlebeingedited = ""
    let bodybeingedited = ""
    function settitlebeingedited(value1){
        titlebeingedited = value1
        // console.log(titlebeingedited)
    }
    function setbodybeingedited(value2){
      bodybeingedited = value2
      // console.log(bodybeingedited)
  }
    let currentdata = []
    useEffect(() => {
      console.log("useEffect called")


        axios.get("http://localhost:5000/posts")
        .then((res) => {setdata(res.data)
              //  setcurrentposts(data.length)
              console.log(data)
              //  console.log(typeof(data))
               
              //  console.log(currentposts)
              // setdumydata(data[0])
            
        })
        .catch((err) => console.log(err))

    }, [ ])
    // console.log("component called")
    // console.log(data)
    // function  titleediting(value){
    // settitlebeingedited(value)
    // currentdata = data
    // currentdata[currentrow -1].title = titlebeingedited
    // setdata(currentdata)
    // } 
    


    function editdetails( idnormal, idedit) {
      // console.log("edit fuction called")
      let currrow = document.getElementsByClassName(idnormal)
      // console.log(currrow)
      currrow[0].style.display = "none"
      currrow[1].style.display = "none"
      currrow[2].style.display = "none"

      let currrowedit = document.getElementsByClassName(idedit)
      // console.log(currrowedit)
      currrowedit[0].style.display = ""
      currrowedit[1].style.display = ""
      currrowedit[2].style.display = ""

      // console.log(currrowedit[0].readOnly)
      // console.log(currrowedit[1].readOnly)

      // let edittitle = <td><textarea className= "editcurrenttitle" cols="30" rows="10"  value = {currtitle} onChange={(e) => (settitlebeingedited(e.target.value))}></textarea></td>
      
      // currrow[2].replaceWith(edittitle)
      // let editbody = <td><textarea className= "editcurrentbody" cols="30" rows="10" value = {currbody} onChange={(e) => (setbodybeingedited(e.target.value))}></textarea></td>
   
      // currrow[3].replaceWith(editbody)
      
      // let savebutton = <td className='savebutton'><button className='btn btn-danger btn-sm' onClick={() => editingdone(currentrow)}>Save</button></td>
      // currrow[4].replaceWith(savebutton)



      
    }
    function settitle(value){

      // $(this).data("Textarea").value(e.newValue)

      // event.preventDefault()
      settitleedited(1)
      settitlebeingedited(value)
      console.log(titleedited)
      console.log(titlebeingedited)
    }
    function setbody(value){

      // $(this).data("Textarea").value(e.newValue)

      // event.preventDefault()
      setbodyedited(1)

      setbodybeingedited(value)
      console.log(bodyedited)
      console.log(bodybeingedited)
    }
    function  editingdone(currentrow, idnormal, idedit){
      console.log(titlebeingedited)
      console.log(bodybeingedited)
      let currrowedit = document.getElementsByClassName(idedit)
      if (titleedited == 0){
        console.log(3)
        titlebeingedited = currrowedit[0].defaultValue
      }
      if (bodyedited == 0){
        console.log(4)
        bodybeingedited = currrowedit[1].defaultValue
      }
      console.log(titlebeingedited)
      console.log(bodybeingedited)

      // currentdata = data
      // currentdata[currentrow -1].title = titlebeingedited
      // currentdata[currentrow -1].body = bodybeingedited
      // setdata(currentdata)
      let dataupdate = {
            "userId": 1,
            "id": currentrow,
            "title": titlebeingedited,
            "body": bodybeingedited
        }
      
    //   axios
    //   .put("http://localhost:5000/posts",  {
    //     "userId": 1,
    //     "id": currentrow,
    //     "title": titlebeingedited,
    //     "body": bodybeingedited
    // }
          
    //   )
    //   .then((response) => {
    //     setdata(response.data);
    //   });
      console.log(data)
      let currrow = document.getElementsByClassName(idnormal)
      // console.log(currrow)
      currrow[0].style.display = ""
      currrow[0].innerHTML = titlebeingedited
      currrow[1].style.display = ""
      currrow[1].innerHTML = bodybeingedited
      currrow[2].style.display = ""

      
      // console.log(currrowedit)
      currrowedit[0].style.display = "none"
      currrowedit[1].style.display = "none"
      currrowedit[2].style.display = "none"
      // editbody.replaceWith(currrow[3])
      // edittitle.replaceWith(currrow[2])
      // savebutton.replaceWith(currrow[4])
      setbodyedited (0)
      settitleedited(0)
      axios.put(`http://localhost:5000/posts/${currentrow}`, dataupdate)
      .then((res) =>  (alert("record is updated")))
      .catch((err) => console.log(err))
      } 
    function deletepost(element){
        console.log(element)
        axios.delete(`http://localhost:5000/posts/${element.id}`)
        .then(res => alert("record is deleted"))
        .catch(err => console.log(err))
        window.location.reload()
    }
    function newrow(element){
            // console.log("newrow called");
            

            let idedit = element.id + 100
            let idnormal = element.id + 10
            // let currtitle = element.title
            // let currbody = element.body
           
            // function setbody(e){
            //   e.preventDefault()
            //   setbodybeingedited(e.target.value)

            // }
            // console.log(element.title)
            return(
              
            <tr span = "row" className = {element.id} key = {element.id}>
                <th>
                    <Link to = {`/posts/${element.id}`}> {element.id}</Link>
                </th>
                {/* <th className = {element.id}>{element.id}</th> */}
                <td> 
                <p className = {idnormal}>{element.title} </p>
                {/* <textarea className = {idedit} style = {{display : "none" ,}} cols="30" rows="10"   defaultValue = {element.title} onChange={(event) => (settitle(event.target.value))}></textarea> */}
                </td>
                <td> 
                {/* <p className = {idnormal}>{element.body} </p> */}
                {/* <textarea className= {idedit} style = {{display : "none" }} cols="30" rows="10"   defaultValue = {element.body} onChange={(event) => (setbody(event.target.value))}></textarea> */}
                </td>
                {/* <td className = {idnormal}><button className='btn btn-danger btn-sm' onClick={() => editdetails(idnormal, idedit)}>Edit</button></td>
                <td className= {idedit} style = {{display : "none" }}><button className='btn btn-info btn-sm' onClick={() => editingdone(element.id, idnormal, idedit)}>Save</button></td>          
                <td className = {idnormal}><button className='btn btn-success btn-sm' onClick={() => deletepost(element)}>delete</button></td> */}
            </tr>)
    }
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
                "body": newbody
            }
            console.log (newrecord)
            document.getElementById("newpostform").style.display = "none"
            document.getElementById("newpostbutton").style.display = ""
            axios.post("http://127.0.0.1:5000/posts", newrecord)
            .then((res) => alert("New record added"))
            .catch(err => console.log(err))
            window.location.reload()
              }
    

  return (
        <>
        <h1 style={{textAlign : "center"}}>POSTS</h1>
        <form id = "newpostform" style={{display : "none"}}>
          {/* <h2> Id</h2>
          <br />
          <input type="text" id = "newId" readOnly = {true} defaultValue = { }/>
          <br /> */}
          <br />
          <h2> Title</h2>
          <br />
          <input type="text" id ="newname"  style={{width : "60vw"}} />
          <br />
          <br />
          <h2> Body</h2>
          <br />
          <input type="text" id ='newclass' style={{width : "60vw"}} />
          <br />
          <br />
          <button className='btn btn-info'style={{fontSize : "20px"}} onClick={(e) => addrecorddone(e)}>Create</button>
        </form>
        <button className='btn btn-primary' id = "newpostbutton"style={{fontSize : "20px"}} onClick={addrecord}>Add new post</button>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Title</th>
      {/* <th scope="col">Body</th> */}
      {/* <th scope="col" colSpan={2} style={{textAlign : "center"}}>Actions</th> */}
    </tr>
  </thead>
  <tbody>
  {
            data &&
            data.map((element) => (

                // console.log(element.title),
                newrow(element)
            
            ))

        }
  </tbody>
</table>


        </>
  )
}

