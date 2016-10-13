// 生成脚本测试数据
var createData = num => {
    let result = []
    for (var i = 0; i < num; i++) {
        result.push({
            id: i,
            name: '测试' + i
        })
    }
}
export default createData(20)
