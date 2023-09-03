import Link from 'next/link';

import Logo from '../images/Logo.png'

export default function Layout({ children }) {

    const buttonStyle = { textAlign: "center", padding: "8px", cursor: "pointer", marginBottom: "4px", backgroundColor: "white", borderRadius: "8px" }



    return (
        <>
            <div>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "16px", height: "40px" }}>
                    <div>
                        <img src={Logo.src} style={{ height: "56px" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", opacity: "0.5" }}>

                        <Link href="/solitaire">
                            <div style={buttonStyle}>{"Play solitaire"}</div>
                        </Link>

                        <div style={{ width: "8px" }} />

                        <Link href="/spider">
                            <div style={buttonStyle}>{"Play spider solitaire"}</div>
                        </Link>

                        <div style={{ width: "8px" }} />

                        <Link href="/mahjong">
                            <div style={buttonStyle}>{"Play mahjong"}</div>
                        </Link>
                    </div>
                    <div>
                        <img src={Logo.src} style={{ height: "56px", opacity: "0" }} />
                    </div>
                </div>

                <div style={{ height: "40px" }} />

                <div style={{ width: "100%", display: "flex" }}>
                    <div style={{ width: "10vw", height: "400px" }}></div>
                    <div style={{ width: "80vw", backgroundColor: "#57926b", borderRadius: "100px", border: "16px solid #403321", height: "80vh" }}>{children}</div>
                    <div style={{ width: "10vw", height: "400px" }}></div>
                </div>
            </div>
        </>
    );
}