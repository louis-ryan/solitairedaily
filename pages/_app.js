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
        }, 2000)
    }, [])

    if (aniState !== "GAME") {
        return (
            <div>
                <img
                    src={DesignFull.src}
                    style={{
                        height: aniState === "PRE_ANI" ? "100vh" : "60vh",
                        position: "absolute",
                        zIndex: "1",
                        top: "50%",
                        left: "50%",
                        transform: aniState === "PRE_ANI" ? "translateY(-50%) translateX(-50%) rotateY(180deg)" : "translateY(-50%) translateX(-50%) rotateY(0deg)",
                        transition: "1s linear",
                        filter: aniState === "PRE_ANI" ? "brightness(2) blur(60px)" : "brightness(1) blur(0px)"
                    }}
                />
                <img
                    src={DesignFull.src}
                    style={{
                        height: aniState === "PRE_ANI" ? "0vh" : "60vh",
                        position: "absolute",
                        zIndex: "0",
                        top: "50%",
                        left: "50%",
                        transform: "translateY(-50%) translateX(-50%)",
                        transition: "1s",
                        filter: aniState === "PRE_ANI" ? "brightness(0) blur(120px)" : "brightness(0) blur(80px)"
                    }}
                />
            </div>
        )
    } else {
        return <Component {...pageProps} />
    }
}

export default MyApp;
