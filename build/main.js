"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const game_1 = require("./game");
const Express = require('express');
let ex = Express();
ex.get("/menu", function (req, res) {
    console.log(req);
    res.sendFile("/home/rb/Documents/tictactoe/src/menu.html");
});
ex.get("/play", function (req, res) {
    console.log(req);
    res.sendFile("/home/rb/Documents/tictactoe/src/index.html");
});
ex.get("/player1", function (req, res) {
    console.log(req);
    mongoose_1.default.connect('mongodb://localhost/game', { useNewUrlParser: true });
    let data = {
        score: {
            player1: 1
        }
    };
    game_1.ScoreModel.create({ data });
    res.sendFile("/home/rb/Documents/tictactoe/src/menu.html");
});
ex.get("/player2", function (req, res) {
    console.log(req);
    mongoose_1.default.connect('mongodb://localhost/game', { useNewUrlParser: true });
    let data = {
        score: {
            player2: 1
        }
    };
    game_1.ScoreModel.create({ data });
    res.sendFile("/home/rb/Documents/tictactoe/src/menu.html");
});
var MongoClient = require('mongodb').MongoClient;
ex.get("/score", function (req, res) {
    console.log(req);
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err)
            throw err;
        var dbo = db.db("game");
        dbo.collection("scores").find({}).toArray(function (err, result) {
            if (err)
                throw err;
            let data = Object.keys(result).map(key => result[key].data);
            let P1Score = 0;
            let P2Score = 0;
            for (let x = 0; x < data.length; x++) {
                if (data[x].score.player1) {
                    P1Score += 1;
                }
                if (data[x].score.player2) {
                    P2Score += 1;
                }
            }
            if (P1Score < P2Score) {
                res.send("<h1 style='text-align: center;color: rgb(117, 30, 30)'>PLAYER 2: " + P2Score + "</h1><br><h1 style='text-align: center;color: rgb(117, 30, 30)'>PLAYER 1: " + P1Score + "</h1><a href='http://localhost:12345/menu' ><h1 style='text-align: center'>Back</h1</a>");
                return;
            }
            res.send("<h1 style='text-align: center;color: rgb(117, 30, 30)'>PLAYER 1: " + P1Score + "</h1><br><h1 style='text-align: center;color: rgb(117, 30, 30)'>PLAYER 2: " + P2Score + "</h1><a href='http://localhost:12345/menu' ><h1 style='text-align: center'>Back</h1></a>");
            db.close();
        });
    });
});
ex.listen(3000, '192.168.254.102', function () {
    console.log('Application worker ' + process.pid + ' started...');
});
//# sourceMappingURL=main.js.map