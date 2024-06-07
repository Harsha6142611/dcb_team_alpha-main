import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { UserProvider } from "./context/UserContext";

// import Nav from "./components/Nav";
// // import Footer from "./components/Footer";
// import Login from "./login/Login";
// import Register from "./login/Register";
// import Logout from "./login/Logout";
// import Change from "./login/Change";
// import Forget from "./login/Forget";
import Home from "./Home";
import Compiler from "./compiler/Compiler";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// import GenerateInvoice from "./components/GenerateInvoice";
// // import AboutUs from "./Header/AboutUs";
// import ResetPasswordForm from "./login/ResetPasswordForm";
// import Profile from "./login/Profile";
// // import ContactUs from "./Header/ContactUs";


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compiler" element={<Compiler />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/generate-invoice" element={<GenerateInvoice />} />
        <Route path="/Profile" element={<Profile />} />

        <Route path="/logout" element={<Logout />} />

        <Route path="/forget" element={<Forget />} />
        <Route path="/changepass" element={<Change />} />
        <Route
          path="/reset-password/:resetToken"
          element={<ResetPasswordForm />}
        /> */}
        {/* <Route path="/about" element={<AboutUs />} /> */}
        {/* <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
    </>
  );
};
function App() {
  
  return <Routing />;
}

export default App;
