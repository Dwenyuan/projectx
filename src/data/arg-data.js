// 参数测试数据
let args = (num) => {
    let result = []
    for (let i = 0; i < num; i++) {
        result.push({
            id: i,
            name: `参数 ${i}`
        })
    }
    return result
}
export default args(20)
