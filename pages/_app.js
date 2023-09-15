import { useState, useEffect } from 'react';

import '../styles/globals.css';
import '../styles/solitaire.css';
import '../styles/cards.css';
import '../styles/reset.css';
import '../styles/style.css';
import '../styles/App.css';

import DesignFull from '../images/design-full.png'

function MyApp({ Component, pageProps }) {

    const [privacyOpen, setPrivacyOpen] = useState(false)
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
        return (
            <>

                <div
                    id="privacyPolicy"
                    onClick={() => { setPrivacyOpen(true) }}
                    onMouseEnter={() => { document.getElementById("privacyPolicy").style.fontWeight = 400 }}
                    onMouseLeave={() => { document.getElementById("privacyPolicy").style.fontWeight = 200 }}
                    style={{ color: "white", position: "absolute", top: "32px", left: "100px", zIndex: "800", cursor: "pointer", fontWeight: "200" }}
                >
                    Privacy policy
                </div>

                <Component {...pageProps} />

                {privacyOpen && (
                    <div
                        onClick={() => { setPrivacyOpen(false) }}
                        style={{ position: "absolute", zIndex: "99999", left: "0", top: "0", width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", opacity: "0.9" }}
                    >
                        <div style={{ width: "600px", height: "80%", backgroundColor: "white", overflowX: "scroll", padding: "40px", borderRadius: "16px" }}>
                            <h1>PRIVACY NOTICE</h1>

                            <p>
                                Thank you for choosing to be part of our community at Solitairedaily (“Company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy.
                                <br></br>
                                <br></br>
                                When you visit our website, https://solitairedaily.com, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy notice. We seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Sites and our services.
                                <br></br>
                                <br></br>
                                This privacy notice applies to all information collected through our website (such as https://solitairedaily.com), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy notice as the "Services").
                                <br></br>
                                <br></br>
                                Please read this privacy notice carefully as it will help you make informed decisions about sharing your personal information with us.
                            </p>

                            <h3>1. INFORMATION AUTOMATICALLY COLLECTED</h3>

                            <p>
                                Some information – such as IP address and/or browser and device characteristics – is collected automatically when you visit our Services. We automatically collect certain information when you visit, use or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes. Like many businesses, we also collect information through cookies and similar technologies.
                            </p>

                            <h3>2. HOW DO WE USE YOUR INFORMATION?</h3>

                            <p>
                                We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.
                                <br></br>
                                <br></br>
                                We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
                                <br></br>
                                <br></br>
                                We use the information we collect or receive:
                                <br></br>
                                <br></br>
                                <ul>
                                    <li>• To enforce our terms, conditions and policies for Business Purposes, Legal Reasons and Contractual.</li>
                                    <li>• To respond to legal requests and prevent harm.</li>
                                    <li>• If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.</li>
                                    <li>• For other Business Purposes.</li>
                                </ul>
                            </p>

                            <h3>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h3>

                            <p>
                                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                                <br></br>
                                <br></br>
                                We may process or share data based on the following legal basis:
                                <br></br>
                                <br></br>
                                Consent: We may process your data if you have given us specific consent to use your personal information in a specific purpose.
                                <br></br>
                                <br></br>
                                Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.
                                <br></br>
                                <br></br>
                                Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
                                <br></br>
                                <br></br>
                                Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).
                                <br></br>
                                <br></br>
                                Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.More specifically, we may need to process your data or share your personal information in the following situations:
                                <br></br>
                                <br></br>

                                <ul>
                                    <li>• Vendors, Consultants and Other Third-Party Service Providers.</li>
                                    <br></br>
                                    <li>• We may share your data with third party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the Services, which will enable them to collect data about how you interact with the Services over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content and better understand online activity. Unless described in this Policy, we do not share, sell, rent or trade any of your personally identifiable information with third parties for their promotional purposes.
                                        Business Transfers.</li>
                                    <br></br>
                                    <li>We may share your data with third party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the Services, which will enable them to collect data about how you interact with the Services over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content and better understand online activity. Unless described in this Policy, we do not share, sell, rent or trade any of your personally identifiable information with third parties for their promotional purposes.
                                        Business Transfers.</li>
                                    <br></br>
                                    <li>• We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                                        Third-Party Advertisers.</li>
                                    <br></br>
                                    <li>• When you use our website, we share information that we may collect from you, such as your email (in hashed form), IP address or information about your browser or operating system, with our partner/service provider, LiveRamp Inc and its group companies (‘LiveRamp’). LiveRamp may use our first party cookie on your browser to match your shared information to their marketing databases in order to provide back a pseudonymous privacy-centric identifier for our use in real time bidding in digital advertising. These third parties may in turn link further demographic or interest-based information to your browser. To opt out of this use, please head to https://liveramp.com/opt_out/
                                        You may also utilize the Network Advertising Initiative’s opt-out page, the Digital Advertising Alliance’s opt-out page, or the European Interactive Digital Advertising Alliance’s opt-out page to opt-out of the use of cookies for interest-based advertising.</li>
                                </ul>
                            </p>

                            <h3>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>

                            <p>
                                We may use cookies and other tracking technologies to collect and store your information.
                                <br></br>
                                <br></br>
                                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information.
                            </p>

                            <h3>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>

                            <p>
                                We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
                                <br></br>
                                <br></br>
                                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
                                <br></br>
                                <br></br>
                                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                            </p>

                            <h3>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>

                            <p>
                                We aim to protect your personal information through a system of organizational and technical security measures.
                                <br></br>
                                <br></br>
                                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the services within a secure environment.
                            </p>

                            <h3>7. DO WE COLLECT INFORMATION FROM MINORS?</h3>

                            <p>
                                We do not knowingly collect data from or market to children under 18 years of age.
                                <br></br>
                                <br></br>
                                We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records.
                            </p>

                            <h3>8. WHAT ARE YOUR PRIVACY RIGHTS?</h3>

                            <p>
                                You may review, change, or terminate your account at any time.
                                <br></br>
                                <br></br>
                                If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                                <br></br>
                                <br></br>
                                Cookies and similar technologies:
                                <br></br>
                                <br></br>
                                Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt-out of interest-based advertising by advertisers on our Services visit http://www.aboutads.info/choices/.
                            </p>

                            <h3>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>

                            <p>
                                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
                            </p>

                            <h3>10. GDPR DATA PROTECTION NOTICE</h3>

                            <p>
                                For residents of the EU and Great Britain, We are committed to upholding your privacy in accordance with the GDPR. You can manage your consent preferences here.
                            </p>

                            <h3>10. DO WE MAKE UPDATES TO THIS POLICY?</h3>

                            <p>
                                Yes, we will update this policy as necessary to stay compliant with relevant laws.
                                <br></br>
                                <br></br>
                                We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                            </p>
                        </div>

                    </div>
                )}

            </>
        )
    }
}

export default MyApp;
