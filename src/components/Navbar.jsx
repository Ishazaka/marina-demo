import React from 'react'

const Navbar = ({setLogin}) => {

   function changeLog(){
    setLogin(false)
   }

  return (
    <div>
           <nav className='nav-bar'>
      <button type="button" onClick={changeLog} class="login-btn btn btn-primary">Log Out</button>

      </nav>
    </div>
  )
}

export default Navbar