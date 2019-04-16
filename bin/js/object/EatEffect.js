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
var EatEffect = /** @class */ (function (_super) {
    __extends(EatEffect, _super);
    function EatEffect() {
        var _this = _super.call(this) || this;
        _this.ani = new Animation();
        _this.addChild(_this.ani);
        _this.ani.loadAnimation("EatEffectAnimation.ani");
        _this.ani.pos(-75 / 2, -75 / 2); //中心对齐
        _this.ani.on("complete", _this, _this.onAniComplete);
        return _this;
    }
    EatEffect.prototype.start = function () {
        this.ani.play(0, false, "ani1");
    };
    EatEffect.prototype.onAniComplete = function () {
        this.removeSelf();
        Pool.recover("EatEffect", this);
    };
    return EatEffect;
}(Sprite));
//# sourceMappingURL=EatEffect.js.map