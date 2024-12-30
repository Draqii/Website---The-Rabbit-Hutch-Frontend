import React, { useEffect } from "react";
import { setClass } from "../../modules/setClass";
import { FeedingProps } from "./Feeding.types";
import { Heading, Image, Paragraph, Section } from "da-awesome-library/build";
import img_dill from "../../../public/images/herb_dill.jpg"
import img_rucola from "../../../public/images/herb_rucola.jpg"
import img_parsley from "../../../public/images/herb_parsley.webp"
import img_basil from "../../../public/images/herb_basil.jpg"
import img_oakleaf from "../../../public/images/salad_oakleaf.jpg"
import img_romania from "../../../public/images/salad_romania.jpg"
import img_brokkoli from "../../../public/images/veg_brokkoli.jpg"
import img_sellerie from "../../../public/images/veg_sellerie.webp"
import img_carrot from "../../../public/images/veg_carrots.webp"
import img_dandelion from "../../../public/images/flower_dandelion.jpg"
import img_daisy from "../../../public/images/flower_daisy.jpg"
import img_grass from "../../../public/images/flower_grass.jpg"
import img_hay from "../../../public/images/flower_hay.jpg"
import img_water from "../../../public/images/water.webp"
import img_wood from "../../../public/images/wood.jpg"
import img_cauliflower from "../../../public/images/salad_cauliflower.png"
import img_endivie from "../../../public/images/salad_endivie.jpg"
import img_fieldsalad from "../../../public/images/salad_leafsalad.jpg"
import img_sun from "../../../public/images/flower_sun.webp"
import img_cornpoppy from "../../../public/images/flower_klatschmohn.jpg"
import img_pellets from "../../../public/images/pellets.webp"
import img_mixes from "../../../public/images/mixes.jpg"
import "./Feeding.scss";

const harvest_list = ({
    essentials: [
        {
            name: "Grass",
            image: img_grass
        },
        {
            name: "Hay",
            image: img_hay
        },
        {
            name: "Water",
            image: img_water
        },
        {
            name: "Wood",
            image: img_wood
        }
    ],
    avoid: [
        {
            name: "Pellets",
            image: img_pellets
        },
        {
            name: "Mixes",
            image: img_mixes
        },
    ],
    herbs: [
        {
            name: "Dill",
            image: img_dill
        },
        {
            name: "Rucola",
            image: img_rucola
        },
        {
            name: "Parsley",
            image: img_parsley
        },
        {
            name: "Basil",
            image: img_basil
        },
    ],
    salads: [
        {
            name: "Oakleaf Salad",
            image: img_oakleaf
        },
        {
            name: "Romania Salad",
            image: img_romania
        },
        {
            name: "Endivie Salad",
            image: img_endivie
        },
        {
            name: "Field Salad",
            image: img_fieldsalad
        }
    ],
    vegetables: [
        {
            name: "Brokkoli",
            image: img_brokkoli
        },
        {
            name: "Sellerie",
            image: img_sellerie
        },
        {
            name: "Carrot",
            image: img_carrot
        },
        {
            name: "Cauliflower",
            image: img_cauliflower
        },
    ],
    flowers: [
        {
            name: "Dandelion",
            image: img_dandelion
        },
        {
            name: "Daisy",
            image: img_daisy
        },
        {
            name: "Sunflower",
            image: img_sun
        },
        {
            name: "Corn Poppy",
            image: img_cornpoppy
        },
    ]
})

const Feeding = ({ theme, className }: FeedingProps) => {

    useEffect(() => {
        document.title = "Feeding - The Rabbit Hutch"
    }, [])

    return (
        <div className={setClass("hw_feeding hw_route", [theme], className)}>
            <Heading theme={theme} size="teaser" content={"How To Feed Rabbits"} />

            <Section direction={"column"} wrap={"wrap"} gap={"medium"}>
                <Heading theme={theme} size="large" content={"Essentials"} />
                <Paragraph theme={theme} content={"All the things that must be restockedy"} />
                <Section direction={"row"} wrap={"wrap"} gap={"small"}>
                    {harvest_list["essentials"].map((essential, essential_id) => <Section direction={"column"} wrap={"nowrap"} gap={"medium"} className="hw_feeding__herb">
                        <Heading theme={theme} size="medium" content={essential.name} />
                        <Image source={essential.image} />
                    </Section>)}
                </Section>
            </Section>

            <Section direction={"row"} wrap={"wrap"} gap={"medium"}>
                <Section direction={"column"} wrap={"wrap"} gap={"medium"} className="hw_feeding__grade a">
                    <Heading theme={theme} size="large" content={"Salads"} />
                    <Paragraph theme={theme} content={"Salads, aswell as grass are the best staple to feed in masses to your rabbits, they should make up most of the nutrition."} />
                    <Section direction={"row"} wrap={"wrap"} gap={"small"}>
                        {harvest_list["salads"].map((salad, salad_id) => <Section direction={"column"} wrap={"nowrap"} gap={"medium"} className="hw_feeding__herb">
                            <Heading theme={theme} size="medium" content={salad.name} />
                            <Image source={salad.image} />
                        </Section>)}
                    </Section>
                </Section>

                <Section direction={"column"} wrap={"wrap"} gap={"medium"} className="hw_feeding__grade a">
                    <Heading theme={theme} size="large" content={"Flowers"} />
                    <Paragraph theme={theme} content={"The following flowers grow in the wild and can safely be harvested and fed to your rabbits either dried or while still fresh."} />
                    <Section direction={"row"} wrap={"wrap"} gap={"small"}>
                        {harvest_list["flowers"].map((flower, flower_id) => <Section direction={"column"} wrap={"nowrap"} gap={"medium"} className="hw_feeding__herb">
                            <Heading theme={theme} size="medium" content={flower.name} />
                            <Image source={flower.image} />
                        </Section>)}
                    </Section>
                </Section>

                <Section direction={"column"} wrap={"wrap"} gap={"medium"} className="hw_feeding__grade c">
                    <Heading theme={theme} size="large" content={"Herbs"} />
                    <Paragraph theme={theme} content={"Kitchen herbs can be fed to rabbits when you buy then freshly, but please avoid buying herbs that have been grinded or dried."} />
                    <Section direction={"row"} wrap={"wrap"} gap={"small"}>
                        {harvest_list["herbs"].map((herb, herb_id) => <Section direction={"column"} wrap={"nowrap"} gap={"medium"} className="hw_feeding__herb">
                            <Heading theme={theme} size="medium" content={herb.name} />
                            <Image source={herb.image} />
                        </Section>)}
                    </Section>
                </Section>

                <Section direction={"column"} wrap={"wrap"} gap={"medium"} className="hw_feeding__grade c">
                    <Heading theme={theme} size="large" content={"Vegetables"} />
                    <Paragraph theme={theme} content={"Vegetables can be a great treat! Wether you use em fresh, let them dry, or even freeze them for a cool snack on a hot summer day."} />
                    <Section direction={"row"} wrap={"wrap"} gap={"small"}>
                        {harvest_list["vegetables"].map((vegetable, vetable_id) => <Section direction={"column"} wrap={"nowrap"} gap={"medium"} className="hw_feeding__herb">
                            <Heading theme={theme} size="medium" content={vegetable.name} />
                            <Image source={vegetable.image} />
                        </Section>)}
                    </Section>
                </Section>
            </Section>

            <Section direction={"column"} wrap={"wrap"} gap={"medium"}>
                <Heading theme={theme} size="large" content={"Dryfood and Pellets"} />
                <Paragraph theme={theme} content={"Dryfood and pellets"} />
                <Section direction={"row"} wrap={"wrap"} gap={"small"}>
                    {harvest_list["avoid"].map((avoid, avoid_id) => <Section direction={"column"} wrap={"nowrap"} gap={"medium"} className="hw_feeding__herb">
                        <Heading theme={theme} size="medium" content={avoid.name} />
                        <Image source={avoid.image} />
                    </Section>)}
                </Section>
            </Section>
        </div>
    )
}

export default Feeding
