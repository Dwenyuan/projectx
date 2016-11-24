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
            model: {
                modelType: 1
            },
            rendezvous: {
                rendezvousEnable: 0, //0表示禁用，1表示启用但按照controller配置，2表示启用按scripter配置
                policy: 0,
                policyUsers_Percent: 0,
            },
            agents
        })
    }
    return result
}
export default getTasks(10)
