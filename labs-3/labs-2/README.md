# Lab 3.2 - Implement a Status Code Response
This project is a Node.js-based implementation of Lab 3.2, which consists of creating a server that handles HTTP requests based on the specified criteria. The server uses the **Express** framework, and support for validation is provided by a custom `validate.js` script.
## Features
The server implements the following functionality:
- Listens on `localhost` at port `3000`.
- Responds to HTTP `GET` requests to `/` with a `200 OK` status.
- Responds to HTTP `POST` requests to `/` with a `405 Method Not Allowed` status.
- A validation script (`validate.js`) is included to programmatically verify that the server meets the requirements.

## Project Structure
``` 
.
├── app.js               # Core Express app logic
├── bin
│   └── www              # Server entry point (runs on port 3000)
├── routes
│   └── index.js         # Route definitions
├── validate.js          # Validation script for server functionality
├── package.json         # Project dependencies and start script
```
## Setup Instructions
### Prerequisites
1. **Node.js** (v16 or higher) and **npm** must be installed.
2. Clone this repository and navigate to its directory labs-2.

### Installation
Run the following commands to install dependencies:
``` bash
npm install
```
## Usage
### Start the Server
Run the following command to start the server on **localhost:3000**:
``` bash
npm start
```
By default, the server listens on port `3000`. You can access it in your browser or send HTTP requests using tools like `curl` or Postman.
### Testing the Server
To verify that the server meets the specified criteria, run the validation script:
``` bash
node validate.js
```
The script will run two tests:
1. **GET Request to `/`** – Ensures the server responds with a `200 OK` status.
2. **POST Request to `/`** – Ensures the server responds with a `405 Method Not Allowed` status.

If the criteria are met, you will see output like the following:
``` 
Starting validation of the server...
☑️ GET http://localhost:3000/ responded with 200 OK
☑️ POST http://localhost:3000/ responded with 405 Method Not Allowed
```
### Example Endpoints and Behavior

| HTTP Method | Path | Expected Behavior |
| --- | --- | --- |
| GET | `/` | Returns `200 OK` |
| POST | `/` | Returns `405 Method Not Allowed` |
| Other Routes | Any | Returns `404 Not Found` |
## Scripts
### `npm start`
Starts the server by running the entry point `./bin/www`.
### `node validate.js`
Runs the validation script to check the server's behavior.
## Dependencies
This project uses the following dependencies:
- **express**: For web server functionality.
- **http-errors**: For creating HTTP error responses.

## License

This project is provided for educational purposes and does not include a license.

---

Made with ❤️ for Lab 3.2