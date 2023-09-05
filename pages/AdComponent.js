import Head from "next/head";

const AdComponent = () => {
    return (
        <>
            <Head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1328835903818118"
                    crossorigin="anonymous"></script>
            </Head>
            <div>
                <ins className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-1328835903818118"
                    data-ad-slot="7802188225"
                    data-ad-format="auto"
                    data-full-width-responsive="true">
                </ins>
            </div>


        </>
    );
};

export default AdComponent;
