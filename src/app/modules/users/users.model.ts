import { IUser } from './user.interface';
import { Schema, model } from 'mongoose';

type Usermodel = Model<IUser,object>


const userSchema = new Schema<IUser>({
    id:{
        type: String,
        required: true,
        unique:true,
    },
    role:{
        type: String,
        required: true,

    },
    password:{
        type: String,
        required: true,
    }
 
  },
  
    {
        timestamps:true,
    }
  )

  export  const User = model<IUser, Usermodel>('User', userSchema);