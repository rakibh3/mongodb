import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true },
    password: { type: String, required: true },
    needsPasswordChange: { type: Boolean, required: true },
    role: { type: String, enum: ['admin', 'student', 'faculty'] },
    status: { type: String, enum: ['in-progress', 'blocked'] },
    isDeleted: { type: Boolean },
  },
  {
    timestamps: true,
  },
);

export const User = model<TUser>('User', userSchema);
