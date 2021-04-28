module.exports = { apps:[
    {
        name: "mainnet beacon",
        script: "./beacon_mainnet.sh",
        kill_timeout: 60000,
        log_file: "/home/isaac/logs/beacon_mainnet.log"
    },
    {
        name: "mainnet geth",
        script: "./geth_mainnet.sh",
        kill_timeout: 60000,
        log_file: "/home/isaac/logs/geth_mainnet.log"
    }
]
}
