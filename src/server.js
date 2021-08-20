const server = require('restify').createServer();

function response(req, res, next) {
	const responseCode = Number(req.params.code)
	res.send((responseCode >= 100 || responseCode <= 999) ? responseCode : 999, req.body)
	next()
}

server.del("/:code", response)
server.get("/:code", response)
server.head("/:code", response)
server.opts("/:code", response)
server.patch("/:code", response)
server.post("/:code", response)
server.put("/:code", response)

const port = Number(process.argv[2])

server.listen(!Number.isNaN(port) ? port : 6789, function() {
	console.log(`Server running on port ${server.url.substr(12, 4)}`);
});
