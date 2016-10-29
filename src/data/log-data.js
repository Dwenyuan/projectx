// 后台返回log格式 样板
//初步定四种颜色 0 成功 #dff0d8 1 info #d9edf7 2 warning #fcf8e3 4 danger #f2dede
const logColors = ['#dff0d8', '#d9edf7', '#fcf8e3', '#f2dede']
let getLogs = (num) => {
    let result = []
    for (let i = 0; i < num; i++) {
        let random = Math.floor(Math.random() * 4)
        result.push({
            url: `url=>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz${i}`,
            tips: `http://url=>${i}`,
            level: i % 4,
            logs: [{
                color: logColors[random], //初步定四种颜色 0 成功 #dff0d8
                time: new Date(),
                log: '[error] something error'
            }]
        })
    }
    return result
}
export default getLogs(20)
