const mongoose = require('mongoose');
const dbUrl = process.env.DB_URL;
console.log("dbUrl", dbUrl);

const connectDB = async() => {
    try {
        await mongoose.connect(dbUrl);
        console.log("connected to DB");
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;
