import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { ContactProps } from "./Contact.types";
import { Heading } from "da-awesome-library/build";
import "./Contact.scss";

const Contact = ({theme, className}: ContactProps) => {

    useEffect(() => {
        document.title = "Contact - The Rabbit Hutch"
    }, [])

    return (
        <div className={setClass("hw_contact hw_route", [theme], className)}>
            <Heading size="teaser" content={"Contact Us"} />
        </div>
    )
}

export default Contact
