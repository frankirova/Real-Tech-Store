import React, {useContext} from 'react'
// import imgUser1 from '../../img/user1.jpg'
import './UserView.css'
import { Link } from 'react-router-dom'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react'
import { authContext } from '../../Context/LoginContext';

const UserView = () => {

  const { setIsLoggedIn } = useContext(authContext)

  const handleLoggedOut = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className='contenedor'>
      <Menu >
        <MenuButton as={Button} rightIcon={<i className="fa-sharp fa-solid fa-caret-down mx-2"></i>}>
          <img className='user-pic' src='../assets/user1.jpg' alt='user1'></img>
        </MenuButton>
        <MenuList bg='#C7C7C7'>
          <MenuItem bg='#C7C7C7'>View Perfil</MenuItem>
          <MenuItem bg='#C7C7C7'>Delete Acount</MenuItem>
          <MenuItem bg='#C7C7C7'>Change Email</MenuItem>
          <Link to='/changePass' bg='#C7C7C7'>Change Password</Link>
          <MenuItem onClick={handleLoggedOut} bg='#C7C7C7'>Logged Out</MenuItem>
        </MenuList>
      </Menu>
      {/* <button className='btn user-menu d-flex align-items-center justify-content-center mx-1'>
        <img  className='user-pic' src='../assets/user1.jpg'alt='user1'></img>

        <i className="fa-sharp fa-solid fa-caret-down mx-2"></i>
        </button> */}
    </div>
  )
}

export default UserView