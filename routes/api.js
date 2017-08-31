var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://tictactoeuser:tic@ds036617.mlab.com:36617/tic-tac-toe-demo', ['tictactoe']);

//Get All Scores
router.get('/', (req, res, next) => {
    // console.log('From api/get all');
    db.tictactoe.find(function(err, scores) {
        if(err){
            res.send(err);
        }
        res.json(scores);
    });
    
});

//Get Single Scores
router.get('/:id', (req, res, next) => {
    // console.log('from api/get one');
    db.tictactoe.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, score) {
        if(err){
            res.send(err);
        }
        res.json(score);
    });
    
});

//Save Score
router.post('/', (req, res, next) => {
    console.log('From api/post');
    var score = req.body;
    if(!score.name || !(score.wins+'')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tictactoe.save(score, (err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(score);
        });
    }
});

//Delete Score
router.delete('/:id', (req, res, next) => {
    // console.log('from api/delete');
    db.tictactoe.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, score) {
        if(err){
            res.send(err);
        }
        res.json(score)
    });
    
});

//Update Score
router.put('/:id', (req, res, next) => {
    // console.log('From api/put');
    var score = req.body;
    var updScore = {};

    if(score.name !== null) {
        updScore.name = score.name;
    }

    if(score.wins !== null) {
        updScore.wins = score.wins;
    }

    if(score.loss !== null) {
        updScore.loss = score.loss;
    }

    if(score.draw !== null) {
        updScore.draw = score.draw;
    }

    if(!updScore) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tictactoe.update({_id: mongojs.ObjectId(req.params.id)}, updScore, {}, function(err, score) {
        if(err){
            res.send(err);
        }
        res.json(score)
    });
    }    
});

module.exports = router;