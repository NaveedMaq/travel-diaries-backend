import { Schema, model } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  password: string;
  posts: string[];
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minLength: 5,
  },

  posts: [{ type: String }],
});

const User = model<IUser>('User', userSchema);

export default User;
