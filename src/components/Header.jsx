import React from 'react'
import { Button } from 'reactstrap';

const Header = ({setIsAddUser}) => {
  return (
    <>
      <header>
        <h2>User Management System</h2>
        <div>
          <Button className='headerbtn btn-info' onClick={() => setIsAddUser(true)}>Add Users</Button>
        </div>
      </header>
    </>
  )
}

export default Header