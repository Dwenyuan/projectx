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
            param: {
                id: i,
                name: 'params' + i
            },
            model: {
                isCaps: 1, //是否每秒并发caps模型，还是每秒限定用户数模型 
                modelType: 0, //选择什么类型的索引值
                totalUsers: 2, //总用户数
                caps: 1, //initial（递增或递减）或者caps（平稳），或者是min（浪涌、震荡）
                limit: 1, //者max或者min（递增或递减），max（浪涌、震荡）
                keepTime: 1, //保持时间（Alter Frequency）
                step: 1, //Increase Value递增步值或decrease Value递减步值，或者wave and peak 的极值
                chooseType: 0, //递增或递减类型索引，或者是wave and peak类型索引
            },
            rendezvous: { //集合点
                rendezvousEnable: 0, //0表示禁用，1表示启用但按照controller配置，2表示启用按scripter配置
                selectPolicy: 0, //选择方案
                policy: 0,
                policyUsers_Percent: 0,
            },
            startConfig: {
                //0立即开始，1休眠相应秒数后开始，2特定日期时间开始
                startIndex: 0, //选择哪个
                sleepTime: null, //设置开始时间前休眠的时间
                startTime: null, //设置开始时间，选择第一个时用
            },
            stopConfig: {
                stopIndex: 0, //选择哪个
                stopUser: null, //多少个用户失败时停止，选择第二个时用
                stopPercent: null, //百分之多少个用户失败时停止，选择第三个时用
                runTime: null, //呼叫多长时间就停止
                stopTime: null, //设置结束时间，选择第四个时用
            },
            iteratorTimes: { //循环次数
                onlineIndex: 0, //0表示运行完就结束，1表示一直循环，2表示运行相应个数
                loopTimes: null ////跌代运行多少次
            },
            agents
        })
    }
    return result
}
export default getTasks(10)
