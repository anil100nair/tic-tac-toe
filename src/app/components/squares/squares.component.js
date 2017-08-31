"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SquaresComponent = (function () {
    function SquaresComponent() {
    }
    return SquaresComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SquaresComponent.prototype, "state", void 0);
SquaresComponent = __decorate([
    core_1.Component({
        selector: 'square',
        template: "{{state}}",
        styles: ["\n        :host{\n            width : 100px;\n            height: 100px;\n            border: 1px solid grey;\n            font-size: 75px;\n            text-align: center;\n            padding: auto;\n        }\n"]
    })
], SquaresComponent);
exports.SquaresComponent = SquaresComponent;
//# sourceMappingURL=squares.component.js.map