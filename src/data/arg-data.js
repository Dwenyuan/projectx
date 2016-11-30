// 参数测试数据
let params = (num) => {
    let result = []
    for (let i = 0; i < num; i++) {
        result.push({
            id: i,
            name: `参数 ${i}`
        })
    }
    return result
}
export default params(20)
