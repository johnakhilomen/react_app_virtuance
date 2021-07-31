"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor() {
        this.headerConfig = (req, res, next) => {
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Allow-Origin', req.get('origin') || 'http://localhost:3001');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PATCH,DELETE');
            next();
        };
    }
}
exports.default = Config;
//# sourceMappingURL=Config.js.map