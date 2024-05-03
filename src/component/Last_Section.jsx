import React from 'react'
import footerlogo from '../assets/image/png/footerlogo.png'
import { Coortun, Discord, Github, Language, Teligram, Tiwtter, Youtube, } from './Icon'

const Last_Section = () => {
    return (
        <div className=''>
            <footer className=" bg-black mt-[-2px] " id='Community'>
                <div className="border-[1px] border-[#141414] rounded-[12px_12px_0px_0px]">
                    <div className="max-w-[1140px] pb-[81px] px-3 mx-auto pt-5 lg:pt-[80px]  max-md:pt-[40px] max-sm:pt-[20px]">
                        <div className=" flex md:justify-between max-lg:flex-col  max-lg:items-center">
                            <div className=" max-w-[334px] w-[100%] max-lg:max-w-[476.45px]">
                                <img src={footerlogo} alt="logo" />
                                <p className=" font-normal text-[16px] leading-[27.3px] text-white mt-[20px]"> Managed by Solana Foundation </p>
                                <div className=" flex gap-[10px] pt-[24px]">
                                    <a href="https://www.youtube.com/" target='_blank' className=' cursor-pointer hover:translate-y-[-5px] duration-300 ease-in-out'><Youtube /></a>
                                    <a href="https://twitter.com/?lang=en" className=' cursor-pointer hover:translate-y-[-5px] duration-300 ease-in-out'><Tiwtter /></a>
                                    <a href="https://discord.com/channels/@me" className=' cursor-pointer hover:translate-y-[-5px] duration-300 ease-in-out'><Discord /></a>
                                    <a href="https://github.com/" className=' cursor-pointer hover:translate-y-[-5px] duration-300 ease-in-out'><Coortun /></a>
                                    <a href="https://github.com/" className=' cursor-pointer hover:translate-y-[-5px] duration-300 ease-in-out'><Github /></a>
                                    <a href="https://web.telegram.org/" className=' cursor-pointer hover:translate-y-[-5px] duration-300 ease-in-out'><Teligram /></a>
                                </div>
                                <p className=" font-normal text-[16px] leading-[27.3px] text-[#848895] mt-[20px] ">
                                    © {new Date().getFullYear()} Solana Foundation. All rights
                                    reserved.
                                </p>
                            </div>
                            <div className=" max-w-[476.45px] max-lg:pt-[24px] w-[100%]  flex">
                                <ul className=" max-w-[161px] w-[100%] lg:pl-[20px]">
                                    <li className=" font-normal  text-[16px] leading-[18.72px] text-white uppercase">
                                        Solana
                                    </li>
                                    <li className=" mt-[13px]"><a href="" className=" font-normal text-[15px] leading-[27.3px] text-[#848895]">Grants</a>
                                    </li>
                                    <li className=" mt-[11px]"><a href="" className=" font-normal text-[15px] leading-[27.3px] text-[#848895]"> Break Solana</a>
                                    </li>
                                    <li className=" mt-[11px]"><a href="" className=" font-normal text-[15px] leading-[27.3px] text-[#848895]"> Media Kit</a>
                                    </li>
                                    <li className=" mt-[11px]"> <a href="" className=" font-normal text-[15px] leading-[27.3px] text-[#848895]">
                                        Careers</a>
                                    </li>
                                    <li className=" mt-[11px]"> <a href="" className=" font-normal text-[15px] leading-[27.3px] text-[#848895]">
                                        Disclaimer</a>
                                    </li>
                                </ul>
                                <ul className="max-w-[205px] max-sm:hidden w-[100%] lg:pl-[20px]">
                                    <li className=" font-normal  text-[16px] leading-[18.72px] text-white uppercase">
                                        Get Connected
                                    </li>
                                    <li className=" mt-[13px]"> <a href="" className=" font-normal text-[15px] leading-[27.3px] text-[#848895]">
                                        Ecosystem</a>
                                    </li>
                                    <li className=" mt-[11px]"> <a href="" className=" font-normal text-[15px] leading-[27.3px] text-[#848895]">
                                        Blog</a>
                                    </li>
                                    <li className=" mt-[11px]"> <a href="" className=" font-normal text-[15px] leading-[27.3px] text-[#848895]">
                                        Newsletter</a>
                                    </li>
                                </ul>
                                <ul className="lg:pl-[20px]">
                                    <li> <a href="" className=" uppercase font-normal text-[15px] leading-[24px] text-[#848895] flex items-center gap-[4px]">
                                        <Language />
                                        <span>en</span>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                            <ul className=" w-[100%] max-w-[476.45px]   sm:hidden pt-[24px] ">
                                <li className=" font-normal  text-[16px] leading-[18.72px] text-white uppercase"> Get Connected </li>
                                <li className=" mt-[13px]"><a href="" className=" font-normal text-[15px] leading-[27.3px] text-[#848895]">Ecosystem </a>
                                </li>
                                <li className=" mt-[11px]"><a href="" className=" font-normal text-[15px] leading-[27.3px] text-[#848895]">Blog </a>
                                </li>
                                <li className=" mt-[11px]"><a href="" className=" font-normal text-[15px] leading-[27.3px] text-[#848895]">Newsletter </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Last_Section