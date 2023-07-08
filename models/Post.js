import mongoose from "mongoose";

const postschema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
            min: 3,
            max: 20,
        },
        lastName: {
            type: String,
            required: true,
            min: 3,
            max: 20,
        },
        location: String,
        description: String,
        picturePath: string,
        userPicturePath: String,
        likes: {
            type: Map,
            of: Boolean,
        },
        comments: {
            type: Array,
            default: []
        }
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;