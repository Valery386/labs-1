# Lab 3.1 - Deliver Data from a Library API

This is a Node.js project that creates an HTTP server to deliver data from a mock library API using the `data.js` module. The server meets the following requirements:

- Listens on `localhost`, port `3000`.
- Responds to `GET` requests at `/` with data from the asynchronous `data` function in `data.js`.
- Responds with a `404 Not Found` for any other route.

## Project Structure

The project folder contains the following files:

- **`data.js`**: Exports the `data` function that returns a promise resolving a random BASE64 string.
- **`server.js`**: Implements the HTTP server.
- **`validate.js`**: Validates the server functionality.
- **`package.json`**: Defines project metadata and provides a script to run the server.

## Requirements

Ensure you have the following installed:

- **Node.js**: Version 14.x or higher (https://nodejs.org/)
- **npm**: Included with Node.js installation

## Installation

To set up the project, clone the repository or download the project folder, then follow these steps:

1. Navigate to the project directory:
   ```bash
   cd node-labs/labs-1
   ```

2. (Optional) Install any dependencies specified in `package.json`:
   ```bash
   npm install
   ```

## Usage

### Run the Server

Start the HTTP server with the following command:

```bash
npm start
```

This will start the server at `http://localhost:3000`.

### Endpoints

| Method | Path   | Description                                   |
|--------|--------|-----------------------------------------------|
| GET    | `/`    | Returns a random BASE64 string from `data.js`.|
| GET    | Any other path | Responds with `404 Not Found`.        |

### Validation

To test if the server meets the lab's requirements, run:

```bash
node validate
```

If the implementation is correct, the output should include:

```plaintext
☑️ GET http://localhost:3000/ responded with data output
☑️ GET http://localhost:3000/example responded with 404 Not Found status

PASSED
```

## Example

1. Start the server:
   ```bash
   npm start
   ```
2. Access valid endpoint `/`:
    - Open [http://localhost:3000/](http://localhost:3000/) in a browser or use a tool like `curl`:
      ```bash
      curl http://localhost:3000/
      ```
3. Access an invalid endpoint `/example`:
    - Open [http://localhost:3000/example](http://localhost:3000/example) in a browser or use `curl`:
      ```bash
      curl http://localhost:3000/example
      ```

Expected result:
- `/` returns a random BASE64 string.
- Any other route returns `404 Not Found`.

## Project Scripts

- **`npm start`**: Starts the HTTP server.
- **`node validate`**: Runs validation to confirm server behavior matches requirements.

## License

This project is provided for educational purposes and does not include a license.

---

Made with ❤️ for Lab 3.1