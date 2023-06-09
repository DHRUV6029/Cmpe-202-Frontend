import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './components/context/AuthContext'
import PrivateRoute from './components/misc/PrivateRoute'
import Navbar from './components/misc/Navbar'
import Home from './components/home/Home'
import Login from './components/home/Login'
import Signup from './components/home/Signup'
import AdminPage from './components/admin/AdminPage'
import UserPage from './components/user/UserPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
     <div>
      <ToastContainer />
      <AuthProvider>
      <Router>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <PrivateRoute path='/adminpage' component={AdminPage} />
        <PrivateRoute path='/userpage' component={UserPage} />
      </Router>
    </AuthProvider>
    </div>
    
  )
}

export default App
