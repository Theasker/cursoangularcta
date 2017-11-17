"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    Object.defineProperty(UniversityLibrarian.prototype, "department", {
        get: function () {
            return this._department;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversityLibrarian.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UniversityLibrarian.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    UniversityLibrarian.prototype.assisCustomer = function (data) {
        console.log('Lo que haga la función...');
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
// Clase abstracta que no se puede instanciar y tiene como múnimo un método abstracto
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem() {
    }
    ReferenceItem.prototype.doIt = function () { };
    return ReferenceItem;
}());
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine() {
        return _super.call(this) || this;
    }
    Magazine.prototype.printDocument = function () {
        throw new Error("Method not implemented.");
    };
    Magazine.prototype.doItAgain = function () {
        _super.prototype.doIt.call(this);
        console.log(this.data2);
    };
    return Magazine;
}(ReferenceItem));
//# sourceMappingURL=classes.js.map