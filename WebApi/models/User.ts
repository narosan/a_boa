import { Schema, model, Document } from "mongoose";
import { REGEX } from "../util/regex";

export interface IUser extends Document {
    id: Number,
    name: String,
    email: String,
    birthday?: Date 
}

const UserSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: REGEX.EMAIL,
        required: true,
    },
    birthday: {
        type: Date,
        required: false
    }
}, { timestamps: true, autoIndex: true, collection: 'User' });

export default model<IUser>('User', UserSchema);