import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { BehaviorProps } from "./Behavior.types";
import { Heading } from "da-awesome-library/build";
import "./Behavior.scss";

const Behavior = ({theme, className}: BehaviorProps) => {

    useEffect(() => {
        document.title = "Behavior - The Rabbit Hutch"
    }, [])

    return (
        <div className={setClass("hw_behavior hw_route", [theme], className)}>
            <Heading theme={theme} size="teaser" content={"Rabbit Behavior"} />
            <Heading theme={theme} size="large" content={"Relaxed Rabbit"} />
        </div>
    )
}

export default Behavior
