// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    },

fullName: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
 
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
  },
  profilePic:{
    type: String,
    default:"",
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
export default User;
