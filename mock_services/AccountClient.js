class AccountClient {
    getMineAccountInfo() {
        return Promise.resolve({
            userName: '蔡地',
            avatar: '/assets/images/robot-dev.png',
            userId: 1,
            lastLoginTime: 1557591379664,
            gender: 1,
            birth: 586364400000
        })
    }
}