const mongoose = require('mongoose');
const {Schema} = mongoose;

const ToDoList = new Schema({
    priority: {type: Number, default: 0},
    ToDo: String,
    Time: String
});

const UserSchema = new Schema({
    googleId: String,
    name: String,
    email: String,
    ToDolist: [ToDoList]
});


mongoose.model('users', UserSchema);