"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestMiddlewares {
    validateBodyRequest(req, res, next) {
        let requestMethod = req.method;
        if (requestMethod === "PATCH") {
            const { name, newName } = req.body;
            if (!name || !newName) {
                return res.status(305).json({ error: "Invalid Request" });
            }
        }
        return next();
    }
}
exports.default = RequestMiddlewares;
//# sourceMappingURL=validate_request.js.map