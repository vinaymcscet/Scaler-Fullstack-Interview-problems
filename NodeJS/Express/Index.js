// Import the Express module
const express = require('express');

// Create an Express application
const app = express();
// app.use is basically it will told to express that use a particular middleware function, 
// express.json basically used as a express built-in middleware which is parsing any json data from client and available to req.body 
app.use(express.json());
const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // call the next middleware in the chain
}
app.use(loggerMiddleware);

// express.static is a middleware function that serves static les such as
// HTML, CSS, JavaScript, images, and more.
// It is often used to serve client-side assets, making it easy to host
// static les like HTML, CSS, and JavaScript for your web application.
// The root parameter species the root directory from which to serve
// static les.
// The optional options object allows you to congure various settings,
// such as caching and le handling.

app.use(express.static('public'));

// Define a route
app.get('/', (req, res) => {
    res.send('Hello! express');
})
app.get('/about', (req, res) => {
    res.send('Hello! This is about page');
})
app.post('/data', (req, res) => {
    console.log(req.body); // undefined now, to get req.body we use middleware in express by using express.json()
    res.send('Hello! This is Data page post request');
})

const users = [
    { id: 1, name:'User 1'},
    { id: 2, name:'User 2'},
];

app.post('/users', (req, res) => {
    const newUser = req.body;
    const userId = users.length + 1;
    newUser.id = userId;
    users.push(newUser);
    res.status(201).json({message: 'user created successfully', user: newUser})
})
// DELETE /users/1    DELETE  /users/2
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIdx = users.findIndex(user => user.id === userId);
    if(userIdx === -1) {
        return res.status(404).json({ message: 'User not found.'})
    }
    users.splice(userIdx, 1);
    res.json({ message: 'User deleted successfully.'})
});

app.get("/users", (req, res) => {
    console.log("get users handler");
    res.status(200).json(users);
});
// enter a url like /users/profile
// get a user by id
app.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((user) => user.id === userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
});

// call middleware for specific request
app.get('/special', loggerMiddleware, (req, res) => {
    res.send('This route is special');
})

// for searching a product
app.get('/search', (req, res) => {
    const queryParams = req.query;
    console.log("Query Parameters", queryParams);
    res.send(`Your parameters are: , ${JSON.stringify(queryParams)}` )
})

app.use((req, res) => {
    res.status(404).send("Page not found");
});
    
// start the server
const port = '3000';
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})