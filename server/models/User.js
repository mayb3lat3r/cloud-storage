const { Schema, model } = require('mongoose')
const ObjectId = require('mongodb').ObjectID;

const User = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    diskSpace: { type: Number, default: 1044 ** 3 * 10 },
    usedSpace: { type: Number, default: 0 },
    avatar: { type: String },
    files: [{type: ObjectId, ref:'File'}]
})


module.exports = model('User', User)