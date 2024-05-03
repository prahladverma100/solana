import React from 'react'
function Preloader() {
    setTimeout(() => {
        document.getElementById("none").classList.add("hidden");
        document.body.classList.remove("overflow_hidden");
    }, 3000);
    return (
        <div>
            <div id="none" className="h-screen w-full bg-black  fixed top-0 start-0 z-[150]">
                <div className="flex justify-center items-center h-screen">
                    <div className=' animate-bounce relative'>
                        <h5 className=' ff_Helvetica font-bold text-[60px] lg:text-[90px] text-white xl:text-[120px] mb-0 leading-[37px] '>SOLANA</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader