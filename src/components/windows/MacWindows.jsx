import React from 'react'
import { Rnd } from "react-rnd";
import "./windows.scss"

const MacWindows = ({ children, width = '40vw', height = '40vh', windowName, windowsState, setWindowsState }) => {
    return (
        <Rnd
            default={{
                x: 50,
                y: 50,
                width: width,
                height: height
            }} >
            <div className="windows">
                <div className="nav">
                    <div className="dots">
                        <div onClick={() => { setWindowsState(state => ({ ...state, [windowName]: false })) }}
                            className="dot red"></div>
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