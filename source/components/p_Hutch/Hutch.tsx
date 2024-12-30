import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { HutchProps } from "./Hutch.types";
import { Heading, Image, Paragraph, Section } from "da-awesome-library/build";
import hutchimg from "../../../public/images/hutch.png"
import cleanimg from "../../../public/images/clean.png"
import rabbithayimg from "../../../public/images/rabbit_hay.png"
import img_wood from "../../../public/images/wood.png"
import img_electric from "../../../public/images/electric.png"
import "./Hutch.scss";

const Hutch = ({ theme, className }: HutchProps) => {

    useEffect(() => {
        document.title = "Hutch - The Rabbit Hutch"
    }, [])
    
    return (
        <div className={setClass("hw_hutch hw_route", [theme], className)}>
            <Heading theme={theme} className="hw_hutch__teaserheading" size="teaser" content={"The Hutch"} />

            <Section className="hw_hutch__intro" gap={"small"} direction={"column"} wrap={"nowrap"}>
                <Heading theme={theme} size="large" content={"It's The Rabbits Home"} />
                <Paragraph theme={theme} content={"Domesticated rabbits spend most their life within their hutch. Thats why it’s important to fit their needs."} />
            </Section>



            <Heading theme={theme} size="large" content={"Rule Out Any Dangers!"} />
            <Section className="hw_hutch__danger" gap={"small"} direction={"row"} wrap={"wrap"}>

                <Section className="hw_hutch__dangerchild" gap={"small"} direction={"row"} wrap={"nowrap"}>
                    <Image source={img_wood} />
                    <Section gap={"small"} direction={"column"} wrap={"wrap"}>
                        <Heading theme={theme} size="medium" content={"Use Safe Wood!"} />
                        <Paragraph theme={theme} content="The wrong types of wood can be toxic for rabbits. Best play it safe with oak or spruce." />
                    </Section>
                </Section>

                <Section className="hw_hutch__dangerchild" gap={"small"} direction={"row"} wrap={"nowrap"}>
                    <Image source={img_electric} />
                    <Section gap={"small"} direction={"column"} wrap={"wrap"}>
                        <Heading theme={theme} size="medium" content={"Keep Outlets Away!!"} />
                        <Paragraph theme={theme} content="Rabbits are magicially drawn to a buzzing sound coming from electric outlets and cables, make sure they cant reach it!" />
                    </Section>
                </Section>
            </Section>



            <Heading theme={theme} size="large" content={"Keep The Hutch Clean!"} />
            <Section className="hw_hutch__cleaning" gap={"small"} direction={"row"} wrap={"wrap"}>

                <Section className="hw_hutch__cleaningchild" gap={"small"} direction={"row"} wrap={"nowrap"}>
                    <Section className="right" gap={"small"} direction={"column"} wrap={"wrap"}>
                        <Heading theme={theme} size="medium" content={"Swipe Surfaces!"} />
                        <Paragraph theme={theme} content="Use bio cleaning solutions without chemicals  and swipe all surfaces of the hutch the rabbits can access." />
                    </Section>
                    <Image className="hw_hutch__cleanimg" source={cleanimg} />
                </Section>

                <Section className="hw_hutch__cleaningchild" gap={"small"} direction={"column"} wrap={"wrap"}>
                    <Heading theme={theme} size="medium" content={"Remove Food Remains!"} />
                    <Paragraph theme={theme} content="Hiding food is great, but if left out for too long, even leafy treats can cause weird odors and attract flies.
If food is getting stale, remove it." />
                </Section>

                <Section className="hw_hutch__cleaningchild" gap={"small"} direction={"column"} wrap={"wrap"}>
                    <Heading theme={theme} size="medium" content={"Clean Food and Water Bowls!"} />
                    <Paragraph theme={theme} content="If uncleaned, the edges may get too unclean, also they may stop drinking or eating from a too dirty bowl." />
                </Section>
            </Section>



            <Heading theme={theme} size="large" content={"Rabbit Toilets!"} />
            <Section className="hw_hutch__toilets" gap={"small"} direction={"row"} wrap={"wrap"}>

                <Section className="center" gap={"small"} direction={"column"} wrap={"nowrap"}>
                    <Heading theme={theme} size="medium" content={"Fill Toilet With Hay!"} />
                    <Image className="hw_hutch__rabbithayimg" source={rabbithayimg} />
                    <Paragraph theme={theme} content="Rabbits like to eat where they do their business. So they must get fresh hay after cleaning the toilet." />
                </Section>

                <Section className="center" gap={"small"} direction={"column"} wrap={"wrap"}>
                    <Heading theme={theme} size="medium" content={"Empty Their Toilets Daily!"} />
                    <Paragraph theme={theme} content="Swap towels that have been wet and make sure to swap all the wet hay and litter. Also leave a tiny amount of poo within their loo to not alienize it." />
                </Section>
            </Section>



            <Heading theme={theme} size="large" content={"The Hutch Interior!"} />
            <Section className="hw_hutch__interior" gap={"small"} direction={"row"} wrap={"wrap"}>

                <Section className="center" gap={"small"} direction={"column"} wrap={"wrap"}>
                    <Heading theme={theme} size="medium" content={"Provide Sunny and Shady Spots!"} />
                    <Paragraph theme={theme} content="Make sure that your rabbits can sun themself, but also be able to avoid the sun if wanted" />
                </Section>

                <Section className="center" gap={"small"} direction={"column"} wrap={"wrap"}>
                    <Heading theme={theme} size="medium" content={"Appropiate Bowls and Hayholders!"} />
                    <Paragraph theme={theme} content="Rabbits necks are placed fairly low, so get bowls their size. Also arrange some sort of hayholders that have hay on not just the ground." />
                </Section>

                <Section className="center" gap={"small"} direction={"column"} wrap={"wrap"}>
                    <Heading theme={theme} size="medium" content={"Provide Houses To Hide In!"} />
                    <Paragraph theme={theme} content="Make sure rabbits have some hiding spaces that are well kept, some even like to sleep in them during the day and decorate it themself and sort things in and out." />
                </Section>

                <Section className="center" gap={"small"} direction={"column"} wrap={"wrap"}>
                    <Heading theme={theme} size="medium" content={"Gates, Fences And Hatches!"} />
                    <Paragraph theme={theme} content="Hatches are great to allow your rabbits to have multiple ways in and out- and the gate is a convenient for yourself ofcourse, aswell as (obviously) having a fenced off area." />
                </Section>

                <Section className="center" gap={"small"} direction={"column"} wrap={"wrap"}>
                    <Heading theme={theme} size="medium" content={"Toys and Treats!"} />
                    <Paragraph theme={theme} content="Help kill your rabbits boredom by putting toys and treats into their hutch- toys should best be nagging or intelligent based- and food treats can be of any kind- make sure to hide it well- things like digging boxes can be great additions too for your rabbits." />
                </Section>
            </Section>

        </div>
    );
}

export default Hutch
