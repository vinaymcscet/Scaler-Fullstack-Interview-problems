const mongoose = require('mongoose');

const dbUrl = 
`mongodb+srv://vinaymcscet68:4M6nKb9PEhWAeAMU@cluster0.g0wxqiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// once for connection
const connectDB =  async() => {
    try {
        await mongoose.connect(dbUrl);
        console.log("Connected to db", connection.STATES);
    } catch(err) {
        console.log(err);
    }   
}

module.exports = connectDB;