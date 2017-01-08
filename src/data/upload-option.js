export default {
    uploadScript: { // 上传选项  上传脚本或是上传参数文件
        title: '上传脚本',
        type: 'script',
        url: 'scripter/upload?userCode=lin&type=script', // 路径
        multi: true //是否允许同时上传多个文件
    },
    uploadParam: { // 上传选项  上传脚本或是上传参数文件
        title: '上传参数',
        type: 'para',
        url: 'scripter/upload?userCode=lin&type=para', // 路径
        multi: true //是否允许同时上传多个文件
    }
}
