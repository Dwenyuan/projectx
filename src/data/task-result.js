// 任务运行状态 数据结构测试
let result = {
    "start": 1477929731803,
    "seconds": 2,
    "errors": 7,
    "requests": 0,
    "response": 0,
    "download": 0,
    "upload": 0,
    "tasks": [{
        "name": "Total",
        "state": 4,
        "lines": [
            { "name": "成功数", "type": 1, "max": 0, "min": 0, "ave": 0.0, "total": 0, "value": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "失败数", "type": 2, "max": 0, "min": 0, "ave": 0.0, "total": 0, "value": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "运行中", "type": 3, "max": 4, "min": 2, "ave": 3.5, "total": 6, "value": 4, "points": [{ "x": 2, "y": 4.0 }] },
            { "name": "启动数", "type": 4, "max": 2, "min": 2, "ave": 2.0, "total": 4, "value": 2, "points": [{ "x": 2, "y": 2.0 }] },
            { "name": "请求数", "type": 7, "max": 1, "min": 1, "ave": 0.5, "total": 1, "value": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "响应数", "type": 8, "max": 1, "min": 1, "ave": 0.5, "total": 1, "value": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "吞吐量", "type": 9, "max": 0, "min": 0, "ave": 0.0, "total": 0, "value": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "发送吞吐", "type": 10, "max": 0, "min": 0, "ave": 0.0, "total": 0, "value": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "200-299", "type": 21, "max": 0, "min": 0, "ave": 0.0, "total": 0, "value": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "300-399", "type": 22, "max": 1, "min": 1, "ave": 0.5, "total": 1, "value": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "400-499", "type": 23, "max": 0, "min": 0, "ave": 0.0, "total": 0, "value": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "else", "type": 24, "max": 0, "min": 0, "ave": 0.0, "total": 0, "value": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "aa时间", "type": 101, "max": 0, "min": 0, "ave": 0.0, "total": 0, "value": 0, "p90": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "aa标准差", "type": 102, "max": 0, "min": 0, "ave": 0.0, "total": 0, "value": 0, "points": [] },
            { "name": "aa成功", "type": 103, "max": 0, "min": 0, "ave": 0.0, "total": 0, "value": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "aa失败", "type": 104, "max": 0, "min": 0, "ave": 0.0, "total": 0, "value": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "TCP成功", "type": 11, "max": 1, "min": 1, "ave": 0.5, "total": 1, "value": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "TCP失败", "type": 12, "max": 0, "min": 0, "ave": 0.0, "total": 0, "value": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "建立时间", "type": 13, "max": 0, "min": 0, "ave": 0.0, "total": 0, "value": 0, "points": [{ "x": 2, "y": 0.0 }] },
            { "name": "TCP在线数", "type": 14, "max": 0, "min": 0, "ave": 0.0, "total": 0, "value": 0, "points": [{ "x": 2, "y": 0.0 }] }
        ]
    }],
    "logs": [
        { "seconds": "000:00:02", "name": "local@beijing", "level": "error", "user": "5", "log": "test\nthe following var can't get its value:\nvalidateCode, " },
        { "seconds": "000:00:02", "name": "local@beijing", "level": "error", "user": "5", "log": "替换参数 validateCode 失败，请确认关联成功或该参数已经在参数列表配置。 at http:\/\/www.xxx.com:18080\/Example\/login`POST" },
        { "seconds": "000:00:02", "name": "local@beijing", "level": "error", "user": "5", "log": "替换参数 JSessionID 失败，请确认关联成功或该参数已经在参数列表配置。 at http:\/\/www.xxx.com:18080\/Example\/index.jsp?session={JSessionID}`GET" },
        { "seconds": "000:00:02", "name": "local@beijing", "level": "error", "user": "5", "log": "替换参数 JSessionID 失败，请确认关联成功或该参数已经在参数列表配置。 at http:\/\/www.xxx.com:18080\/Example\/js\/jquery.min.js`GET" },
        { "seconds": "000:00:02", "name": "local@beijing", "level": "error", "user": "5", "log": "替换参数 JSessionID 失败，请确认关联成功或该参数已经在参数列表配置。 at http:\/\/www.xxx.com:18080\/Example\/css\/slider.css`GET" },
        { "seconds": "000:00:02", "name": "local@beijing", "level": "error", "user": "5", "log": "替换参数 JSessionID 失败，请确认关联成功或该参数已经在参数列表配置。 at http:\/\/www.xxx.com:18080\/Example\/js\/slider.js`GET" }
    ]
}


export default result
