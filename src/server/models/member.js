import { Schema, model } from 'mongoose'

const memberSchema = new Schema({
    name: String,
    lastName: String, 
});

const Member = model("Member", memberSchema);

export { Member }
