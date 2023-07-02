"use client"
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Home = () => {

  const firstRef  = useRef(null); 
  const [first, setfirst] = useState("")

  const ChangeHandler = (e) =>{
    const f = firstRef.current;
    if(f.value.length < 4){
      f.style.outline = "2px solid green"
      f.inn
    }
    else{
      f.style.outline = "none"
    }
    // console.log(f);
    setfirst(e.target.value);
  }

  const SubmitHandler = (e) =>{
    e.preventDefault();
    // console.log(first)
  }

  return (
    <div>

      <h1>this is the page</h1>

      <form onSubmit={SubmitHandler}>

        <input type="text"
                ref={firstRef}
                placeholder="firstName"
                onChange={ChangeHandler}
                value={first}
         />
         
           <button>submit</button>
      </form>

      
   </div>
  )
}

// 1- normal routing
// 2- Dynamic routing
// 3- shared components
// 4- Nasted routing
// UseRef- New topic 
// kisis bhi element ki dom property ko use karne ke liye useRef use karte hai


export default Home