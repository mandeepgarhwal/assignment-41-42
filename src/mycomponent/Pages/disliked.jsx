import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Disliked() {

    const [displayposts, setdisplayposts] = useState()

    useEffect(() => {
      axios.get("  http://127.0.0.1:5000/posts")
        .then((res) => {
            let posts = res.data,
            usedposts = posts.filter ((post) => post.disliked == true && post.liked == false)
            
            setdisplayposts (usedposts)})
        .catch((err) => console.log(err))
    }, [ ])
    function newrow(element){
        console.log("function is called")
        return(
    <tr>
        <th scope="row">{element.id}</th>
        <td>{element.title}</td>
        <td>{element.body}</td>

      </tr>
            
        )
    }

  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">body</th>

    </tr>
  </thead>
  <tbody className="table-group-divider">
  {
            displayposts &&
            displayposts.map((element) => (

                // console.log(element.title),
                newrow(element)
            
            ))

        }


  </tbody>
</table>

    
    </>
  )
}
