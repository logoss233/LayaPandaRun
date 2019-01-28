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
var Ball2 = /** @class */ (function (_super) {
    __extends(Ball2, _super);
    function Ball2() {
        var _this = _super.call(this) || this;
        _this.poolTag = "Ball2";
        _this.loadImage("item/metal-ball-2.png");
        _this.setBounds(new Rectangle(7, 7, 50, 50));
        return _this;
    }
    return Ball2;
}(Enemy));
//# sourceMappingURL=Ball2.js.map