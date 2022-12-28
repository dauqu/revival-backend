const {default:mongoose, Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    passport: {
        type: String,
    },
    national_id: {
        type: String,
    },
    level: {
        type: Number,
        required: true,
        default: 1
    },
    referred_by: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    total_earning: {
        type: Number,
        default: 0
    },
    total_withdrawal: {
        type: Number,
        default: 0
    },
    total_referral: {
        type: Number,
        default: 0
    },
    total_referral_earning: {
        type: Number,
        default: 0
    },
    total_donation: {
        type: Number,
        default: 0
    },

})

const User = model("User", userSchema);
module.exports = User;