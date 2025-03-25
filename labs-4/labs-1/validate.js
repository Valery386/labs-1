const http = require('http'); // HTTP client to test requests

// The URL and endpoint to test
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/me',
    method: 'GET',
    headers: {
        'Accept': 'text/html'
    }
};

// Function to send the HTTP request and validate the response
const validateRoute = () => {
    const req = http.request(options, res => {
        if (res.statusCode === 200) {
            console.log('☑️ GET http://localhost:3000/me responded with 200 response');
        } else {
            console.error(`❌ Unexpected response: HTTP ${res.statusCode}`);
            process.exit(1); // Exit with error
        }

        // Collect the response data
        let body = '';
        res.on('data', chunk => {
            body += chunk;
        });

        res.on('end', () => {
            // Check if the response includes layout-specific content
            if (body.includes('<div id="layout-identifier"')) {
                console.log('☑️ GET http://localhost:3000/me reuses the layout.hbs view to render');
                console.log('\nPASSED\n');
            } else {
                console.error('❌ The response does not seem to use layout.hbs');
                process.exit(1); // Exit with error
            }
        });
    });

    // Handle request errors
    req.on('error', error => {
        console.error(`❌ Error: Could not connect to http://localhost:3000/me`);
        console.error(error);
        process.exit(1); // Exit with error
    });

    req.end(); // Send the request
};

// Run the validation
validateRoute();