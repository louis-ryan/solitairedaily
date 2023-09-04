import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Design from '../images/design-full-hidden.png'


const linkButtonWrapper = { display: "flex", justifyContent: "center", opacity: "0.5", marginTop: "16px" }
const buttonStyle = { textAlign: "center", padding: "8px", cursor: "pointer", marginBottom: "4px", backgroundColor: "white", borderRadius: "8px" }

const bottomSectionWrapper = { width: "100%", display: "flex" }

const adSpace = { width: "32px" }
const adWrapper = { width: "332px", display: "flex", justifyContent: "center" }
const ad = { backgroundColor: "white", width: "300px", height: "80vh", padding: "40px", opacity: "0.5" }

const gameWrapper1ad = { width: "calc(100vw - (332px + 32px))", borderRadius: "100px", border: "2px solid #DDB572", outline: "8px solid #403321", height: "80vh" }
const gameWrapper2ad = { width: "calc(100vw - (332px * 2))", borderRadius: "100px", border: "2px solid #DDB572", outline: "8px solid #403321", height: "80vh" }

const gameBoard1ad = { position: "absolute", left: "32px", width: "calc(100vw - (332px + 32px))", backgroundColor: "#57926b", borderRadius: "100px", height: "80vh", zIndex: "-5" }
const gameBoard2ad = { position: "absolute", left: "332px", width: "calc(100vw - (332px * 2))", backgroundColor: "#57926b", borderRadius: "100px", height: "80vh", zIndex: "-5" }
const logoDesign = { height: "60vh", position: "absolute", zIndex: "0", top: "50%", left: "50%", transform: "translateY(-50%) translateX(-50%)", filter: "blur(1px)", opacity: "0.8" }



const Layout = ({ children }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [numAds, setNumAds] = useState(1);

    const router = useRouter();


    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };


    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize) };
    }, []);


    useEffect(() => {

        var path = router.asPath

        if (path === "/spider" && windowWidth < 1780) {
            setNumAds(1)
        } else if (path.includes("/solitaire") && windowWidth < 1580) {
            setNumAds(1)
        } else {
            setNumAds(2)
        }

    }, [windowWidth, router])


    return (
        <div>
            <div style={linkButtonWrapper}>
                <Link href="/solitaire"> <div style={buttonStyle}>{"Play solitaire"}</div> </Link>
                <div style={{ width: "8px" }} />
                <Link href="/spider"> <div style={buttonStyle}>{"Play spider solitaire"}</div> </Link>
                <div style={{ width: "8px" }} />
                <Link href="/mahjong"> <div style={buttonStyle}>{"Play mahjong"}</div> </Link>
            </div>

            <div style={{ height: "40px" }} />

            <div style={bottomSectionWrapper}>


                {numAds === 1 && (
                    <>
                        <div style={adSpace}></div>
                        <div style={gameWrapper1ad}>{children}</div>
                        <div style={gameBoard1ad}> <img src={Design.src} style={logoDesign} /> </div>
                        <div style={adWrapper}><div style={ad}>ADS</div></div>
                    </>
                )}


                {numAds === 2 && (
                    <>
                        <div style={adWrapper}><div style={ad}>ADS</div></div>
                        <div style={gameWrapper2ad}>{children}</div>
                        <div style={gameBoard2ad}> <img src={Design.src} style={logoDesign} /> </div>
                        <div style={adWrapper}><div style={ad}>ADS</div></div>
                    </>
                )}


            </div>
        </div>
    );
}

export default Layout;