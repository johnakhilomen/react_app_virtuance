"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../data"));
class AppController {
    constructor() {
        this.images = data_1.default;
        this.healthCheck = (req, res) => {
            res.sendStatus(200);
        };
        this.getImages = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log('Sending images...', this.images);
            return res.send(this.images);
        });
        this.updateImage = (req, res) => {
            const { name, newName } = req.body;
            let dump_values = [...this.images];
            const index = dump_values.findIndex((x) => x.name === name);
            dump_values[index] = Object.assign(Object.assign({}, dump_values[index]), { name: newName });
            dump_values.splice(index, 1, dump_values[index]);
            this.images = [...dump_values];
            //We can check here on the console that the images were updated
            console.log(this.images);
            res.status(201).send(this.images);
        };
    }
}
exports.default = AppController;
//# sourceMappingURL=AppController.js.map