import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signup, signin } from "../../Redux/UserSlice.jsx";

function UserLogin({ type }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading} = useSelector((state) => state.user); 
  
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [serverError, setServerError] = useState('');

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate('/task');  // Redirect to tasks page if already authenticated
  //   }
  // }, [isAuthenticated, navigate]);

  // Form validation function
  const validate = () => {
    const errors = {};
    if (!email) errors.email = "Email is required.";
    if (!password) errors.password = "Password is required.";
    if (type === '/signup') {
      if (!firstname) errors.firstname = "Firstname is required.";
      if (!lastname) errors.lastname = "Lastname is required.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submission
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return; // Stop submission if there are validation errors
    }

    if (type === "/signup") {
      dispatch(signup({ firstname, lastname, email, password }))
        .unwrap()
        .then((response) => {
          if (response.status === 201) {
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
          }
          navigate("/");
        })
        .catch((error) => {
          console.error("An error occurred during signup:", error);
        });
    } else {
      dispatch(signin({ email, password }))
        .then((response) => {
          if (response.status === 201) {
            setEmail('');
            setPassword('');
          }
          navigate('/task');
        })
        .catch((error) => {
          console.error("An error occurred during signin:", error);
          // Handle specific errors from the backend, like wrong credentials
          if (error.response && error.response.data) {
            setServerError(error.response.data.message || 'Invalid email or password');
          } else {
            setServerError('An error occurred. Please try again.');
          }
        });
    }
  };

  return (
    <>
      <form>
        <div className="login_content bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto mt-20">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            {type === '/' ? 'Sign In' : 'Sign Up'}
          </h2>

          {type === '/signup' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Firstname
                </label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your firstname"
                  className={`w-full px-4 py-2 border ${formErrors.firstname ? 'border-red-500' : 'border-gray-300'} rounded-md text-gray-800 focus:outline-none focus:border-blue-500`}
                />
                {formErrors.firstname && <p className="text-red-500 text-sm">{formErrors.firstname}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Lastname
                </label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your lastname"
                  className={`w-full px-4 py-2 border ${formErrors.lastname ? 'border-red-500' : 'border-gray-300'} rounded-md text-gray-800 focus:outline-none focus:border-blue-500`}
                />
                {formErrors.lastname && <p className="text-red-500 text-sm">{formErrors.lastname}</p>}
              </div>
            </>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md text-gray-800 focus:outline-none focus:border-blue-500`}
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={`w-full px-4 py-2 border ${formErrors.password ? 'border-red-500' : 'border-gray-300'} rounded-md text-gray-800 focus:outline-none focus:border-blue-500`}
            />
            {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
          </div>

          {/* Display server error message */}
          {serverError && <p className="text-red-500 text-sm">{serverError}</p>}

          <button
            onClick={handleSubmit}
            type="button"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {loading ? 'Processing...' : type === 'signin' ? 'Sign In' : 'Sign Up'}
          </button>

          <div className="text-center mt-4">
            {type === '/' ? (
              <Link to="/signup" className="text-blue-500 hover:underline">
                Don't have an account? Sign Up
              </Link>
            ) : (
              <Link to="/" className="text-blue-500 hover:underline">
                Already have an account? Sign In
              </Link>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default UserLogin;
