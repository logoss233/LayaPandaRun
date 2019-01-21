var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EatItem = /** @class */ (function (_super) {
    __extends(EatItem, _super);
    function EatItem() {
        var _this = _super.call(this) || this;
        _this.itemType = "eat";
        return _this;
    }
    EatItem.prototype.eat = function () {
    };
    return EatItem;
}(Item));
//# sourceMappingURL=EatItem.js.map