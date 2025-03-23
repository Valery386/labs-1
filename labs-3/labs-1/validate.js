'use strict'

const http = require('http') // Use the HTTP core module

const BASE_URL = 'http://localhost:3000'

async function validate() {
    // Test 1: GET / should respond with data from `data.js`
    const test1 = new Promise((resolve, reject) => {
        http.get(BASE_URL + '/', (res) => {
            let data = ''
            res.on('data', (chunk) => {
                data += chunk
            })
            res.on('end', () => {
                if (res.statusCode === 200 && data.trim().length > 0) {
                    console.log('☑️ GET http://localhost:3000/ responded with data output')
                    resolve()
                } else {
                    console.error('❌ GET http://localhost:3000/ did not respond as expected')
                    reject()
                }
            })
        }).on('error', reject)
    })

    // Test 2: GET /example should respond with 404
    const test2 = new Promise((resolve, reject) => {
        http.get(BASE_URL + '/example', (res) => {
            if (res.statusCode === 404) {
                console.log('☑️ GET http://localhost:3000/example responded with 404 Not Found status')
                resolve()
            } else {
                console.error('❌ GET http://localhost:3000/example did not return 404')
                reject()
            }
        }).on('error', reject)
    })

    // Run both tests
    try {
        await test1
        await test2
        console.log('\nPASSED')
    } catch (err) {
        console.error('\nFAILED')
        process.exit(1)
    }
}

// Run the validator
validate()