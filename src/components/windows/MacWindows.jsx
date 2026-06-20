import React, { useState } from 'react'
import { Rnd } from "react-rnd";
import "./windows.scss"

const MacWindows = ({ children, width = '40vw', height = '40vh', windowName, windowsState, setWindowsState }) => {
    const [fullscreen, setFullscreen] = useState(false);

    return (
        <Rnd
            size={{
                width: fullscreen ? "100vw" : width,
                height: fullscreen ? "100vh" : height
            }}
            position={{
                x: fullscreen ? 0 : 50,
                y: fullscreen ? 0 : 50
            }}
        >
            <div className="windows">
                <div className="nav">
                    <div className="dots">
                        <div onClick={() => { setWindowsState(state => ({ ...state, [windowName]: false })) }}
                            className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div onClick={() => { setFullscreen(prev => !prev) }} className="dot green"></div>
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