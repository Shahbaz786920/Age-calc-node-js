const http = require('http');
const data = require('./data.json')
const server = http.createServer((req, res) => {
    const parsedURL=url.parse(req.url,true).query

    if (parsedURL.pathname==='/age/:year/:month/:date/:name'&&req.method==='GET') {
        var searchYear = req.query.year
        var searchMonth = req.query.month
        var searchDate = req.query.date
        var searchName = req.query.name
        var user = data.find((item) => item.year === searchYear,
            data.find((item) => item.month === searchMonth,
                data.find((item) => item.date === searchDate,
                    data.find((item) => item.name === searchName))))
        res.writeHead(200)
        res.end(JSON.parse(user))
    }
    else{
        res.writeHead(404)
        res.end(JSON.parse('some error occur'))
    }
})

server.listen(8080, () => console.log('server started...'))