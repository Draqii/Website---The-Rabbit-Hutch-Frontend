import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { GroomingProps } from "./Grooming.types";
import { Heading, Paragraph } from "da-awesome-library/build";
import "./Grooming.scss";

const Grooming = ({theme, className}: GroomingProps) => {

    useEffect(() => {
        document.title = "Grooming - The Rabbit Hutch"
    }, [])

    return (
        <div className={setClass("hw_grooming hw_route", [theme], className)}>
            <Heading theme={theme} size="teaser" content={"Grooming Rabbits"} />
        </div>
    )
}

export default Grooming
