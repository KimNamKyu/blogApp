import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
const UserSchema: Schema = new Schema({
    username: String,
    hashedPassword: String
})

UserSchema.methods.setPassword = async function (password: any) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
}

const User = mongoose.model('User', UserSchema);
export default User;