const express = require('express');
const app = express();
const routes = require('./routes/Games');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use("/", routes);

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});

