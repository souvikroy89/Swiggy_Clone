import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className='h-screen bg-[#F0F0F5] border-b-2 border-black'>
                <div className='flex items-center gap-8 px-[250px] pt-[40px]'>
                    <div className='font-bold text-xl'>For better experience, download the Swiggy app now</div>
                    <div className='w-[200px] flex gap-4 items-center'>
                        <img className='w-full' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="Play Store" />
                        <img className='w-full' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="App Store" />
                    </div>

                </div>
                <div className='px-[250px] flex gap-[90px] '>
                    <div className='w-[180px] pt-[40px]'>
                        <img className='w-full' src="https://companieslogo.com/img/orig/SWIGGY.NS_BIG-f0e9f79a.png?t=1731987060" alt="" />
                        <p className='text-gray-500'>© 2025 Swiggy Limited</p>
                    </div>
                    <div className='pt-[50px] flex gap-[90px]'>
                        <div  >
                            <ul className='space-y-3'>
                                <li className='font-bold'>Company</li>
                                <li className='text-gray-500'>About Us</li>
                                <li className='text-gray-500'>Swiggy Corporate</li>
                                <li className='text-gray-500'>Careers</li>
                                <li className='text-gray-500'>Team</li>
                                <li className='text-gray-500'>Swiggy One</li>
                                <li className='text-gray-500'>Swiggy Instamart
                                </li>
                                <li className='text-gray-500'>Swiggy Dineout</li>
                                <li className='text-gray-500'>Swiggy Genie</li>
                                <li className='text-gray-500'>Minis</li>
                                <li className='text-gray-500'>Pyng</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='space-y-3'>
                                <li className='font-bold'>Contact us</li>
                                <li className='text-gray-500'>Help & Support</li>
                                <li className='text-gray-500'>Partner with us</li>
                                <li className='text-gray-500'>Ride with us</li>
                                <div className='pt-[195px] space-y-3'>
                                    <li className='font-bold'>Legal</li>
                                    <li className='text-gray-500'>Terms &  Conditions</li>
                                    <li className='text-gray-500'>Cookie Policy</li>
                                    <li className='text-gray-500'>Privacy Policy</li>
                                    <li className='text-gray-500'>Investor Relations</li>
                                </div>
                            </ul>
                        </div>
                        <div>
                            <ul className='space-y-3'>
                                <li className='font-bold'>Available in:</li>
                                <li className='text-gray-500'>Bangalore</li>
                                <li className='text-gray-500'>Gurgaon</li>
                                <li className='text-gray-500'>Hyderabad</li>
                                <li className='text-gray-500'>Delhi</li>
                                <li className='text-gray-500'>Mumbai</li>
                                <li className='text-gray-500'>Pune</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='space-y-3'>
                                <li className='font-bold'>Life at Swiggy</li>
                                <li className='text-gray-500'>Explore with Swiggy</li>
                                <li className='text-gray-500'>Swiggy News</li>
                                <li className='text-gray-500'>Snackables</li>
                                <div className='space-y-3 pt-[200px]'>
                                    <li className='font-bold'>Social Links</li>
                                    <div className='flex gap-4'>
                                        < FaLinkedin className='text-gray-500 text-xl' />
                                        <FaInstagram className='text-gray-500 text-xl' />
                                        <FaFacebookF className='text-gray-500 text-xl' />
                                        <FaPinterest className='text-gray-500 text-xl' />
                                        <FaTwitter className='text-gray-500 text-xl' />
                                    </div>
                                </div>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer