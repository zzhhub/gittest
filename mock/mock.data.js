Mock.mock('http://www.bai.com', {
    "data": [
        { "number|123.1-10": 1, 'age|20-60': 25, 'name|+1': 0, 'name | 1': true },
        { "number|123.1-10": 1, 'age|20-60': 25, 'name|+1': 1, 'name | 1': true },
        { "number|123.1-10": 1, 'age|20-60': 25, 'name|+1': 2, 'name | 1': true },
        { "number|123.1-10": 1, 'age|20-60': 25, 'name|+1': 3, 'name | 1': true }
    ]
})
Mock.mock('http://www.graph.com', {
    content: '@paragraph(1, 3)'
})
Mock.mock('http://www.tu.com', {
    'data': {
        first: '@FIRST',
        middle: '@FIRST',
        last: '@LAST',
        full: '@first @middle @last'
    }
})

//url，请求路径。       //请求的数据。