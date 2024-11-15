import React from 'react'
import Profile from '../Profile/Profile'
import "./LeftBar.css"
import Daigram from '../Daigram/Daigram'
import {logout} from "../../Redux/UserSlice"
import { useNavigate } from 'react-router-dom'
// import {} from "react-router-dom"
import axios from 'axios'
import { useDispatch } from 'react-redux'

function RightBar() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = async () => {
    try {
      const response = await axios.post(`${import.meta.env.REACT_APP_API_URL}/logout`, {}, { withCredentials: true });

      if (response.status === 201) {
        dispatch(logout());  
        console.log(response.data.message);
        navigate("/"); 
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Logout failed:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='baar flex flex-col'>
    <div className='rightbar'>
        <Profile/>
        <Daigram/>
       
    </div>
    <button style={{marginTop:"570px"}} onClick={handleLogout}>logOut</button>
    </div>
  )
}

export default RightBar