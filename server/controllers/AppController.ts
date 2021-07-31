import { Request, Response } from 'express'
import imagesData from "../data";

export default class AppController {
    private images = imagesData;
    healthCheck = (req: Request, res: Response) => {
        res.sendStatus(200)
    }
    getImages = async (req: Request, res: Response) => {
        console.log('Sending images...', this.images)
        return res.send(this.images)
    }
    updateImage = (req: Request, res: Response) => {
        const {name, newName} = req.body;
        let dump_values = [...this.images];
        const index = dump_values.findIndex((x:any)=>x.name===name);
        dump_values[index] = {
            ...dump_values[index],
            name: newName
        }
        dump_values.splice(index, 1, dump_values[index])
        this.images = [...dump_values]
        //We can check here on the console that the images were updated
        console.log(this.images)
        res.status(201).send(this.images);
    }

}
