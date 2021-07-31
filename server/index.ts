import express from "express";
import RequestMiddlewares from "./middlewares/validate_request"
import Config from "./Config"
import AppController from "./controllers/AppController"

const app = express()
const requestMiddlewares = new RequestMiddlewares();
const config = new Config();
const appController = new AppController()

app.use(express.json())
app.use(requestMiddlewares.validateBodyRequest);
app.use(config.headerConfig)
  
app.get('/healthcheck', appController.healthCheck)
app.get('/images', appController.getImages)
app.patch('/update', appController.updateImage)

app.listen(8080, () => {
    console.log(`Server is running at https://localhost:8080`);
});

