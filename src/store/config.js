const config = (store) => {
    store.on("@init", () =>  ({
        config: {
            width: 4,
            height: 4,
            skin: "default",
            theme: "Theme 1",
            timeLimit: 15,
            timeLimitEnabled: false,
            gameOver: false,
            win: false,
        },
    }))
    store.on("config/set", (_, newConfig) => {
        console.log("config/set", newConfig)
        return {
            config: newConfig,
        }
    })
    store.on("config/clean", (oldConfig) => {
        return {
            config: {
                ...oldConfig.config,
                gameOver: false,
                win: false,
            },
        }})

}
export default config
