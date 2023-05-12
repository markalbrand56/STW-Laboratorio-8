import React from "react"
import Joi from "joi"
import styles from "./Configuration.module.css"
import useForm from "../../hooks/useForm"
import Input from "../../components/Input/Input"

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
    })

    return (
        <div className={styles.ConfigForm}>
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
            <div className={styles.ContainerSelect}>
                <span>Skin: </span>
                <select
                    className={styles.Select}
                    value={form.values.skin}
                    onChange={form.onChange("skin")}
                >
                    <option
                        value="default"
                        selected={form.values.skin === "default"}
                    >
                        Default
                    </option>
                    <option value="var1" selected={form.values.skin === "var1"}>
                        Var1
                    </option>
                    <option value="var2" selected={form.values.skin === "var2"}>
                        Var2
                    </option>
                </select>
            </div>
            <div className={styles.ContainerSelect}>
                <span>Theme: </span>
                <select
                    className={styles.Select}
                    value={form.values.theme}
                    onChange={form.onChange("theme")}
                >
                    <option
                        value="default"
                        selected={form.values.theme === "default"}
                    >
                        Default
                    </option>
                    <option
                        value="dark"
                        selected={form.values.theme === "dark"}
                    >
                        Dark
                    </option>
                    <option
                        value="light"
                        selected={form.values.theme === "light"}
                    >
                        Light
                    </option>
                </select>
            </div>
            <Input
                value={form.values.timeLimit}
                onChange={form.onChange("timeLimit")}
                type="number"
                placeholder="None"
                label="Time Limit"
                max={600}
                min={0}
            />
        </div>
    )
}

export default Configuration
