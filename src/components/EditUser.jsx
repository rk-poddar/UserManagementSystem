import React, { useState } from 'react'
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap"
import Swal from 'sweetalert2'
import {useDispatch} from 'react-redux'
import {updateUser} from "../reduxStore/user/userAction"

const EditUser = ({selectedUser,  setIsEditUser}) => {

  const dispatch = useDispatch()

  const [id] = useState(selectedUser.id)
  const [fname, setFname] = useState(selectedUser.fname)
  const [lname, setLname] = useState(selectedUser.lname)
  const [email, setEmail] = useState(selectedUser.email)
  const [number, setNumber] = useState(selectedUser.number)
  const [dob, setDob] = useState(selectedUser.dob)

  const handleUpdate = (e) => {
    e.preventDefault()
    // form validation
    if(!fname || !lname || !email || !number || !dob){
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required",
        showConfirmButton: true
      })
    }

    // crete user object to update the data
    const user = {
      id,
      fname,
      lname,
      email,
      number,
      dob
    }

    dispatch(updateUser(id, user))
    setIsEditUser(false)

    Swal.fire({
      icon: "success",
      title: "Updated!!",
      text: `${fname} ${lname}'s data has been updated.`,
      showConfirmButton: false,
      timer: 3000
    })
  }

  return (
    <>
      <div className='container'>
        <Form onSubmit={handleUpdate}>
          <h2>Edit User</h2>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for=""> First Name </Label>
                <Input id="fname" name="fname" placeholder="Enter First Name" type="text" value={fname} onChange={e => setFname(e.target.value)}/>
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for=""> Last Name </Label>
                <Input id="lname" name="lname" placeholder="Enter Last Name" type="text" value={lname} onChange={e => setLname(e.target.value)}/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for=""> Email </Label>
                <Input id="email" name="email" placeholder="Enter Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for=""> Number </Label>
                <Input id="number" name="number" placeholder="Enter Number" type="number" value={number} onChange={e => setNumber(e.target.value)}/>
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for=""> DOB </Label>
                <Input id="dob" name="dob" type="date" value={dob} onChange={e => setDob(e.target.value)}/>
              </FormGroup>
            </Col>
          </Row>
          <div className='mt-3'>
            <Button className='btn-success' type='submit' value="Update">Update User</Button>
            <Button className='btn mx-5' value="Cancle" onClick={() => setIsEditUser(false)}>Cancel</Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default EditUser