import { Schema, model } from 'mongoose'

export type IUser {
  id: string
  role: string
  password: string
}
