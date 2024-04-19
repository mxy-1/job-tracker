import {Types} from "mongoose"

export type ApplicationType = {
  _id: Types.ObjectId
  title: string
  company: string
  location: string
  hours: number
  salary: number
  date: string
  deadline: string
  status: string
  comments: string
  interview: string
  createdAt: string
}

