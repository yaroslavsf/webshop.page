const role = {
    name: "admin",
    authorities: "DO_EVERYTHING"
}

const users = [
    {
    id: 1,
    first_name: "Yarik",
    last_name: "Zhyvotovskyi",
    email: "yaroslav15897653@gmail.com",
    password: "$2a$12$9cGuWQgQ2Tifcx2jmElBFu6wr8y0D2ofVo05TIWIYMKIIX19doDHa", //12345678
    role: role,
    token: "",
    }
]

module.exports = [users];