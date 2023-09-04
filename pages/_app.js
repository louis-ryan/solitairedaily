import { useState, useEffect } from 'react';

import '../styles/globals.css';
import '../styles/solitaire.css';
import '../styles/cards.css';
import '../styles/reset.css';
import '../styles/style.css';
import '../styles/App.css';

import DesignFull from '../images/design-full.png'

function MyApp({ Component, pageProps }) {

    const [aniState, setAniState] = useState("PRE_ANI")


    useEffect(() => {
        setAniState("POST_ANI")

        setTimeout(() => {
            setAniState("GAME")
        }, 1500)
    }, [])

    if (aniState !== "GAME") {
        return (
            <div>
                <img
                    src={DesignFull.src}
                    style={{
                        height: aniState === "PRE_ANI" ? "400vh" : "60vh",
                        position: "absolute",
                        zIndex: "0",
                        top: "50%",
                        left: "50%",
                        transform: "translateY(-50%) translateX(-50%)",
                        transition: "1s",
                        filter: aniState === "PRE_ANI" ? "brightness(0) blur(80px)" :  "brightness(1) blur(0px)"
                    }}
                />
            </div>
        )
    } else {
        return <Component {...pageProps} />
    }
}

export default MyApp;
