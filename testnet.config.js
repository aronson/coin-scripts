module.exports = { apps:[
    {
        name: "testnet beacon",
        script: "./beacon_testnet.sh",
        kill_timeout: 60000,
        log_file: "/home/isaac/logs/beacon_testnet.log"
    }, {
        name: "testnet validator",
        script: "./validator_testnet.sh",
        kill_timeout: 60000,
        log_file: "/home/isaac/logs/validator_testnet.log"
    },
    {
        name: "testnet geth",
        script: "./geth_goerli.sh",
        kill_timeout: 60000,
        log_file: "/home/isaac/logs/geth_testnet.log"
    }
]
}
