var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://tictactoeuser:tic@ds036617.mlab.com:36617/tic-tac-toe-demo', ['tictactoe']);

//Get All Scores
router.get('/', (req, res, next) => {
    db.tictactoe.find(function(err, scores) {
        if(err){
            res.send(err);
        }
        res.json(scores)
    });
    
});

//Get Single Scores
router.get('/:id', (req, res, next) => {
    db.tictactoe.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, score) {
        if(err){
            res.send(err);
        }
        res.json(score)
    });
    
});

//Save Score
router.post('/', (req, res, next) => {
    var player = req.body;
    if(!player.name || !(player.wins)){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tictactoe.save(player, (err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(player);
        });
    }
});

//Delete Score
router.delete('/:id', (req, res, next) => {
    db.tictactoe.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, score) {
        if(err){
            res.send(err);
        }
        res.json(score)
    });
    
});

//Update Score
router.put('/:id', (req, res, next) => {
    var score = req.body;
    var updScore = {};

    if(score.name) {
        updScore = score.name;
    }

    if(score.wins) {
        updScore.wins = score.wins;
    }

    if(score.loss) {
        updScore.loss = score.loss;
    }

    if(score.draw) {
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