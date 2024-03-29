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
var Stab = /** @class */ (function (_super) {
    __extends(Stab, _super);
    function Stab() {
        var _this = _super.call(this) || this;
        _this.poolTag = "Stab";
        _this.loadImage("item/Spike.png");
        _this.setBounds(new Rectangle(3, 3, 58, 60));
        return _this;
    }
    return Stab;
}(Enemy));
//# sourceMappingURL=Stab.js.map