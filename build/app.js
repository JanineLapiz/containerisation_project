"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var siteRouter_1 = require("./routes/siteRouter");
var app = express_1.default();
var port = process.env.PORT || 3000;
app.use(express_1.default.static(__dirname + "/views"));
app.use('/', siteRouter_1.siteRouter);
// app.get("/", (req: Request, res: Response) => {
//   res.send("Welcome to this site! :D");
// });
app.listen(port, function () {
    console.log("Listening on port " + port);
});
