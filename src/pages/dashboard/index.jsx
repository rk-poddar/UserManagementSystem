import React, {useState} from 'react'
import Swal from "sweetalert2"

import Header from "../../components/Header"
import UserList from "../../components/UserList"
import AddUser from "../../components/AddUser"
import EditUser from "../../components/EditUser"
import {useSelector, useDispatch} from 'react-redux'
import {deleteUser} from "../../reduxStore/user/userAction"


const DashBoard = () => {

    const dispatch = useDispatch()
    const {users} = useSelector(state => state.users)

    const [selectedUser, setSelectedUser] = useState(null)

    const [isAddUser, setIsAddUser] = useState(false)
    const [isEditUser, setIsEditUser] = useState(false)

    const handleEdit = (id) => {
        const [user] = users.filter(user => user.id === id)

        setSelectedUser(user)
        setIsEditUser(true)
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: "warning",
            title: "Are you Sure?",
            text: "You want be able to delete this!",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it",
            cancelButtonText: "No, cancel",
        }).then(result => {
            if(result.value){
                Swal.fire({
                    icon: "success",
                    title: "Deleted!",
                    showConfirmButton: false,
                    timer: 3000,
                })
                dispatch(deleteUser(id))
            }
        })
    }

  return (
    <div className='container'>
        {/* {list} */}
        {!isAddUser && !isEditUser && (
            <>
                <Header setIsAddUser={setIsAddUser}/>
                <UserList 
                    users={users}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </>
        )}
        {/* {adduser} */}
        {isAddUser && (
            <AddUser
                setIsAddUser={setIsAddUser}
            />
        )}
        {/* {edituser} */}
        {isEditUser && (
            <EditUser
                selectedUser={selectedUser}
                setIsEditUser={setIsEditUser}
            />
        )}
    </div>
  )
}

export default DashBoard