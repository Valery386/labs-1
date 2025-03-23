'use strict'

const http = require('http')

const validate = async () => {
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/',
    }

    // Utility to perform HTTP requests
    const makeRequest = (method) => {
        return new Promise((resolve, reject) => {
            const req = http.request({ ...options, method }, (res) => {
                resolve(res.statusCode)
            })
            req.on('error', reject)
            req.end()
        })
    }

    console.log('Starting validation of the server...')

    try {
        // Test GET request
        const getStatus = await makeRequest('GET')
        if (getStatus === 200) {
            console.log('☑️ GET http://localhost:3000/ responded with 200 OK')
        } else {
            console.error(`❌ GET http://localhost:3000/ responded with ${getStatus} instead of 200`)
        }

        // Test POST request
        const postStatus = await makeRequest('POST')
        if (postStatus === 405) {
            console.log('☑️ POST http://localhost:3000/ responded with 405 Method Not Allowed')
        } else {
            console.error(`❌ POST http://localhost:3000/ responded with ${postStatus} instead of 405`)
        }
    } catch (error) {
        console.error('❌ An unexpected error occurred during validation:', error.message)
    }
}

validate()