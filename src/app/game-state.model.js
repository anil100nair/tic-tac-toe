"use strict";
var GameState;
(function (GameState) {
    GameState[GameState["XTurn"] = 0] = "XTurn";
    GameState[GameState["OTurn"] = 1] = "OTurn";
    GameState[GameState["Won"] = 3] = "Won";
    GameState[GameState["Draw"] = 4] = "Draw";
})(GameState = exports.GameState || (exports.GameState = {}));
//# sourceMappingURL=game-state.model.js.map