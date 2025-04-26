import React from 'react'
import './App.css'

function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className='about_footer'>
                <div className='title_footer'>About Us</div>
                <div className='line'></div>
                <div style={{ padding: '0.5rem', lineHeight: '35px' }}>From the ground up, Teknic has been driven by a passion to craft the
                    highest quality steel structures to withstand unyielding skeletons of our cities. We envision our towering steel
                    structures shaping the future of bold architecture and resilient skylines.</div>
            </div>
            <div className='contact_footer'>
                <div className='title_footer'>Contact Us</div>
                <div className='line'></div>
                <div className='info_footer'>
                    <div><i class="fa fa-solid fa-phone"></i></div>
                    <div style={{ marginLeft: '1rem' }}>+91 9866338775</div></div>
                <div className='info_footer'>
                    <div><i class="fa fa-solid fa-envelope"></i></div>
                    <div style={{ marginLeft: '1rem' }}>chandusingireddy04@gmail.com</div>
                </div>
                <div className='info_footer'>
                    <div><i class="fa fa-solid fa-paper-plane"></i></div>
                    <div style={{ marginLeft: '1rem' }}>Kukatpally, hyderabad</div>
                </div>
            </div>
        </div>
    )
}

export default Footer