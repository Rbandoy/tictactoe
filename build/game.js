"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ScoreSchema = new mongoose_1.default.Schema({}, {
    strict: false,
});
exports.ScoreModel = mongoose_1.default.model('score', ScoreSchema);
exports.default = exports.ScoreModel;
//# sourceMappingURL=game.js.map