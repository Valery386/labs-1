# Node.js & Express Lab: Streaming Data with Delays
This lab demonstrates the efficient handling of streaming data with built-in delay functionality using Node.js and Express.
## ✅ Lab Overview:
You will implement an Express server that streams data gradually at regular intervals. Then, you will test the solution using a validation script.
The objectives of this lab are:
- Using a streaming implementation with Node.js (`Readable` and `Transform` streams).
- Creating a simple endpoint with Express that sends streamed data.
- Implementing and using automatic validation.

## ⚙️ Prerequisites:
- Node.js installed on your machine. Recommended version is `>=14.x`.
- NPM installed (usually bundled with Node.js). Verify with:
``` 
  npm --version
```
- A code editor (Visual Studio Code, WebStorm, Atom, etc.).

## 🛠️ Setup Instructions:
In your `labs-2` directory, follow these steps:
### 1️⃣ Clone or navigate to your project folder:
Navigate to your project (`labs-4/labs-2`):
``` bash
cd labs-2
```
### 2️⃣ Install dependencies:
``` bash
npm install express
```
## 📝 Files and Descriptions:
Your project directory `labs-2` should have the following structure:
``` 
labs-2/
├── index.js           # Express server that streams delayed data
├── validate.js        # Validate implementation correctness
├── package.json       # Node.js project configuration and dependencies
└── README.md          # Documentation (this file)
```
## 🚀 Running the Application:
### ▶️ Start your Express server:
Run your Express server:
``` bash
node index.js
```
Your server runs at:
[http://localhost:3000/data](http://localhost:3000/data)
Opening this route in a browser should progressively display the streamed data:
``` 
this
is
a
stream
of
data
```
Each chunk is delivered after approximately a 500ms delay.
### ✅ Validate your solution:
Ensure your Express server is running in another terminal.
Execute the validation script in a separate terminal:
``` bash
node validate.js
```
### ✅ Expected Output:
``` bash
☑️ GET http://localhost:3000/data responded with 200 response
Received chunk: this<br>
Received chunk: is<br>
Received chunk: a<br>
Received chunk: stream<br>
Received chunk: of<br>
Received chunk: data<br>
☑️ GET http://localhost:3000/data has expected delay between items in response stream

PASSED
```
## 📚 Explanation of Stream Implementation:
The stream functionality is implemented using Node.js built-in streams:
- `Readable`: A readable stream that provides predefined content (`this, is, a, stream, of, data`).
- `Transform`: A transform stream introduces a deliberate 500 ms delay for each streamed chunk.

Example implementation:
``` javascript
const {Readable, Transform} = require('stream');

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
```
The above stream is then consumed and sent directly to the Express response object:
``` javascript
app.get('/data', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const streamSource = stream();
    streamSource.pipe(res);
});
```
## ☑️ Success Criteria:
Your solution passes if the following conditions are met:
- Visiting `http://localhost:3000/data` returns streamed content progressively every ~500 ms.
- Running the validator (`node validate.js`) produces output indicating successful completion:
``` bash
  PASSED
```
## 📜 License
This project is provided for **educational purposes only** and does not include a license.

---

## ❤️ Acknowledgment
Made with ❤️ for **Lab 4.2**.