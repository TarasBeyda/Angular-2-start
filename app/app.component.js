"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponentStart = (function () {
    function AppComponentStart() {
    }
    return AppComponentStart;
}());
AppComponentStart = __decorate([
    core_1.Component({
        selector: 'my-app-start',
        template: "\n                <ul>\n                    <li><a routerLink=\"/\">Home</a></li>\n                    <li><a routerLink=\"/about\">About</a></li>\n                </ul>\n                <hr>\n                <router-outlet></router-outlet>\n              "
    })
], AppComponentStart);
exports.AppComponentStart = AppComponentStart;
//# sourceMappingURL=app.component.js.map