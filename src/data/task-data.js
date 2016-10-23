// 测试用task数据
import agents from './agents-data.js'
var getTasks = (num) => {
    let result = []
    for (let i = 0; i < num; i++) {
        result.push({
            id: `name${i}`,
            name: `name${i}`,
            script: {
                id: i,
                name: '测试' + i
            },
            arg: {
                id: i,
                name: 'args' + i
            },
            agents
        })
    }
    return result
}
export default getTasks(10)
