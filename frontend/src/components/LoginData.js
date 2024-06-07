// import 'bootstrap/dist/css/bootstrap.min.css';
// import { ImGithub } from "react-icons/im";
// import { FcGoogle } from "react-icons/fc";
// import logo from "../assets/img/svg/dcbLogo 1.svg";


// const LoginData = () => {
    
//     return (
//         <div className="d-flex mt-4 justify-content-center align-items-center vh-100" style={{}}>
//             <div className='p-5 border rounded' style={{ maxWidth: '400px', width: '100%', backgroundColor: '#09091D', color: "white" }}>
//                 <img src={logo} alt="Logo" className="mb-4 w-100" style={{ maxWidth: '200px' , marginLeft:"50px" }} />
//                 <div className="mb-3 d-flex flex-column align-items-start">
//                     <label htmlFor="username" className="form-label">Username</label>
//                     <input type="text" className="rounded-3  small  w-100 "
//                         style={{ outline: "none", border: "none", color: "darkgray", padding: "0.8rem" }} id="username" placeholder="Enter your username" />
//                 </div>
//                 <div className="mb-3 d-flex flex-column align-items-start">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input
//                         type="text"
//                         className="rounded-3  small  w-100 "
//                         style={{ outline: "none", border: "none", color: "darkgray", padding: "0.8rem" }}
//                         id="password"
//                         placeholder="Enter your password"
//                     />
//                 </div>
//                 <button type="submit" className="btn  w-100 mb-3" style={{ backgroundColor: '#F7931A' }}>Log In</button>
//                 <div className="d-flex flex-md-row flex-column justify-content-between">
//                     <div className='d-flex  justify-content-center align-items-center' >
//                         <input type='checkbox' className='border' />
//                         <p className='mb-0 ml-2  '>Remember Me</p>
//                     </div>
//                     <p style={{ color: '#F7931A' }} className='mt-2 '>Forgot Password ?</p>
//                 </div>
//                 <hr />
//                 <p className="text-center">or continue with</p>
//                 <div className="d-flex justify-content-center align-items-center gap-3">
//                     <p className="btn  icon-btn">
//                         <FcGoogle size={24} />
//                     </p>
//                     <p className="me-2 icon-btn">
//                         <ImGithub size={24} />
//                     </p>
//                 </div>
//                 <p className="mt-3 text-center">Already have an account? <a href="/signup" style={{ color: '#F7931A' }}>Sign Up</a></p>
//             </div>
//         </div>
//     )
// }

// export default LoginData


import 'bootstrap/dist/css/bootstrap.min.css';
import { ImGithub } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/img/svg/dcbLogo 1.svg";
import { useState } from 'react';

const LoginData = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('userData'));
        if (storedUser && storedUser.username === username && storedUser.password === password) {
            alert("Login successful!");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="d-flex mt-4 justify-content-center align-items-center vh-100">
            <div className='p-5 border rounded' style={{ maxWidth: '400px', width: '100%', backgroundColor: '#09091D', color: "white" }}>
                <img src={logo} alt="Logo" className="mb-4 w-100" style={{ maxWidth: '200px', marginLeft: "50px" }} />
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 d-flex flex-column align-items-start">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="rounded-3 small w-100"
                            style={{ outline: "none", border: "none", color: "darkgray", padding: "0.8rem" }}
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="mb-3 d-flex flex-column align-items-start">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="rounded-3 small w-100"
                            style={{ outline: "none", border: "none", color: "darkgray", padding: "0.8rem" }}
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button type="submit" className="btn w-100 mb-3" style={{ backgroundColor: '#F7931A' }}>Log In</button>
                </form>
                <div className="d-flex flex-md-row flex-column justify-content-between">
                    <div className='d-flex justify-content-center align-items-center'>
                        <input type='checkbox' className='border' />
                        <p className='mb-0 ml-2'>Remember Me</p>
                    </div>
                    <p style={{ color: '#F7931A' }} className='mt-2'>Forgot Password?</p>
                </div>
                <hr />
                <p className="text-center">or continue with</p>
                <div className="d-flex justify-content-center align-items-center gap-3">
                    <p className="btn icon-btn">
                        <FcGoogle size={24} />
                    </p>
                    <p className="me-2 icon-btn">
                        <ImGithub size={24} />
                    </p>
                </div>
                <p className="mt-3 text-center">Don't have an account? <a href="/signup" style={{ color: '#F7931A' }}>Sign Up</a></p>
            </div>
        </div>
    );
}

export default LoginData;
