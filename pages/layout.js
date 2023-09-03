import Link from 'next/link';

export default function Layout({ children }) {



    const buttonStyle = { textAlign: "center", padding: "8px", cursor: "pointer", marginBottom: "4px", backgroundColor: "white", borderRadius: "8px" }



    return (
        <>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "16px" }}>
                <div style={{ display: "flex" }}>

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

            </div>

            <div style={{ height: "40px" }} />

            <div style={{ width: "100%", display: "flex" }}>
                <div style={{ width: "10vw", height: "400px"}}></div>
                <div style={{width: "80vw"}}>{children}</div>
                <div style={{ width: "10vw", height: "400px" }}></div>
            </div>
        </>
    );
}