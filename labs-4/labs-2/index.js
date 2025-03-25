const express = require('express');
const { Readable, Transform } = require('stream');

const app = express();
const port = 3000;

// Existing stream() function with delayed chunks
function stream() {
    const readable = Readable.from([
        'this', 'is', 'a', 'stream', 'of', 'data'
    ].map((s) => s + '<br>'));

    const delay = new Transform({
        transform(chunk, enc, cb) {
            setTimeout(cb, 500, null, chunk);
        }
    });

    return readable.pipe(delay);
}

// /data route implementation
app.get('/data', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const streamSource = stream();
    streamSource.pipe(res);
});

// Start the Express server
app.listen(port, () => {
    console.log(`Express server running at http://localhost:${port}`);
});