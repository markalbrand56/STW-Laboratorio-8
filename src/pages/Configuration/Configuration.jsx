import React from "react"
import Joi from "joi"
import styles from "./Configuration.module.css"
import useForm from "../../hooks/useForm"
import Input from "../../components/Input/Input"
import Select from "../../components/Select/Select"
import Pills from "../../components/Pills/Pills"
import InputCheck from "../../components/InputCheck/InputCheck.jsx";

/*
    - Ancho y alto del laberinto (4-100)
    - Skins de los personajes (dropdown)
    - Tema del laberinto (pills)
    - Límite de tiempo (checkbox)
 */

const schema = Joi.object({
    height: Joi.number().min(4).max(100).required(),
    width: Joi.number().min(4).max(100).required(),
    skin: Joi.string().required(),
    theme: Joi.string().required(),
    timeLimit: Joi.number().min(1).max(60).allow(null),
})

function Configuration() {
    const form = useForm(schema, {
        height: 4,
        width: 4,
        skin: "default",
        theme: "default",
        timeLimit: null,
        timeLimitEnabled: false,
    })

    return (
        <div className={styles.ConfigForm}>
            <div className={styles.Sizes}>
                <Input
                    value={form.values.height}
                    onChange={form.onChange("height")}
                    type="number"
                    placeholder="Height"
                    label="Height"
                    max={100}
                    min={4}
                />
                <Input
                    value={form.values.width}
                    onChange={form.onChange("width")}
                    type="number"
                    placeholder="Width"
                    label="Width"
                    max={100}
                    min={4}
                />
            </div>
            <Select
                value={form.values.skin}
                onChange={form.onChange("skin")}
                options={[
                    { value: "default", label: "Default" },
                    { value: "var1", label: "Var1" },
                    { value: "var2", label: "Var2" },
                ]}
                label="Skin"
            />
            <Pills
                tabs={[
                    {
                        label: "Theme 1",
                        content: "Tab 1 content",
                    },
                    {
                        label: "Theme 2",
                        content: "Tab 2 content",
                    },
                ]}
                label="Theme: "
                onChange={form.onChange("theme")}
            />
            <InputCheck
                value={form.values.timeLimit}
                onChangeCheck={form.onChange("timeLimitEnabled")}
                onChangeInput={form.onChange("timeLimit")}
                type="number"
                placeholder="None"
                label="Time Limit"
                max={600}
                min={0}
                check={form.values.timeLimitEnabled}
            />
        </div>
    )
}

export default Configuration
