import { Request } from 'express'

export interface IGetUserAuthInfoRequest extends Request {
}

export interface IImage {
    id:string
    name:string
    url:string
}

