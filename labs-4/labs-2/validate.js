const http = require('http');

async function validate() {
    const url = 'http://localhost:3000/data';
    const startTimes = [];

    const req = http.get(url, response => {
        console.log(`Status code: ${response.statusCode}`);

        if (response.statusCode !== 200) {
            console.log(`❌ GET ${url} responded with unexpected ${response.statusCode} status code`);
            process.exit(1);
        } else {
            console.log(`☑️ GET ${url} responded with 200 response`);
        }

        response.setEncoding('utf8');

        response.on('data', (chunk) => {
            console.log(`Received chunk: ${chunk.trim()}`);
            startTimes.push(Date.now());
        });

        response.on('end', () => {
            // Verify delay between chunks (approximately at least 500 ms)
            let delays = [];
            for (let i = 1; i < startTimes.length; i++) {
                delays.push(startTimes[i] - startTimes[i - 1]);
            }

            if (delays.every(delay => delay >= 400)) { // Allow minor variations due to network latency/system timer
                console.log(`☑️ GET ${url} has expected delay between items in response stream`);
                console.log('\nPASSED');
            } else {
                console.log(`❌ GET ${url} does NOT have the expected delay.`);
                console.log('Observed delays (ms):', delays);
                process.exit(1);
            }
        });

        response.on('error', (err) => {
            console.error(`Response error: ${err.message}`);
            process.exit(1);
        });
    });

    req.on('error', err => {
        console.error(`Request error: ${err.message}`);
        console.log(`❌ GET ${url} could not be completed`);
        process.exit(1);
    });
}

validate().catch(err => {
    console.error('Validation script encountered an error:', err);
    process.exit(1);
});