let agents = (num) => {
    let result = []
    for (let i = 0; i < num; i++) {
        result.push({
            id: i,
            area: '北京',
            ip: '127.0.0.1'
        })
    }
    return result
}

export default agents(10)
