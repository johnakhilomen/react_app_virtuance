import { Request, Response, NextFunction } from 'express'

export default class RequestMiddlewares {
    
validateBodyRequest(req:Request, res:Response, next: NextFunction) {
        let requestMethod = req.method;
        if (requestMethod === "PATCH")
        {
            const {name, newName} = req.body; 
            if (!name || !newName) {
                return res.status(305).json({error: "Invalid Request"})
            }
        }
        return next()
        
    }
}