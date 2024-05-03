import React, { useState } from "react";
import solanalogo from '../assets/image/png/solanalogo.png'
import Hero_img from '../assets/image/png/Hero_img.png'
import { Arrow1, Massage } from "./Icon";
const Header = () => {
    const [show, setShow] = useState(true);
    const handleClick = () => {
        setShow(true);
    };
    if (show === false) {
        document.body.classList.add("max-lg:overflow-hidden");
    } else {
        document.body.classList.remove("max-lg:overflow-hidden");
    }
    return (
        <div className=" bg-black">
            <div className=" w-full bg_gradient" id="Grants">
                <p className=" text-center uppercase ff_roboto font-normal text-[17px] leading-[27px] pt-[5px] pb-1">Breakpoint 2023 - New City. New Vibes - Get Early Access -</p>
            </div>

            <nav className=" py-5">
                <div className=" max-w-[1164px] px-3 mx-auto">
                    <div className=" flex items-center justify-between">
                        <div className=" z-[60] cursor-pointer">
                            <img className=" w-[181px] h-[27px]" src={solanalogo} alt="solanalogo" />
                        </div>
                        <ul className={`${show ? "left-[-100%]" : "left-0 bg-[black]"} flex items-center  gap-6 flex-row max-lg:fixed max-lg:z-50 max-lg:flex-col top-0 max-lg:w-full max-lg:h-full max-lg:min-h-screen max-lg:justify-center transition-all ease-linear duration-300}`}>

                            <li class="dropdown  relative inline-block group ">
                                <a onClick={handleClick} href="#Learn" class=" flex items-center drop gap-2 nav-ico group-hover:text-black transition-all duration-400 " >
                                    <p class="mb-0 text-[#848895] hover:text-[white] font-normal hover:font-bold ff_Helvetica text-[17px] leading-[27px] flex items-center">Learn <Arrow1 /></p>
                                </a>
                                <div class="hidden absolute bg-black min-w-[80px] shadow-[0_8px_16px_0_black] p-[12px_14px] z-10 group-hover:flex flex-col transition-all duration-400 ">
                                    <a onClick={handleClick} href="#Learn" class="text-white">
                                        Learn
                                    </a>
                                    <a onClick={handleClick} href="#home" class="text-white">
                                        home
                                    </a>

                                </div>
                            </li>
                            <li class="dropdown  relative inline-block group ">
                                <a onClick={handleClick} href="#Build" class=" flex items-center drop gap-2 nav-ico group-hover:text-black transition-all duration-400 " >
                                    <p class="mb-0 text-[#848895] hover:text-[white] font-normal hover:font-bold ff_Helvetica text-[17px] leading-[27px] flex items-center">Build <Arrow1 /></p>
                                </a>
                                <div class="hidden absolute bg-black min-w-[80px] shadow-[0_8px_16px_0_black] p-[12px_14px] z-10 group-hover:flex flex-col transition-all duration-400 ">
                                    <a onClick={handleClick} href="#Build" class="text-white">
                                        Build
                                    </a>
                                    <a onClick={handleClick} href="#Build" class="text-white">
                                        Build
                                    </a>
                                </div>
                            </li>
                            <li class="dropdown  relative inline-block group ">
                                <a onClick={handleClick} href="#Network" class=" flex items-center drop gap-2 nav-ico group-hover:text-black transition-all duration-400 " >
                                    <p class="mb-0 text-[#848895] hover:text-[white] font-normal hover:font-bold ff_Helvetica text-[17px] leading-[27px] flex items-center">Network <Arrow1 /></p>
                                </a>
                                <div class="hidden absolute bg-black min-w-[80px] shadow-[0_8px_16px_0_black] p-[12px_14px] z-10 group-hover:flex flex-col transition-all duration-400 ">
                                    <a onClick={handleClick} href="#Network" class="text-white">
                                        Network
                                    </a>
                                    <a onClick={handleClick} href="#Network" class="text-white">
                                        Network
                                    </a>
                                </div>
                            </li>
                            <li class="dropdown  relative inline-block group ">
                                <a onClick={handleClick} href="#Community" class=" flex items-center drop gap-2 nav-ico group-hover:text-black transition-all duration-400 " >
                                    <p class="mb-0 text-[#848895] hover:text-[white] font-normal hover:font-bold ff_Helvetica text-[17px] leading-[27px] flex items-center">Community <Arrow1 /></p>
                                </a>
                                <div class="hidden absolute bg-black min-w-[80px] shadow-[0_8px_16px_0_black] p-[12px_14px] z-10 group-hover:flex flex-col transition-all duration-400 ">
                                    <a onClick={handleClick} href="#Community" class="text-white">
                                        Community
                                    </a>
                                    <a onClick={handleClick} href="#Community" class="text-white">
                                        Community
                                    </a>

                                </div>
                            </li>
                        </ul>

                        <div className="lg:hidden block gap-5" id="Learn">
                            <div onClick={() => setShow(!show)} className="cursor-pointer  lg:hidden w-[32px] sm:h-[26px] h-[22px] relative z-[70] flex justify-between flex-col">
                                <span className={`${show ? "" : " rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"} bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                                <span className={`${show ? "" : "hidden"} bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                                <span className={`${show ? "" : "rotate-[-50deg] translate-y-[-50%]"} bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
            <div className=" relative" id="home">
                <div className=" w-[600px] absolute top-0 overflow-hidden right-0 h-[500px] blur-[600px] bg-[#F087FF]"></div>
                <div className="max-w-[1164px] px-3 mx-auto  pb-3">
                    <div className=" lg:flex-row flex-col flex items-center">
                        <div className=" lg:w-1/2 w-full" data-aos="fade-right">
                            <h1 className=" text-white text-5xl text-center lg:text-start sm:text-6xl lg:text-[94px] ff_Helvetica leading-[48px] sm:leading-[60px] lg:leading-[96px] font-normal ">Developer Resources</h1>
                            <p className=" font-normal text-[21px] text-center lg:text-start lg:max-w-[390px] max-w-none text-[#C4C4C4] pt-[19px] mb-10">A manual for joining the Solana ecosystem. By builders for builders.</p>
                            <div className=" flex gap-2 lg:justify-start justify-center">
                                <a href="https://web.dev/" target="_blank" className=" bg-[#14F195] hover:bg-white duration-300 ease-in-out py-3 px-[21px] rounded-[24px] ff_roboto text-[15px] leading-5 font-normal">Build Now</a>
                                <a href="https://api.stackexchange.com/" target="_blank" className=" bg-[#000000] hover:bg-white hover:text-black duration-300 ease-in-out py-3 px-[21px] rounded-[24px] ff_roboto text-[15px] leading-5 border-white border-[1px] text-white font-normal flex items-center gap-[10px] ">STACK EXCHANGE<Massage /></a>
                            </div>
                        </div>
                        <div className=" lg:w-1/2 w-full" data-aos="fade-left">
                            <img className=" w-full max-w-[636px] relative  mx-auto" src={Hero_img} alt="Hero_img" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;