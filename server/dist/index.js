"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_request_1 = __importDefault(require("./middlewares/validate_request"));
const Config_1 = __importDefault(require("./Config"));
const AppController_1 = __importDefault(require("./controllers/AppController"));
const app = express_1.default();
const requestMiddlewares = new validate_request_1.default();
const config = new Config_1.default();
const appController = new AppController_1.default();
app.use(express_1.default.json());
app.use(requestMiddlewares.validateBodyRequest);
app.use(config.headerConfig);
app.get('/healthcheck', appController.healthCheck);
app.get('/images', appController.getImages);
app.patch('/update', appController.updateImage);
app.listen(8080, () => {
    console.log(`Server is running at https://localhost:8080`);
});
//# sourceMappingURL=index.js.map