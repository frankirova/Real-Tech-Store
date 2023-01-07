import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authContext } from '../../Context/LoginContext';
import { ToastContainer, toast } from 'react-toastify'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react'
import './UserView.css'

const UserView = () => {

  const { setIsLoggedIn } = useContext(authContext)
  const navigate = useNavigate()
  
  const handleLogOut = () => {
    setIsLoggedIn(false)
    notifyLogOut()
    navigate('/')
  }
  const notifyLogOut = () => {
    toast.success('Log Out successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

  return (
    <div className='contenedor'>
      <Menu >
        <MenuButton as={Button} rightIcon={<i className="fa-sharp fa-solid fa-caret-down mx-2"></i>}>
          <img className='user-pic' src='../assets/user1.jpg' alt='user1'></img>
        </MenuButton>
        <MenuList bg='#C7C7C7'>
          <MenuItem bg='#C7C7C7'>View Perfil</MenuItem>
          <MenuItem bg='#C7C7C7'>Change Email</MenuItem>
          <MenuItem bg='#C7C7C7'><Link to='/changePass' bg='#C7C7C7'>Change Password</Link></MenuItem>
          <MenuItem bg='#C7C7C7' className='text-danger'>Delete Account</MenuItem>
          <MenuItem onClick={handleLogOut} bg='#C7C7C7' className='text-danger'>Log Out</MenuItem>
        </MenuList>
      </Menu>
      <ToastContainer />
      {/* <button className='btn user-menu d-flex align-items-center justify-content-center mx-1'>
        <img  className='user-pic' src='../assets/user1.jpg'alt='user1'></img>

        <i className="fa-sharp fa-solid fa-caret-down mx-2"></i>
        </button> */}
    </div>
  )
}

export default UserView