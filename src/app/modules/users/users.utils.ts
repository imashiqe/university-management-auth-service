import { User } from "./users.model"

let lastUserId = 0


export const findLastUserId = async()=> {
     const lastUser = await User.findOne({},{id:1, _id:0}).sort({
         createdAt:-1
     }).lean()

     return lastUser?.id
}

export const generateUserId = ()=>{
    const currentId =( await findLastUserId() )|| (0).toString.().padStart(5,'0')

    return currentId 
    // lastUserId++
    // return String(lastUserId).padStart(5,'0')
}