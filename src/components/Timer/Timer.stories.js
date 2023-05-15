import Timer from "./Timer"

export default {
    title: "Components/Timer",
    component: Timer,
    tags: ["autodocs"],
    argTypes: {},
}

export const Default = {
    args: {
        timeLimit: 10,
    },
}

export const TimerOverMinute = {
    args: {
        timeLimit: 70,
    },
}
