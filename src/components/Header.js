import React from 'react'

function Header() {
    return (
        <div className="App bg-white sticky top-0">
      
        <div className="container mx-auto py-6 px-5 md:px-6 text-s">
          <nav className="flex justify-between font-thin align-center">
            <div className="text-xl"><a href="/"> greenbrain</a></div>
            <div className="btn"><a href="/login">Login</a></div>
          </nav>
        </div>
      </div>
  
    )
}

export default Header
