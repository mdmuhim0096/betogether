import React, { useEffect, useState } from 'react'

const Preloader = () => {
    const [isLoad, setIsLoad] = useState(false);

    return (
        <div className={`w-full h-screen fixed z-50 top-0 left-0 bg-black flex justify-center items-center ${isLoad ? "hidden" : " "}`}>
            <div className="wrapper">
                <div className="line line1">
                    <span className="circle circle-top"></span>
                    <div className="dotted">
                        <span className="dot dot-top"></span>
                        <span className="dot dot-middle-top"></span>
                        <span className="dot dot-middle-bottom"></span>
                        <span className="dot dot-bottom"></span>
                    </div>
                    <span className="circle circle-bottom"></span>
                </div>
                <div className="line line2">
                    <span className="circle circle-top"></span>
                    <div className="dotted">
                        <span className="dot dot-top"></span>
                        <span className="dot dot-middle-top"></span>
                        <span className="dot dot-middle-bottom"></span>
                        <span className="dot dot-bottom"></span>
                    </div>
                    <span className="circle circle-bottom"></span>
                </div>
                <div className="line line3">
                    <span className="circle circle-top"></span>
                    <div className="dotted">
                        <span className="dot dot-top"></span>
                        <span className="dot dot-middle-top"></span>
                        <span className="dot dot-middle-bottom"></span>
                        <span className="dot dot-bottom"></span>
                    </div>
                    <span className="circle circle-bottom"></span>
                </div>
                <div className="line line4">
                    <span className="circle circle-top"></span>
                    <div className="dotted">
                        <span className="dot dot-top"></span>
                        <span className="dot dot-middle-top"></span>
                        <span className="dot dot-middle-bottom"></span>
                        <span className="dot dot-bottom"></span>
                    </div>
                    <span className="circle circle-bottom"></span>
                </div>
                <div className="line line5">
                    <span className="circle circle-top"></span>
                    <div className="dotted">
                        <span className="dot dot-top"></span>
                        <span className="dot dot-middle-top"></span>
                        <span className="dot dot-middle-bottom"></span>
                        <span className="dot dot-bottom"></span>
                    </div>
                    <span className="circle circle-bottom"></span>
                </div>
                <div className="line line6">
                    <span className="circle circle-top"></span>
                    <div className="dotted">
                        <span className="dot dot-top"></span>
                        <span className="dot dot-middle-top"></span>
                        <span className="dot dot-middle-bottom"></span>
                        <span className="dot dot-bottom"></span>
                    </div>
                    <span className="circle circle-bottom"></span>
                </div>
                <div className="line line7">
                    <span className="circle circle-top"></span>
                    <div className="dotted">
                        <span className="dot dot-top"></span>
                        <span className="dot dot-middle-top"></span>
                        <span className="dot dot-middle-bottom"></span>
                        <span className="dot dot-bottom"></span>
                    </div>
                    <span className="circle circle-bottom"></span>
                </div>
                <div className="line line8">
                    <span className="circle circle-top"></span>
                    <div className="dotted">
                        <span className="dot dot-top"></span>
                        <span className="dot dot-middle-top"></span>
                        <span className="dot dot-middle-bottom"></span>
                        <span className="dot dot-bottom"></span>
                    </div>
                    <span className="circle circle-bottom"></span>
                </div>
                <div className="line line9">
                    <span className="circle circle-top"></span>
                    <div className="dotted">
                        <span className="dot dot-top"></span>
                        <span className="dot dot-middle-top"></span>
                        <span className="dot dot-middle-bottom"></span>
                        <span className="dot dot-bottom"></span>
                    </div>
                    <span className="circle circle-bottom"></span>
                </div>
                <div className="line line10">
                    <span className="circle circle-top"></span>
                    <div className="dotted">
                        <span className="dot dot-top"></span>
                        <span className="dot dot-middle-top"></span>
                        <span className="dot dot-middle-bottom"></span>
                        <span className="dot dot-bottom"></span>
                    </div>
                    <span className="circle circle-bottom"></span>
                </div>
                <div className="line line11">
                    <span className="circle circle-top"></span>
                    <div className="dotted">
                        <span className="dot dot-top"></span>
                        <span className="dot dot-middle-top"></span>
                        <span className="dot dot-middle-bottom"></span>
                        <span className="dot dot-bottom"></span>
                    </div>
                    <span className="circle circle-bottom"></span>
                </div>
            </div>
        </div>
    )
}

export default Preloader