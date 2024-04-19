// import React, { useState } from 'react';
// import './Login.css';

// function Login({ onLogin }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   function handleLogin(event) {
//     event.preventDefault();
//     // Perform login logic here...
//     // For simplicity, let's assume login is successful
//     onLogin();
//   }

//   return (
//     <div>
//       <form className='login' onSubmit={handleLogin}>
//         <h1>Login</h1>
//         <input
//           type='text'
//           placeholder='Username'
//           value={username}
//           onChange={event => setUsername(event.target.value)}
//         />
//         <input
//           type='password'
//           placeholder='Password'
//           value={password}
//           onChange={event => setPassword(event.target.value)}
//         />
//         <button type='submit'>Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory hook
// import './Login.css';

// function Login({ onLogin }) {
//   const history = useHistory(); // Access history object
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   function handleLogin(event) {
//     event.preventDefault();
//     // Perform login logic here...
//     // For simplicity, let's assume login is successful
//     onLogin();
//     // Redirect to home route after successful login
//     history.push('/home');
//   }

//   return (
//     <div>
//       <form className='login' onSubmit={handleLogin}>
//         <h1>Login</h1>
//         <input
//           type='text'
//           placeholder='Username'
//           value={username}
//           onChange={event => setUsername(event.target.value)}
//         />
//         <input
//           type='password'
//           placeholder='Password'
//           value={password}
//           onChange={event => setPassword(event.target.value)}
//         />
//         <button type='submit'>Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;




// import React, { useState } from 'react';
// import './login.css'; // Import the CSS file

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [validCredentials, setValidCredentials] = useState({
//     username: 'ka37m1009',
//     password: 'm1009@1009'
//   }); // Simulated valid credentials (replace with your desired data)

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Simulate login logic
//     if (username === validCredentials.username && password === validCredentials.password) {
//       setIsLoggedIn(true);
//       setErrorMessage('');
//     } else {
//       setErrorMessage('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <h1 className="login-title">Login</h1>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {errorMessage && <div className="error-message">{errorMessage}</div>}
//         <button type="submit">Login</button>
//       </form>
//       {isLoggedIn && <div className="success-message">Login successful!</div>}
//     </div>
//   );
// }

// export default Login;




// import React, { useState } from 'react';
// import './Login.css'; // Import the CSS file

// function Login() {
//   const [vehicleNumber, setVehicleNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [validCredentials] = useState({
//     vehicleNumber: '',
//     password: ''
//   }); // Simulated valid credentials (replace with your desired data)

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Simulate login logic
//     if (vehicleNumber === validCredentials.vehicleNumber && password === validCredentials.password) {
//       setIsLoggedIn(true);
//       setErrorMessage('');
//     } else {
//       setErrorMessage('Invalid vehicle number or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <h1 className="login-title">Login</h1>
//         <div className="form-group">
//           <label htmlFor="vehicleNumber">Vehicle Number</label>
//           <input
//             type="text"
//             id="vehicleNumber"
//             name="vehicleNumber"
//             value={vehicleNumber}
//             onChange={(e) => setVehicleNumber(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {errorMessage && <div className="error-message">{errorMessage}</div>}
//         <button type="submit">Login</button>
//       </form>
//       {isLoggedIn && <div className="success-message">Login successful!</div>}
//     </div>
//   );
// }

// export default Login;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function App() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    // Perform login logic here...

    // Redirect to the default page after successful login
    navigate('/');
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>
              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
              <MDBBtn size='lg' onClick={handleLogin}>
                Login
              </MDBBtn>
              <hr className="my-4" />
              <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                <MDBIcon fab icon="google" className="mx-2" />
                Sign in with google
              </MDBBtn>
              <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                <MDBIcon fab icon="facebook-f" className="mx-2" />
                Sign in with facebook
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;


// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory hook
// import './Login.css';

// function Login({ onLogin }) {
//   const history = useHistory(); // Access history object
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   function handleLogin(event) {
//     event.preventDefault();
//     // Perform login logic here...
//     // For simplicity, let's assume login is successful
//     onLogin();
//     // Redirect to home route after successful login
//     history.push('/home');
//   }

//   return (
//     <div>
//       <form className='login' onSubmit={handleLogin}>
//         <h1>Login</h1>
//         <input
//           type='text'
//           placeholder='Username'
//           value={username}
//           onChange={event => setUsername(event.target.value)}
//         />
//         <input
//           type='password'
//           placeholder='Password'
//           value={password}
//           onChange={event => setPassword(event.target.value)}
//         />
//         <button type='submit'>Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;