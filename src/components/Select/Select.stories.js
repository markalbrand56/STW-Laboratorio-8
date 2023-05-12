import Select from "./Select"

export default {
    title: "Components/Select",
    component: Select,
    tags: ["autodocs"],
    argTypes: {
        onClick: { action: "clicked" },
    },
}

export const Default = {
    args: {
        label: "Select",
        options: [
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
            { value: "3", label: "Option 3" },
        ],
        value: "1",
    },
}
