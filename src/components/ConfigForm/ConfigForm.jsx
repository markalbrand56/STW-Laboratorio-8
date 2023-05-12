import React from "react"
import Joi from "joi"
import styles from "./ConfigForm.module.css"
import useForm from "../../hooks/useForm"
import Input from "../Input/Input"

const schema = Joi.object({
    height: Joi.number().min(4).max(100).required(),
    width: Joi.number().min(4).max(100).required(),
    skin: Joi.string().required(),
    theme: Joi.string().required(),
    timeLimit: Joi.number().min(1).max(60).allow(null),
})

function ConfigForm() {
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
            <div className={styles.ContainerInputNumber}>
                <span>Time Limit: </span>
                <input
                    type="number"
                    value={form.values.timeLimit || 0}
                    onChange={form.onChange("timeLimit")}
                    className={styles.InputNumber}
                    placeholder="Time Limit"
                    min={0}
                    max={600}
                />
            </div>
        </div>
    )
}

export default ConfigForm
