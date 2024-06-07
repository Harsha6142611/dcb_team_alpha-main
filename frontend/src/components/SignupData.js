// import 'bootstrap/dist/css/bootstrap.min.css';
// import { ImGithub } from "react-icons/im";
// import { FcGoogle } from "react-icons/fc";
// import ReCAPTCHA from 'react-google-recaptcha';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useState } from 'react';
// import logo from "../assets/img/svg/dcbLogo 1.svg";
// const SignupData = () => {

//     const [showPassword, setShowPassword] = useState(false);

//     const togglePasswordVisibility = () => {
//         setShowPassword(prevState => !prevState);
//     };

//     function onChange(value) {
//         console.log("Captcha value:", value);
//     }

//   return (
//     <div className='p-5'>
//     <div className="d-flex  justify-content-center align-items-center vh-100 mt-4 " >
//     <div className='p-5 border rounded' style={{ maxWidth: '400px', width: '100%', backgroundColor: '#09091D', color: "white" }}>
//         <img src={logo} alt="Logo" className="mb-3 d-flex " style={{ maxWidth: '200px' , marginLeft:"50px" }} />
//         <div className="mb-2 d-flex flex-column align-items-start">
//             <label htmlFor="username" className="form-label">Username</label>
//             <input type="text"
//                 style={{ outline: "none", border: "none", color: "GrayText", padding: "0.8rem" }}
//                 className="rounded-3 small w-100" id="username" placeholder="Enter your username" />
//         </div>
//         <div className="mb-2 d-flex flex-column align-items-start">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input type="email" className="rounded-3  small w-100"
//                 style={{ outline: "none", border: "none", color: "darkgray", padding: "0.8rem" }}
//                 id="email" placeholder="Enter your email" />
//         </div>
//         <div className="mb-2 d-flex flex-column align-items-start">
//             <label htmlFor="password" className="form-label">Create Password</label>
//             <div className='d-flex justify-content-center align-items-center rounded-3 bg-white w-100'>
//                 <input
//                     type={showPassword ? "text" : "password"}
//                     className="rounded-3  small  w-100 "
//                     style={{ outline: "none", border: "none", color: "darkgray", padding: "0.8rem" }}
//                     id="password"
//                     placeholder="Enter your password"
//                 />
//                 <button className="btn btn-outline-white text-black" type="button" onClick={togglePasswordVisibility}>
//                     {showPassword ? <FaEye /> : <FaEyeSlash />}
//                 </button>
//             </div>
//         </div>
//         <p className='d-flex align-content-start mb-1 mt-2'>Verify</p>
//         <div className='mb-3'>
//             <ReCAPTCHA
//                 sitekey="6Lc63O8pAAAAAOC8myTwSWBi4BVQCPOqU8yUP4l_"
//                 style={{ transform: "scale(0.80)", transformOrigin: "0 0" }}
//                 onChange={onChange} />
//         </div>
//         <button type="submit" className="btn w-100 mb-2" style={{ backgroundColor: '#F7931A' }}>Sign Up</button>
//         <hr />
//         <p className="text-center mb-2">or continue with</p>
//         <div className="d-flex justify-content-center align-items-center gap-3 mb-2">
//             <p className="btn icon-btn">
//                 <FcGoogle size={24} />
//             </p>
//             <p className="me-2 icon-btn">
//                 <ImGithub size={24} />
//             </p>
//         </div>
//         <p className="text-center mb-0">Already have an account? <a href="/login" style={{ color: '#F7931A' }}>Login</a></p>
//     </div>
// </div >
// </div>
//   )
// }

// export default SignupData



// import 'bootstrap/dist/css/bootstrap.min.css';
// import { ImGithub } from "react-icons/im";
// import { FcGoogle } from "react-icons/fc";
// import ReCAPTCHA from 'react-google-recaptcha';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useState } from 'react';
// import logo from "../assets/img/svg/dcbLogo 1.svg";

// const SignupData = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [recaptchaValue, setRecaptchaValue] = useState('');
//     const [validationMessages, setValidationMessages] = useState([]);

//     const togglePasswordVisibility = () => {
//         setShowPassword(prevState => !prevState);
//     };

//     const handleUsernameChange = (e) => {
//         setUsername(e.target.value);
//     };

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//         validatePassword(e.target.value);
//     };

//     const handleRecaptchaChange = (value) => {
//         setRecaptchaValue(value);
//     };

//     const validatePassword = (password) => {
//         const messages = [];
        
//         if (password.length < 8) {
//             messages.push("Password must be at least 8 characters long.");
//         }
//         if (!/[A-Z]/.test(password)) {
//             messages.push("Password must contain at least one uppercase letter.");
//         }
//         if (!/[a-z]/.test(password)) {
//             messages.push("Password must contain at least one lowercase letter.");
//         }
//         if (!/[0-9]/.test(password)) {
//             messages.push("Password must contain at least one number.");
//         }
//         if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
//             messages.push("Password must contain at least one special character.");
//         }

//         setValidationMessages(messages);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (validationMessages.length > 0) {
//             alert("Please correct the following errors:\n" + validationMessages.join("\n"));
//             return;
//         }

//         if (recaptchaValue) {
//             const userData = { username, email, password };
//             localStorage.setItem('userData', JSON.stringify(userData)); // Store user data in localStorage
//             console.log("User registered:", userData);
//             alert("Signup successful! You can now log in.");
//             window.location.href = "/login"; // Redirect to login page
//         } else {
//             alert("Please complete the CAPTCHA");
//         }
//     };

//     return (
//         <div className='p-5'>
//             <div className="d-flex justify-content-center align-items-center vh-100 mt-4">
//                 <div className='p-5 border rounded' style={{ maxWidth: '400px', width: '100%', backgroundColor: '#09091D', color: "white" }}>
//                     <img src={logo} alt="Logo" className="mb-3 d-flex" style={{ maxWidth: '200px', marginLeft: "50px" }} />
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-2 d-flex flex-column align-items-start">
//                             <label htmlFor="username" className="form-label">Username</label>
//                             <input
//                                 type="text"
//                                 style={{ outline: "none", border: "none", color: "GrayText", padding: "0.8rem" }}
//                                 className="rounded-3 small w-100"
//                                 id="username"
//                                 placeholder="Enter your username"
//                                 value={username}
//                                 onChange={handleUsernameChange}
//                             />
//                         </div>
//                         <div className="mb-2 d-flex flex-column align-items-start">
//                             <label htmlFor="email" className="form-label">Email</label>
//                             <input
//                                 type="email"
//                                 className="rounded-3 small w-100"
//                                 style={{ outline: "none", border: "none", color: "darkgray", padding: "0.8rem" }}
//                                 id="email"
//                                 placeholder="Enter your email"
//                                 value={email}
//                                 onChange={handleEmailChange}
//                             />
//                         </div>
//                         <div className="mb-2 d-flex flex-column align-items-start">
//                             <label htmlFor="password" className="form-label">Create Password</label>
//                             <div className='d-flex justify-content-center align-items-center rounded-3 bg-white w-100'>
//                                 <input
//                                     type={showPassword ? "text" : "password"}
//                                     className="rounded-3 small w-100"
//                                     style={{ outline: "none", border: "none", color: "darkgray", padding: "0.8rem" }}
//                                     id="password"
//                                     placeholder="Enter your password"
//                                     value={password}
//                                     onChange={handlePasswordChange}
//                                 />
//                                 <button className="btn btn-outline-white text-black" type="button" onClick={togglePasswordVisibility}>
//                                     {showPassword ? <FaEye /> : <FaEyeSlash />}
//                                 </button>
//                             </div>
//                             {validationMessages.length > 0 && (
//                                 <ul style={{ color: 'red', padding: '0' }}>
//                                     {validationMessages.map((message, index) => (
//                                         <li key={index} style={{ listStyle: 'none' }}>{message}</li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>
//                         <p className='d-flex align-content-start mb-1 mt-2'>Verify</p>
//                         <div className='mb-3'>
//                             <ReCAPTCHA
//                                 sitekey="6Lc63O8pAAAAAOC8myTwSWBi4BVQCPOqU8yUP4l_"
//                                 style={{ transform: "scale(0.80)", transformOrigin: "0 0" }}
//                                 onChange={handleRecaptchaChange}
//                             />
//                         </div>
//                         <button type="submit" className="btn w-100 mb-2" style={{ backgroundColor: '#F7931A' }}>Sign Up</button>
//                     </form>
//                     <hr />
//                     <p className="text-center mb-2">or continue with</p>
//                     <div className="d-flex justify-content-center align-items-center gap-3 mb-2">
//                         <p className="btn icon-btn">
//                             <FcGoogle size={24} />
//                         </p>
//                         <p className="me-2 icon-btn">
//                             <ImGithub size={24} />
//                         </p>
//                     </div>
//                     <p className="text-center mb-0">Already have an account? <a href="/login" style={{ color: '#F7931A' }}>Login</a></p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SignupData;



// Updated Code 

import 'bootstrap/dist/css/bootstrap.min.css';
import { ImGithub } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import ReCAPTCHA from 'react-google-recaptcha';
import { FaEye, FaEyeSlash, FaCheck, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import logo from "../assets/img/svg/dcbLogo 1.svg";

const SignupData = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState('');

    // Individual states for each validation message
    const [isLengthValid, setIsLengthValid] = useState(false);
    const [isUppercaseValid, setIsUppercaseValid] = useState(false);
    const [isLowercaseValid, setIsLowercaseValid] = useState(false);
    const [isNumberValid, setIsNumberValid] = useState(false);
    const [isSpecialCharValid, setIsSpecialCharValid] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
    };

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const validatePassword = (password) => {
        setIsLengthValid(password.length >= 8);
        setIsUppercaseValid(/[A-Z]/.test(password));
        setIsLowercaseValid(/[a-z]/.test(password));
        setIsNumberValid(/[0-9]/.test(password));
        setIsSpecialCharValid(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isLengthValid || !isUppercaseValid || !isLowercaseValid || !isNumberValid || !isSpecialCharValid) {
            alert("Please correct the password errors before submitting.");
            return;
        }

        if (recaptchaValue) {
            const userData = { username, email, password };
            localStorage.setItem('userData', JSON.stringify(userData)); // Store user data in localStorage
            console.log("User registered:", userData);
            alert("Signup successful! You can now log in.");
            window.location.href = "/login"; // Redirect to login page
        } else {
            alert("Please complete the CAPTCHA");
        }
    };

    return (
        <div className='p-5'>
            <div className="d-flex justify-content-center align-items-center vh-100 mt-4">
                <div className='p-5 border rounded' style={{ maxWidth: '400px', width: '100%', backgroundColor: '#09091D', color: "white" }}>
                    <img src={logo} alt="Logo" className="mb-3 d-flex" style={{ maxWidth: '200px', marginLeft: "50px" }} />
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2 d-flex flex-column align-items-start">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                style={{ outline: "none", border: "none", color: "GrayText", padding: "0.8rem" }}
                                className="rounded-3 small w-100"
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        </div>
                        <div className="mb-2 d-flex flex-column align-items-start">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="rounded-3 small w-100"
                                style={{ outline: "none", border: "none", color: "darkgray", padding: "0.8rem" }}
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="mb-2 d-flex flex-column align-items-start">
                            <label htmlFor="password" className="form-label">Create Password</label>
                            <div className='d-flex justify-content-center align-items-center rounded-3 bg-white w-100'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="rounded-3 small w-100"
                                    style={{ outline: "none", border: "none", color: "darkgray", padding: "0.8rem" }}
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <button className="btn btn-outline-white text-black" type="button" onClick={togglePasswordVisibility}>
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                            <div className="mt-2">
                                <p>Password must have:</p>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li style={{ color: isLengthValid ? 'green' : 'red' }}>
                                        {isLengthValid ? <FaCheck /> : <FaTimes />} At least 8 characters
                                    </li>
                                    <li style={{ color: isUppercaseValid ? 'green' : 'red' }}>
                                        {isUppercaseValid ? <FaCheck /> : <FaTimes />} At least one uppercase letter
                                    </li>
                                    <li style={{ color: isLowercaseValid ? 'green' : 'red' }}>
                                        {isLowercaseValid ? <FaCheck /> : <FaTimes />} At least one lowercase letter
                                    </li>
                                    <li style={{ color: isNumberValid ? 'green' : 'red' }}>
                                        {isNumberValid ? <FaCheck /> : <FaTimes />} At least one number
                                    </li>
                                    <li style={{ color: isSpecialCharValid ? 'green' : 'red' }}>
                                        {isSpecialCharValid ? <FaCheck /> : <FaTimes />} At least one special character
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className='d-flex align-content-start mb-1 mt-2'>Verify</p>
                        <div className='mb-3'>
                            <ReCAPTCHA
                                sitekey="6Lc63O8pAAAAAOC8myTwSWBi4BVQCPOqU8yUP4l_"
                                style={{ transform: "scale(0.80)", transformOrigin: "0 0" }}
                                onChange={handleRecaptchaChange}
                            />
                        </div>
                        <button type="submit" className="btn w-100 mb-2" style={{ backgroundColor: '#F7931A' }}>Sign Up</button>
                    </form>
                    <hr />
                    <p className="text-center mb-2">or continue with</p>
                    <div className="d-flex justify-content-center align-items-center gap-3 mb-2">
                        <p className="btn icon-btn">
                            <FcGoogle size={24} />
                        </p>
                        <p className="me-2 icon-btn">
                            <ImGithub size={24} />
                        </p>
                    </div>
                    <p className="text-center mb-0">Already have an account? <a href="/login" style={{ color: '#F7931A' }}>Login</a></p>
                </div>
            </div>
        </div>
    );
}

export default SignupData;
