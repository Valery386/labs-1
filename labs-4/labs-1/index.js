const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set the view engine to hbs (Handlebars)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Route to render profile view
app.get('/me', (req, res) => {
    res.render('profile');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});