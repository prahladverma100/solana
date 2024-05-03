import Buildspace from '../assets/image/png/Buildspace.png'
import SolanaBytes from '../assets/image/png/solanaBytes.png'
import ScaffoldSeries from '../assets/image/png/ScaffoldSeries.png'
import Freecodecamp from '../assets/image/png/Freecodecamp.png'
import SolanaDeveloment from '../assets/image/png/SolanaDeveloment.png'
import SolanaBootcamp from '../assets/image/png/SolanaBootcamp.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Arrow } from './Icon'
    ;
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
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const GetStarted = () => {
    return (
        <div className=' bg-[black] mt-[-2px] pb-7 lg:pb-[128px]'>
            <div className=' max-w-[1122px] px-3  mx-auto'>
                <h3 className='ff_Helvetica text-white  font-normal text-[38px] leading-[42px] text-center lg:text-start' data-aos="fade-right">Get started.</h3>
                <p className=' text-[#C4C4C4] ff_Helvetica font-normal text-xl pb-8 text-center lg:text-start' data-aos="fade-right">Use these Solana Foundation and community courses to begin your journey into Solana development.</p>
                <div className=' bg_img bg-cover px-3 lg:pl-[88px] pt-3 lg:pt-[85px] pb-3 lg:pb-[76px] bg-center bg-no-repeat' data-aos="fade-left">
                    <a href="" className=' text-white bg-[#9945FF] px-[11px] py-[1px] ff_Helvetica text-[11px] font-normal leading-[18px] rounded-[16px]'>17 Chapters</a>
                    <h1 className=' text-white text-[39px] ff_Helvetica leading-10 pt-[17px]'> Solana Development Course</h1>
                    <p className=' max-w-[387px] pt-[29px] ff_Helvetica font-normal text-[18px] text-white leading-7 pb-[26px]'>Quickstart your Solana development starting from nothing to complex programs.</p>
                    <Arrow />
                </div>
                <div className=' hidden lg:block'>
                    <div className=' flex-row flex gap-6 pt-6'>
                        <div className=' w-4/12 flex justify-center' data-aos="zoom-in">
                            <img className=' w-full cursor-pointer max-w-[346px] hover:translate-y-[-6px] ease-in-out duration-300  mx-auto' src={Buildspace} alt="Buildspace" />
                        </div>
                        <div className=' w-4/12 flex  justify-center' data-aos="zoom-in">
                            <img className=' w-full cursor-pointer max-w-[346px] hover:translate-y-[-6px] ease-in-out duration-300 ' src={SolanaBytes} alt="SolanaBytes" />
                        </div>
                        <div className=' w-4/12 flex justify-center' data-aos="zoom-in">
                            <img className=' w-full cursor-pointer max-w-[346px] hover:translate-y-[-6px] ease-in-out duration-300 ' src={ScaffoldSeries} alt="ScaffoldSeries" />
                        </div>
                    </div>
                    <div className=' flex-row flex gap-6 pt-6'>
                        <div className=' w-4/12 flex justify-center' data-aos="zoom-in">
                            <img className=' w-full cursor-pointer max-w-[346px] hover:translate-y-[-6px] ease-in-out duration-300  mx-auto' src={Freecodecamp} alt="Freecodecamp" />
                        </div>
                        <div className=' w-4/12 flex justify-center' data-aos="zoom-in">
                            <img className=' w-full cursor-pointer max-w-[346px] hover:translate-y-[-6px] ease-in-out duration-300 ' src={SolanaDeveloment} alt="SolanaDeveloment" />
                        </div>
                        <div className=' w-4/12 flex justify-center' data-aos="zoom-in">
                            <img className=' w-full cursor-pointer max-w-[346px] hover:translate-y-[-6px] ease-in-out duration-300 ' src={SolanaBootcamp} alt="SolanaBootcamp" />
                        </div>
                    </div>
                </div>

                <div className=' lg:hidden block pt-4'>
                    <Slider {...settings}>
                        <div className=' flex justify-center mx-auto'>
                            <img className=' w-full cursor-pointer  max-w-[346px] mx-auto' src={Buildspace} alt="Buildspace" />
                        </div>
                        <div className=' flex justify-center mx-auto'>
                            <img className=' w-full cursor-pointer mx-auto max-w-[346px]' src={SolanaBytes} alt="SolanaBytes" />
                        </div>
                        <div className=' flex justify-center mx-auto'>
                            <img className=' w-full cursor-pointer mx-auto max-w-[346px]' src={ScaffoldSeries} alt="ScaffoldSeries" />
                        </div>
                        <div className=' flex justify-center mx-auto'>
                            <img className=' w-full cursor-pointer mx-auto max-w-[346px]' src={Freecodecamp} alt="Freecodecamp" />
                        </div>
                        <div className=' flex justify-center mx-auto'>
                            <img className=' w-full cursor-pointer mx-auto max-w-[346px]' src={SolanaDeveloment} alt="SolanaDeveloment" />
                        </div>
                        <div className=' flex justify-center mx-auto'>
                            <img className=' w-full cursor-pointer mx-auto max-w-[346px]' src={SolanaBootcamp} alt="SolanaBootcamp" />
                        </div>
                    </Slider>
                </div>


            </div>
        </div>
    )
}

export default GetStarted