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
var Shield = /** @class */ (function (_super) {
    __extends(Shield, _super);
    function Shield() {
        var _this = _super.call(this) || this;
        _this.poolTag = "Shield";
        var ani = new Animation();
        _this.addChild(ani);
        ani.loadAnimation("ShieldAnimation.ani");
        ani.play(0, true, "ani1");
        _this.setBounds(new Rectangle(2, 2, 60, 60));
        return _this;
    }
    Shield.prototype.eat = function () {
        //播放声音
        //生成特效
        var effect = Pool.getItemByClass("EatEffect", EatEffect);
        $game.itemPlace.addChild(effect);
        effect.pos(this.x + 32, this.y + 32);
        effect.start();
        //效果
        $game.player.isShield = true;
        //删除自己
        this.delete();
    };
    return Shield;
}(EatItem));
//# sourceMappingURL=Shield.js.map