"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        // res.send('Hello teste');
        res.json({ text: 'api' });
    }
}
exports.indexController = new IndexController();
