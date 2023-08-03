const http = require("http")

const server = http.createServer((req , res ) => {
    if (req.url === "/" ) {
        res.end("hello from home page");
    } else if (req.url === "/about") {
        res.end("hello from about page");
    } else {
        res.end(`
        <h1>Oops!!</h1>
    
        <p>we can't seem find what are you looking for</p>
        <a href="/"> back home </a>
        `)
    }
});

server.listen(3000)