import React from "react"
import Joi from "joi"
import styles from "./Configuration.module.css"
import useForm from "../../hooks/useForm"
import Input from "../../components/Input/Input"
import Select from "../../components/Select/Select"
import Pills from "../../components/Pills/Pills"
import InputCheck from "../../components/InputCheck/InputCheck"
import Button from "../../components/Button/Button"
import { navigate } from "../../store/index"

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

const goBack = () => {
    navigate("/")
}

function Configuration() {
    const form = useForm(schema)

    return (
        <div className={styles.Container}>
            <div className={styles.ConfigForm}>
                <div className={styles.Sizes}>
                    <Input
                        value={form.config.height}
                        onChange={form.onChange("height")}
                        type="number"
                        placeholder="Height"
                        label="Height"
                        max={100}
                        min={4}
                    />
                    <Input
                        value={form.config.width}
                        onChange={form.onChange("width")}
                        type="number"
                        placeholder="Width"
                        label="Width"
                        max={100}
                        min={4}
                    />
                </div>
                <Select
                    value={form.config.skin}
                    onChange={form.onChange("skin")}
                    options={[
                        { value: "default", label: "Geralt" },
                        { value: "var1", label: "Ciri" },
                        { value: "var2", label: "Yennefer" },
                    ]}
                    label="Skin"
                />
                <Pills
                    tabs={[
                        {
                            label: "Velen",
                            content: "Theme 1",
                        },
                        {
                            label: "Novigrad",
                            content: "Theme 2",
                        },
                    ]}
                    label="Theme: "
                    onChange={form.onChange("theme")}
                />
                <InputCheck
                    value={form.config.timeLimit}
                    onChangeCheck={form.onChange("timeLimitEnabled")}
                    onChangeInput={form.onChange("timeLimit")}
                    type="number"
                    placeholder="None"
                    label="Time Limit (s)"
                    max={60 * 60}
                    min={15}
                    check={form.config.timeLimitEnabled}
                />
            </div>
            <Button onClick={goBack} type="primary">
                Apply
            </Button>
        </div>
    )
}

export default Configuration
