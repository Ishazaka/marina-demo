import React from 'react'
import Navbar from './Navbar'

function HomePage({setLogin}) {
  return (
    <div>
   
 <Navbar setLogin={setLogin}/>
      <header className="App-header">
      <img style={{width: "240px"}} src="/marinalogo.png" />
       <h3> Coming Soon...</h3>
  
      </header>


    </div>
  )
}

export default HomePage