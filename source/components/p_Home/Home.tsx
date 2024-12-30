import React, { useEffect } from "react";
import { NavLink as ReactLink } from "react-router-dom";
import { setClass } from "../../modules/setClass";
import { HomeProps } from "./Home.types";
import { Heading, Image, NavLink, Paragraph, Section } from "da-awesome-library/build";
import img_bodylanguage from "../../../public/images/bodylanguage.jpg"
import img_hutch from "../../../public/images/hutch.png"
import img_girl_rabbit from "../../../public/images/girl_rabbit.jpg"
import img_vegetable_greens from "../../../public/images/greens.png"
import "./Home.scss";

const Home = ({theme, className}: HomeProps) => {

    useEffect(() => {
        document.title = "The Rabbit Hutch"
    }, [])

    return (
        <div className={setClass("hw_home hw_route", [theme], className)}>
            <Heading theme={theme} size="teaser" content={"Welcome to The Rabbit Hutch"} />
            <Section className="hw_home__sections hw_home__halfsections" direction={"row"} wrap={"nowrap"} gap={"medium"}>
                <Section className="hw_home__section" direction={"column"} wrap={"nowrap"} gap={"medium"}>
                    <Heading theme={theme} size="large" content={"Everything You Need To Know To Have Rabbits"} />
                    <Paragraph theme={theme} content="Our website tries to conclude everything that a rabbit owner should know to provide the best possible life for his four legged friends." />
                </Section>
                <Section className="hw_home__section" direction={"column"} wrap={"nowrap"} gap={"medium"}>
                    <Heading theme={theme} size="large" content={"We Improve Rabbits Life Quality"} />
                    <Paragraph theme={theme} content="Often enough there are alot of misconceptions about how rabbits are supposed to be held and it sadly leads to alot of behavioral and health issues. We try to counter that by giving you safe advise, and rely on people like you spreading our word." />
                </Section>
            </Section>

            <Heading theme={theme} size="teaser" content={"Learn More About Your Rabbits"} />
            <Section className="hw_home__sections hw_home__quartersections" direction={"row"} wrap={"wrap"} gap={"medium"}>
                <Section className="hw_home__section" direction={"column"} wrap={"nowrap"} gap={"medium"}>
                    <Heading theme={theme} size="large" content={"How They Behave"} />
                    <Image className="hw_home__teaserimg" source={img_bodylanguage} />
                    <Paragraph theme={theme} content={"Rabbits are considered to be pretty quiet animal, but their ear position aswell as their entire body language and small sounds can indicate alot about your rabbit."} />
                    <NavLink theme={theme} className="hw_button" ReactLink={ReactLink} to={"/behavior"} content={"Browse Our Gallery"} /> 
                </Section>
                <Section className="hw_home__section" direction={"column"} wrap={"nowrap"} gap={"medium"}>
                    <Heading theme={theme} size="large" content={"Building Hutches"} />
                    <Image className="hw_home__teaserimg" source={img_hutch} />
                    <Paragraph theme={theme} content={"A hutch isnt as easy as putting a small hamster cage. Rabbits are the third highest on the list to be returned to the shelter, thats why its important to give it alot of attention."} />
                    <NavLink theme={theme} className="hw_button" ReactLink={ReactLink} to={"/hutch"} content={"Browse Our Gallery"} /> 
                </Section>
                <Section className="hw_home__section" direction={"column"} wrap={"nowrap"} gap={"medium"}>
                    <Heading theme={theme} size="large" content={"Grooming Rabbits"} />
                    <Image className="hw_home__teaserimg" source={img_girl_rabbit} />
                    <Paragraph theme={theme} content={"Rabbits usually groom themself, but when they get obese or are disabled or just get old, you may need to help them groom themself. This page teaches you how to."} />
                    <NavLink theme={theme} className="hw_button" ReactLink={ReactLink} to={"/grooming"} content={"Browse Our Gallery"} /> 
                </Section>
                <Section className="hw_home__section" direction={"column"} wrap={"nowrap"} gap={"medium"}>
                    <Heading theme={theme} size="large" content={"Feeding Rabbits"} />
                    <Image className="hw_home__teaserimg" source={img_vegetable_greens} />
                    <Paragraph theme={theme} content={"Rabbits require alot more variety of food than just carrots (as portrayed in alot of looney toons animations), Also there is a controversy to settle about wether to use pellets or not"} />
                    <NavLink theme={theme} className="hw_button" ReactLink={ReactLink} to={"/feeding"} content={"Browse Our Gallery"} /> 
                </Section>
            </Section>
        </div>
    )
}

export default Home
