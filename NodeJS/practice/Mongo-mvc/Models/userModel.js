const mongoose = require('mongoose');
// Define a schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    createdAt: Date,
    updatedAt: Date,
});
// Pre-save hook to add timestamps
userSchema.pre('save', function (next) {
    console.log("Pre-save hook")
    const now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});
    // Post-save hook to log a message
userSchema.post('save', function (doc, next) {
    console.log(`User ${doc.name} has been saved.`);
    next();
});
// Create a model from the schema
const User = mongoose.model('User', userSchema);
module.exports = User;
    