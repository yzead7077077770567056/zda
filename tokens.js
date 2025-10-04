// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1364592532260130857",
        serverId: "1300541225966895154",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
