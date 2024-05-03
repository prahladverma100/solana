import React from 'react'
import { Arrow_icon } from './Icon'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true, // Ensure center slide on click
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.6,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const DigDeeper = () => {
    return (
        <div className=' bg-black mt-[-2px] pb-5 lg:pb-[100px]' id='Network'>
            <div className=' max-w-[1122px] px-3 mx-auto'>
                <h3 className='ff_Helvetica text-white  font-normal text-[38px] leading-[42px] text-center lg:text-start' data-aos="fade-right">Dig deeper.</h3>
                <p className=' text-[#C4C4C4] ff_Helvetica font-normal text-xl pb-3 lg:pb-8 text-center lg:text-start' data-aos="fade-right">Learn from resources across the greater Solana ecosystem.</p>
                <div className=' hidden lg:block'>
                    <div className=' flex-row gap-6 flex'>
                        <div className=' bg-[#19161C]   overflow-hidden cursor-pointer px-8 h-[282px] rounded-[12px] w-4/12  relative card py-8' data-aos="zoom-in">
                            <div className=' bg-[#A962FF]  bottom-[-10%] blur-[33px] rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'> TOOL / LIBRARY </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white pt-[9px]'>Core Documentation</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px]  pt-[14px] pb-9'>The official Solana documentation on developing, validators, SPL tokens, wallets and more.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'>LEARN MORE <Arrow_icon /></p>
                        </div>
                        <div className=' bg-[#19161C] px-8 h-[282px] rounded-[12px] w-4/12 relative overflow-hidden cursor-pointer card py-8' data-aos="zoom-in">
                            <div className='   bottom-[-10%] blur-[33px]  rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'>TOOL / LIBRARY   </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white pt-[9px]'>Core Documentation</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px] pt-[14px] pb-[10px]'>The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'>LEARN MORE <Arrow_icon /></p>

                        </div>
                        <div className=' bg-[#19161C] px-8 h-[282px] rounded-[12px] cursor-pointer w-4/12 card overflow-hidden py-8 relative' data-aos="zoom-in">
                            <div className='   bottom-[-10%] blur-[33px]  rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'>TOOL / LIBRARY   </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white pt-[9px]'>Core Documentation</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px] pt-[14px] pb-9'>Solana Stack Exchange is a question and answer site for Solana software users and developers.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'> LEARN MORE <Arrow_icon /></p>

                        </div>
                    </div>
                    <div className=' flex-row gap-6 pt-6 flex'>
                        <div className=' bg-[#19161C]  duration-300 ease-in-out overflow-hidden cursor-pointer px-8 h-[282px] rounded-[12px] w-4/12 hover:duration-300 hover:ease-in-out  relative card py-8' data-aos="zoom-in">
                            <div className='   bottom-[-10%] blur-[33px] duration-200 ease-in-out rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'> TOOL / LIBRARY </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white pt-[9px]'>Solana Playground</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px]  pt-[14px] pb-9'>Easily build, deploy and test Solana programs and smart contracts from a browser IDE.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'>LEARN MORE <Arrow_icon /></p>
                        </div>
                        <div className=' bg-[#19161C] px-8 h-[282px] rounded-[12px] w-4/12 relative overflow-hidden cursor-pointer card py-8' data-aos="zoom-in">
                            <div className='   bottom-[-10%] blur-[33px]  rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'>TOOL / LIBRARY   </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white pt-[9px]'>create-solana-dapp</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px] pt-[14px] pb-9'>Get up and running fast with Solana dApps, generate a project template in seconds.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'>LEARN MORE <Arrow_icon /></p>

                        </div>
                        <div className=' bg-[#19161C] px-8 h-[282px] rounded-[12px] cursor-pointer w-4/12 card overflow-hidden py-8 relative' data-aos="zoom-in">
                            <div className='   bottom-[-10%] blur-[33px]  rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'>TOOL / LIBRARY   </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white pt-[9px]'>Anchor Docs</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px] pt-[14px] pb-[10px]'>Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools for writing smart contracts.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'> LEARN MORE <Arrow_icon /></p>

                        </div>
                    </div>
                    <div className=' flex-row gap-6 pt-6 flex'>
                        <div className=' bg-[#19161C]  duration-300 ease-in-out overflow-hidden cursor-pointer px-8 h-[282px] rounded-[12px] w-4/12 hover:duration-300 hover:ease-in-out  relative card py-8' data-aos="zoom-in">
                            <div className='   bottom-[-10%] blur-[33px] duration-200 ease-in-out rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'> TOOL / LIBRARY </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white pt-[9px] max-w-[200px]'>Solana Program Library</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px]  pt-[14px] pb-9'>Easily build, deploy and test Solana programs and smart contracts from a browser IDE.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'>LEARN MORE <Arrow_icon /></p>
                        </div>
                        <div className=' bg-[#19161C] px-8 h-[282px] rounded-[12px] w-4/12 relative overflow-hidden cursor-pointer card py-8' data-aos="zoom-in">
                            <div className='   bottom-[-10%] blur-[33px]  rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'>TOOL / LIBRARY   </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white max-w-[159px] pt-[9px]'>Program Examples</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px] pt-[14px] pb-9'>Get up and running fast with Solana dApps, generate a project template in seconds.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'>LEARN MORE <Arrow_icon /></p>

                        </div>
                        <div className=' w-4/12'>
                        </div>
                    </div>
                </div>
                <div className=' lg:hidden block pt-4'>
                    <Slider {...settings}>
                        <div className=' bg-[#19161C]  duration-300 ease-in-out overflow-hidden cursor-pointer px-8 h-[282px] rounded-[12px] w-4/12 hover:duration-300 hover:ease-in-out  relative card py-8'>
                            <div className='  bottom-[-10%] blur-[33px] duration-200 ease-in-out rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'> TOOL / LIBRARY </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white pt-[9px]'>Core Documentation</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px]  pt-[14px] pb-9'>The official Solana documentation on developing, validators, SPL tokens, wallets and more.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'>LEARN MORE <Arrow_icon /></p>
                        </div>
                        <div className=' bg-[#19161C] px-8 h-[282px] rounded-[12px] w-4/12 relative overflow-hidden cursor-pointer card py-8'>
                            <div className='  bottom-[-10%] blur-[33px]  rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'>TOOL / LIBRARY   </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white pt-[9px]'>Core Documentation</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px] pt-[14px] pb-[10px]'>The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'>LEARN MORE <Arrow_icon /></p>
                        </div>
                        <div className=' bg-[#19161C] px-8 h-[282px] rounded-[12px] cursor-pointer w-4/12 card overflow-hidden py-8 relative'>
                            <div className='  bottom-[-10%] blur-[33px]  rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'>TOOL / LIBRARY   </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white pt-[9px]'>Core Documentation</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px] pt-[14px] pb-9'>Solana Stack Exchange is a question and answer site for Solana software users and developers.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'> LEARN MORE <Arrow_icon /></p>
                        </div>
                        <div className=' bg-[#19161C]  duration-300 ease-in-out overflow-hidden cursor-pointer px-8 h-[282px] rounded-[12px] w-4/12 hover:duration-300 hover:ease-in-out  relative card py-8'>
                            <div className='  bottom-[-10%] blur-[33px] duration-200 ease-in-out rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'> TOOL / LIBRARY </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white pt-[9px]'>Solana Playground</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px]  pt-[14px] pb-9'>Easily build, deploy and test Solana programs and smart contracts from a browser IDE.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'>LEARN MORE <Arrow_icon /></p>
                        </div>
                        <div className=' bg-[#19161C] px-8 h-[282px] rounded-[12px] w-4/12 relative overflow-hidden cursor-pointer card py-8'>
                            <div className='  bottom-[-10%] blur-[33px]  rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'>TOOL / LIBRARY   </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white pt-[9px]'>create-solana-dapp</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px] pt-[14px] pb-9'>Get up and running fast with Solana dApps, generate a project template in seconds.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'>LEARN MORE <Arrow_icon /></p>
                        </div>
                        <div className=' bg-[#19161C] px-8 h-[282px] rounded-[12px] cursor-pointer w-4/12 card overflow-hidden py-8 relative'>
                            <div className='  bottom-[-10%] blur-[33px]  rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'>TOOL / LIBRARY   </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white pt-[9px]'>Anchor Docs</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px] pt-[14px] pb-[10px]'>Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools for writing smart contracts.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'> LEARN MORE <Arrow_icon /></p>
                        </div>
                        <div className=' bg-[#19161C]  duration-300 ease-in-out overflow-hidden cursor-pointer px-8 h-[282px] rounded-[12px] w-4/12 hover:duration-300 hover:ease-in-out  relative card py-8'>
                            <div className='  bottom-[-10%] blur-[33px] duration-200 ease-in-out rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'> TOOL / LIBRARY </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white pt-[9px] max-w-[200px]'>Solana Program Library</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px]  pt-[14px] pb-9'>Easily build, deploy and test Solana programs and smart contracts from a browser IDE.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'>LEARN MORE <Arrow_icon /></p>
                        </div>
                        <div className=' bg-[#19161C] px-8 h-[282px] rounded-[12px] w-4/12 relative overflow-hidden cursor-pointer card py-8'>
                            <div className='  bottom-[-10%] blur-[33px]  rounded-[30px] absolute card1  h-[59px] w-[259px]'>
                            </div>
                            <p className='text-[#9945FF] ff_Helvetica text-[12px] font-normal leading-5'>TOOL / LIBRARY   </p>
                            <p className='ff_Helvetica leading-5 font-normal  text-[19px] text-white max-w-[159px] pt-[9px]'>Program Examples</p>
                            <p className='ff_Helvetica leading-[26px] text-white font-normal max-w-[261px] pt-[14px] pb-9'>Get up and running fast with Solana dApps, generate a project template in seconds.</p>
                            <p className='ff_Helvetica font-normal text-[11px] leading-[27.3px] text-white flex items-center gap-[7px]'>LEARN MORE <Arrow_icon /></p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default DigDeeper