import React from 'react'
import MacWindows from './MacWindows'
import "./spotify.scss"
const Spotify = ({windowName, setWindowsState}) => {
    return (
        <MacWindows windowName={windowName} setWindowsState={setWindowsState} width='30vw' height='60vh'  >

            <div windowName={windowName} setWindowsState={setWindowsState} className="spotify-window">
                <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/37i9dQZF1E4o4r1QjBVOk3?utm_source=generator&si=e190b197b46949e9" width="100%" height="420" frameBorder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWindows>
    )
}

export default Spotify