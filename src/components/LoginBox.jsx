import React from 'react'
import { Link } from 'react-router-dom'

const LoginBox = () => {
  return (
    <>
      <div className="login_box">
        <Link to="/signup">sign up</Link>
        <Link to="/signin">login</Link>
      </div>
    </>
  )
}

export default LoginBox