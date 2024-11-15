import React from 'react'
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom"

import UserForm from "../components/Form/UserForm"
const Home = React.lazy(() => import('../components/Home/Home')); 
const LoadingSpinner = () => <div>Loading...</div>;
import ProtectedRoute from '../ProtectRoute/ProtectRoute'
import { Suspense } from 'react';
// import Pending from '../components/Task/pending';
// import TaskList from '../components/TaskContainer/TaskList';
function LayoutRoute() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner/>}>
      <Routes>
        

        <Route path='/task' element={
          <ProtectedRoute>
          <Home/>
           </ProtectedRoute>
          }/>
        
        <Route path='/signup' element={
          <UserForm type="/signup" />
          } />
        <Route path='/' element={<UserForm type="/" />} />
        <Route path="/task/:status" element={<Home/>}/>
      </Routes>
      </Suspense>
    </Router>
  )
}

export default LayoutRoute