const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream("large-file.txt");

    stream.on("error", (err) => {
        res.statusCode = 500;
        res.end("Error reading file");
    });

    stream.pipe(res);
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});