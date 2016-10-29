// 任务运行状态 数据结构测试
let taskResult = (num) => {
    let task = []
    for (var i = 0; i < num; i++) {
        task.push({
            name: `在线数`,
            state: `状态`,
            lines: [{ //对应指标
                name: '请求数/秒'
                type: 1,
                max: 100,
                min: 1
                ave: 50,
                total: 101,
                value: 10,
                points: [{
                    x: Math.random() * 100,
                    y: Math.random() * 100
                }]
            }, { //对应指标
                name: '成功数/秒'
                type: 1,
                max: 100,
                min: 1
                ave: 50,
                total: 101,
                value: 10,
                points: [{
                    x: Math.random() * 100,
                    y: Math.random() * 100
                }]
            },{ //对应指标
                name: '失败数/秒'
                type: 1,
                max: 100,
                min: 1
                ave: 50,
                total: 101,
                value: 10,
                points: [{
                    x: Math.random() * 100,
                    y: Math.random() * 100
                }]
            }]
        })
    }
    return {
        task: task
        start: new Date(),
        seconds: '10:11:00',
        errors: 10,
        requests: 10,
        download: 10
    }
}
export default taskResult(10)
