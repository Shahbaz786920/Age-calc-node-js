const http = require('http');
const url = require('url')
const data = require('./data')
const server = http.createServer((req, res) => {
    const parsedURL=url.parse(req.url,true).query

    if (parsedURL.pathname==='/age'&&req.method==='GET') {
        const searchYear = parsedURL.query.year
        const searchMonth = parsedURL.query.month
        const searchDate = parsedURL.query.date
        const searchName = parsedURL.query.name
        const user = data.find((item) => item.year === searchYear,
            data.find((item) => item.month === searchMonth,
                data.find((item) => item.date === searchDate,
                    data.find((item) => item.name === searchName))))
        res.writeHead(200)
        res.end(JSON.stringify(user))
    }
    else{
        res.writeHead(404)
        res.end(JSON.stringify('some error occur'))
    }
})

server.listen(8080, () => console.log('server started...'))