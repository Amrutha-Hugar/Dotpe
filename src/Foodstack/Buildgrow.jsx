import React from 'react'
import "../Assets/Styles/Buildgrow.css"

const Buildgrow = () => {
  return (
    <div className='buildgrow-container'>
      <div className='buildgrow-content'>
         <h1>Build and grow your<br/> business with DotPe.</h1>
         <p>Get all the tools you need to take your business to the next level<br/> & join the millions of merchants using DotPe.</p>
      </div>
      <div className='d-flex justify-content-center w-100 ' >
        <form action="">
            <div className='d-flex justify-content-center rounded-4 m-2 p-2' style={{gap:'90px', border:'1px solid black',  height:'70px'}}>
            <input type="text"  placeholder='Enter your mobilenumber' style={{border:'none', margin:'10px'}}/>
            <button style={{backgroundColor:'#007bff', border:'none', marginTop:'9px', fontSize:'18px', fontWeight:'500',color:'white'}} className='rounded-5 w-60 h-70'>Request Callback</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Buildgrow

