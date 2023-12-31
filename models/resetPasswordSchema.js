const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const resetPasswordSchema = new Schema({
    email : {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    expire : {
        type: Boolean,
        required: true,
        default: false
    }
},
{
    timestamps : true
})

const ResetPassword = mongoose.model('ResetPassword', resetPasswordSchema)

module.exports = ResetPassword