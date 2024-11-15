import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const {user,isAuthenticated} = useSelector((state)=>state.user)
    console.log("issauth",isAuthenticated)
  return (
    
   <div className='mt-3 flex flex-col'> 
     
      {isAuthenticated && user ? (
        <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>{user.firstname}</h2> 
      ) : (
        <h2>Please log in to see your personalized message.</h2>
      )}
    </div>
  )
}

export default Profile