import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import logo from "../assets/img/svg/dcbLogo 1.svg";
const Footer1 = () => {
  return (
    <div>
    <div style={{ backgroundColor: '#09091D' }} className='d-flex flex-md-row flex-column justify-content-between align-content-center text-white p-5 font-Inter'>
        <div className='w-25  d-flex flex-column   gap-4'>
            <img src={logo} alt='Loading...' />
            <h6 style={{ fontWeight: "400", lineHeight: "22px" , fontSize:"14px" }} className='  text-start ms-3'>Platform designed to Empower Aspiring Web3 developers by providing incentives on thematic coding challenges & Sandbox Environment</h6>
        </div>
        <div style={{ fontWeight: "medium" }} className='d-flex flex-md-row flex-column justify-content-betweenalign-items-center gap-5 me-5'>
            <div>
                <p className='my-2 fs-6' style={{ color: '#98A2B3' }}>Company</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>About Us</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>Careers</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>News</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>Contact</p>
            </div>
            <div>
                <p className='my-2 fs-6' style={{ color: '#98A2B3' }}>Resources</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>Blog</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>Newsletter</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>Tutorials</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>Support</p>
            </div>
            <div>
                <p className='my-2 fs-6' style={{ color: '#98A2B3' }}>Social</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>Twitter</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>LinkedIn</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>Discord</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>YouTube</p>
            </div>
            <div>
                <p className='my-2 fs-6' style={{ color: '#98A2B3' }}>Legal</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>Terms</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>Privacy</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>Cookies</p>
                <p className='my-2 fs-6' style={{ color: '#EAECF0' }}>Licenses</p>
            </div>
        </div>
    </div>

    <div className=' align-items-center d-flex flex-md-row flex-column justify-content-between px-5  text-white' style={{ backgroundColor: "#1D2939" }}>
        <div className='d-flex mt-3 ' style={{ color: "gray" }}>
            <p style={{ fontWeight: "bold" }}>
                Copyright © 2023 DcodeBlock.
            </p>
            <p>
                All rights reserved.
            </p>
        </div>
        <div className='large gap-3 d-flex align-items-center fs-4 ' style={{ color: "gray" }} >
            <p>
                <FaTwitter />
            </p>
            <p>
                <FaLinkedin />
            </p>
            <p>
                <FaDiscord />
            </p>
            <p>
                <FaGithub />
            </p>
            <p>
                <FiYoutube />
            </p>
        </div>
    </div>
</div>
  )
}

export default Footer1
