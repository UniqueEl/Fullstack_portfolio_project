import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 3,
            max: 30,
        },
        lastName: {
            type: String,
            required: true,
            min: 3,
            max: 30,
        },
        email: {
            type: String,
            required: true,
            max: 30,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 20,
        },
        picturePath: {
            type: String,
            required: false,
            default: '',
        },
        friends: {
            type: Array,
            default: [],
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
    },
    { timestamps: true}
);

const User = mongoose.model("User", UserSchema);
export default User;