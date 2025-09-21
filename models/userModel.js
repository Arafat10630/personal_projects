import mongoose from "mongoose";
import { routeModule } from "next/dist/build/templates/app-page";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    route: {
        type: String,
        default: 'user'
    },
    root: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/dldn37am7/image/upload/v1758491221/samples/balloons.jpg'
    }
},{
    timestamps: true
})

let Dataset = mongoose.models.user || mongoose.model('user', userSchema)
export default Dataset