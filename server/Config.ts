import { NextFunction, Response } from 'express';
import {IGetUserAuthInfoRequest} from './definitions';

export default class Config {
  headerConfig = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {  
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
        res.setHeader('Access-Control-Allow-Origin', req.get('origin') || 'http://localhost:3001')
        res.setHeader('Access-Control-Allow-Credentials', 'true')
        res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PATCH,DELETE')
        next()
      }
}