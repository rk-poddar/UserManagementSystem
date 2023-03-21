import React, {useState} from 'react'
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap"
import Swal from 'sweetalert2'
import {useSelector, useDispatch} from 'react-redux'
import {addUser} from "../reduxStore/user/userAction"

const AddUser = ({ setIsAddUser }) => {

  const {users} = useSelector(state => state.users)
  const dispatch = useDispatch()

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [dob, setDob] = useState("")

  const handleAddUser = (e) => {
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

    // crete user object to store the data in the data use data file
    const id = users.length + 1 // check duplicasy
    const newUsers = {
      id,
      fname,
      lname,
      email,
      number,
      dob
    }
    dispatch(addUser(newUsers))
    setIsAddUser(false)

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${fname} ${lname}'s data has been added successfully.`,
      showConfirmButton: false,
      timer: 3000
    })
  }

  return (
    <>
      <div className='container'>
        <Form onSubmit={handleAddUser}>
          <h2>Add User</h2>
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
            <Button className='btn-success' type='submit' value="Add">Add User</Button>
            <Button className='btn mx-5' value="Cancle" onClick={() => setIsAddUser(false)}>Cancel</Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default AddUser