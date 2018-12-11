import {Schema, model} from 'mongoose'

let UserSchema: Schema = new Schema({
    name: {
        type: String,
        default: '',
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: '',
    },
    createdAt: Date,
    updatedAt: Date
})

export default model('User', UserSchema)