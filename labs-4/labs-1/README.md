# Lab 4.1 - Render a View

This lab demonstrates how to set up an Express server with a `/me` route, render a profile page using the `layout.hbs` file, and validate the implementation with a `validate.js` script.

---

## 💻 Project Structure

```
labs-1/
│
├── views/
│   ├── layout.hbs         # The main layout template for the application
│   ├── profile.hbs        # The profile page template rendered on the /me route
│
├── index.js               # Main Express server file
├── validate.js            # Script to validate that /me is implemented correctly
├── package.json           # Node.js project configuration and dependencies
```

---

## 📝 Prerequisites

- **Node.js** installed on your system.
- **npm** (Node Package Manager) to manage dependencies.

---

## ⚙️ Installation

1. Clone or download this repository to your local machine.
   
2. Navigate to the project folder in your terminal:
```shell script
cd labs-1
```

3. Install the dependencies listed in `package.json`:
```shell script
npm install
```

---

## 🚀 Running the Server

The Express server is defined in the `index.js` file. Follow these steps to run it:

1. Start the development server:
```shell script
node index.js
```

2. Open your browser and navigate to:
```
http://localhost:3000/me
```

3. You should see a simple profile page with the rendered content from `profile.hbs`.

---

## 🛠 Validating the Implementation

The `validate.js` script checks whether the `/me` route:
- Responds successfully with an HTTP `200` status code.
- Uses the `layout.hbs` template to render the profile page.

To validate your implementation:

1. Make sure the server is running in another terminal:
```shell script
node index.js
```

2. Run the `validate.js` script:
```shell script
node validate.js
```

3. If implemented correctly, you should see the following output:
```
☑️ GET http://localhost:3000/me responded with 200 response
☑️ GET http://localhost:3000/me reuses the layout.hbs view to render

   PASSED
```

---

## 🖼 Templates Overview

1. **`layout.hbs`**:
   - This is the main layout template used by all views.
   - It includes a unique identifier (`id="layout-identifier"`) that the validation script checks.

```html
<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>My Profile</title>
   </head>
   <body>
       <!-- Layout Identifier -->
       <div id="layout-identifier" style="display: none;">layout.hbs</div>
       {{{body}}}
   </body>
   </html>
```

2. **`profile.hbs`**:
   - The child template rendered when visiting `/me`.
   - Contains basic HTML content.

```html
<h1>My Profile</h1>
<p>Hello, welcome to my profile page!</p>
```

---

## 📂 Files Overview

- **`index.js`**:
  - Sets up the server using Express.
  - Configures `hbs` as the view engine.
  - Creates a `/me` route that renders the `profile.hbs` template.

- **`validate.js`**:
  - Sends a request to `/me`.
  - Ensures that `/me` responds with a status code of `200` and uses the `layout.hbs` for rendering.

---

## Dependencies

The project uses the following Node.js modules:

- **[express](https://www.npmjs.com/package/express)**: A fast and minimalist web framework for Node.js.
- **[hbs](https://www.npmjs.com/package/hbs)**: A Handlebars view engine for Express.

Install dependencies with:

```shell script
npm install
```

---

## 🚨 Troubleshooting

- **Server Doesn't Start**:
  - Ensure all dependencies are installed:
```shell script
npm install
```
  - Verify that `node` is installed and accessible in your terminal.

- **Validation Fails**:
  - Check that `layout.hbs` includes the `<div id="layout-identifier">layout.hbs</div>` element.
  - Ensure that the `/me` route renders the `profile.hbs` template.

---

## 📜 License
This project is provided for **educational purposes only** and does not include a license.

---

## ❤️ Acknowledgment
Made with ❤️ for **Lab 4.1**.