import InputCheck from "./InputCheck"

export default {
    title: "Components/InputCheck",
    component: InputCheck,
    tags: ["autodocs"],
    argTypes: {
        onClick: { action: "clicked" },
    },
}

export const Checked = {
    args: {
        label: "Number",
        type: "number",
        value: 0,
        placeholder: "Enter a number",
        min: 0,
        max: 100,
        check: true,
    },
}

export const Unchecked = {
    args: {
        label: "Number",
        type: "number",
        value: 0,
        placeholder: "Enter a number",
        min: 0,
        max: 100,
        check: false,
    },
}
