import React from 'react'
import { Rnd } from "react-rnd";
import "./windows.scss"

const MacWindows = ({ children }) => {
    return (
        <Rnd
            default={{
                x: 50,
                y: 50,
                width: "40vw",
                height: "40vh"
            }} >
            <div className="windows">
                <div className="nav">
                    <div className="dots">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="title"><p> vivekkumarray - zxh</p></div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindows