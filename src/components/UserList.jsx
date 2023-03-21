import React from 'react'
import { Button, Table } from 'reactstrap'

const UserList = ({ users, handleEdit, handleDelete }) => {
  return (
    <>
      <Table hover bordered responsive striped size="sm">
        <thead>
          <tr>
            <th>SI.No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>DOB</th>
            <th colSpan={2} className="text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((users,i) => (
            <tr key={users.id}>
              <th scope="row">{i+1}</th>
              <td>{users.fname}</td>
              <td>{users.lname}</td>
              <td>{users.email}</td>
              <td>{users.number}</td>
              <td>{users.dob}</td>
              <td className='text-center'>
                <Button onClick={() => handleEdit(users.id)} className="btn-success" >Edit</Button>
              </td>
              <td className='text-center'>
                <Button onClick={() => handleDelete(users.id)} className="btn-danger" >Delete</Button>
              </td>
            </tr>
            ))
          ):(
            <tr>
              <td colSpan={7}>No Users</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}

export default UserList