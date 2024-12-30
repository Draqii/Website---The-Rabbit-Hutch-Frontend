import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { setClass } from "../../modules/setClass";
import useCookie, { setItem } from "../../modules/hooks/useCookie"
import { Footer, Header, Icon, Main } from "da-awesome-library/build"
import { NiteSwitch } from "niteswitch"
import pageicon from "../../../public/favicon/page_icon.png"
import HomeIcon from "../../../public/svgs/home.svg"
import Home from "../p_Home/Home";
import Grooming from "../p_Grooming/Grooming";
import Feeding from "../p_Feeding/Feeding";
import Hutch from "../p_Hutch/Hutch";
import Behavior from "../p_Behavior/Behavior";
import Contact from "../p_Contact/Contact";
import PrivacyPolicy from "../p_PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../p_TermsAndConditions/TermsAndConditions";
import "./App.scss";

const App = () => {

    const [theme, setTheme]: any = useState(useCookie("hw_lightmode", "light")[0] === "light")
    const [language, setLanguage]: any = useState(useCookie("hw_language", "english")[0])
    
    const updateTheme = (isLight) => {
        setItem("hw_lightmode", isLight ? "light" : "dark", 360)
        setTheme(isLight)
    }
    
    const updateLanguage = (language) => {
        setItem("hw_language", language, 360)
        setLanguage(language)
    }

    const getTheme = () => theme ? "light" : "dark"

    return (
        <div className={setClass("hw_page", [getTheme()])}>
            <NiteSwitch 
                enabled={theme ? true : false} 
                _setEnabled={setTheme}
                onEnable={() => updateTheme(true)} 
                onDisable={() => updateTheme(false)}
            />      
            <Header 
                theme={getTheme()}
                ReactLink={NavLink}
                navigation_links={[
                {to: "/", content: <Icon ReactSVG={HomeIcon} />},
                {to: "/behavior", content: "Behavior"},
                {to: "/hutch", content: "Hutch"},
                {to: "/feeding", content: "Feeding"},
                {to: "/grooming", content: "Grooming"},
            ]} logo_text={
                <span><span>Rabbit</span><br/>
                <span className="hw_logo__secondary">Hutch</span></span>
            } logo_image={pageicon} />
            <Main>
                <Routes>
                <Route path="/" Component={() => <Home theme={getTheme()} />} />
                <Route path="/behavior" Component={() => <Behavior theme={getTheme()} />} />
                <Route path="/hutch" Component={() => <Hutch theme={getTheme()} />} />
                <Route path="/feeding" Component={() => <Feeding theme={getTheme()} />} />
                <Route path="/grooming" Component={() => <Grooming theme={getTheme()} />} />
                <Route path="/terms-and-conditions" Component={() => <TermsAndConditions theme={getTheme()} />} />
                <Route path="/privacy-policy" Component={() => <PrivacyPolicy theme={getTheme()} />} />
                <Route path="/contact-us" Component={() => <Contact theme={getTheme()} />} />
                </Routes>
            </Main>
            <Footer 
                theme={getTheme()}
                copyrightHolder={"The Rabbit Hutch"} 
                copyrightYear={"2024"} 
                ReactLink={NavLink} 
                navigation_links={[
                    {to: "/terms-and-conditions", content: "Terms & Conditions"},
                    {to: "/privacy-policy", content: "Privacy Policy"},
                    {to: "/contact-us", content: "Contact Us"},]} />
        </div>
    )
}

export default App