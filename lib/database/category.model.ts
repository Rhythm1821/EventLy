import { Schema } from "mongoose";

export interface ICategory extends Document {
    _id: string;
    name: string;

}
const CategorySchema = new Schema({
    name: {type: String, require: true, unique: true},
})