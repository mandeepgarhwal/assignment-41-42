import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Postdetails() {

    const {ID} = useParams()
    console.log(ID)
    const [currentdata, setcurrentdata] = useState()
    // const data = {}
    useEffect(() =>{
        console.log("post details called")
        axios.get(`http://localhost:5000/posts/${ID}`)
        .then((res) => { console.log(res.data)
            const currentpost = res.data
            console.log(currentpost)
            // Postdetails.currentpost = currentpost
            setcurrentdata(currentpost)
                
              
  
            //   console.log(currentdata)
              
        })
        .catch((err) => console.log(err))
    }, [ ])
    // function newrow (element) {
    //     return(
    //         <>
    //     <h2>ID</h2>
    //     <p> {element.id}</p>
    //     <br />
    //     <br />
    //     <h2>Title</h2>
    //     <p> {element.title}</p>
    //     <br />
    //     <br />
    //     <h2>Body</h2>
    //     <p> {element.body}</p> 
    //     </>        )
    // }
  return (
        <>
        <h1 className='text-center text-primary'> Post details page</h1>
        <h2>ID</h2>
        {currentdata &&
        <>
        <p> {currentdata.id}</p>
        <br />
        <br />
        <h2>Title</h2>
        <p> {currentdata.title}</p>
        <br />
        <br />
        <h2>Body</h2>
        <p> {currentdata.body}</p> 
        </>
        
}

        </>
  )
}


