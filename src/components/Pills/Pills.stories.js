import Pills from "./Pills"

export default {
    title: "Components/Pills",
    component: Pills,
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
