let agents = (num) => {
    let result = []
    for (let i = 0; i < num; i++) {
        result.push({
            id: i,
            status: 'connected',// 'connected' | 'connecting' | 'disconnect'
            area: '北京',
            ip: '127.0.0.1'
        })
        result.push({
            id: i,
            status: 'connecting',// 'connected' | 'connecting' | 'disconnect'
            area: '上海',
            ip: '127.0.0.1'
        })
    }
    return result
}

export default agents(10)
