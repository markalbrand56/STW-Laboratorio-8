import Pills from "./Pills"

export default {
    title: "Components/Pills",
    component: Pills,
    tags: ["autodocs"],
    argTypes: {},
}

export const Default = {
    args: {
        tabs: [
            {
                label: "Sales",
                content: "Tab 1 content",
            },
            {
                label: "Subscriptions",
                content: "Tab 2 content",
            },
            {
                label: "Settings",
                content: "Tab 3 content",
            },
        ],
    },
}

export const Themes = {
    args: {
        tabs: [
            {
                label: "Novigrad",
                content: "Tab 1 content",
            },
            {
                label: "Velen",
                content: "Tab 2 content",
            },
        ],
    },
}