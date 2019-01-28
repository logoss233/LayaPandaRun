var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ball1 = /** @class */ (function (_super) {
    __extends(Ball1, _super);
    function Ball1() {
        var _this = _super.call(this) || this;
        _this.poolTag = "Ball1";
        _this.loadImage("item/metal-ball-1.png");
        _this.setBounds(new Rectangle(7, 7, 50, 50));
        return _this;
    }
    return Ball1;
}(Enemy));
//# sourceMappingURL=Ball1.js.map