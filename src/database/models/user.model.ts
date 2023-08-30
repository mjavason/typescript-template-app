// import { model, Schema, Document } from 'mongoose';
// import argon2 from 'argon2';
// import { nanoid } from 'nanoid';
// import IUser from '../../interfaces/user.interface'


// export enum USERTYPE {
//   ADMIN = 'admin',
//   USER = 'user',
// }

// const userSchema = new Schema(
//   {
//     fullname: {
//       type: Schema.Types.String,
//       trim: true,
//     },
//     avatar: {
//       type: String,
//     },
//     username: {
//       type: Schema.Types.String,
//       trim: true,
//     },

//     country: {
//       type: Schema.Types.String,
//     },

//     userType: {
//       type: Schema.Types.String,
//       default: USERTYPE.USER,
//     },

//     email: {
//       type: Schema.Types.String,
//       required: [true, 'please add an email'],
//       unique: true,
//       lowercase: true,
//       trim: true,
//       validate: {
//         validator: function (value: string) {
//           return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
//         },
//         message: 'please enter a valid email',
//       },
//     },

//     password: {
//       type: Schema.Types.String,
//       minlength: 6,
//     },

//     googleId: {
//       type: Schema.Types.String,
//     },

//     githubId: {
//       type: Schema.Types.String,
//     },

//     verified: {
//       type: Schema.Types.Boolean,
//       default: false,
//     },
//     referral_id: {
//       type: Schema.Types.String,
//     },
//     referred_by: {
//       type: Schema.Types.String,
//     },
//   },
//   { timestamps: true },
// );

// userSchema.methods.comparePassword = async function (password: string) {
//   return await argon2.verify(this.password, password);
// };

// userSchema.pre('save', async function (next) {
//   this.referral_id = `fqv${nanoid(6)}`;

//   return next();
// });

// export const userModel = model<IUser>('User', userSchema);
