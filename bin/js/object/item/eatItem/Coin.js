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
var Coin = /** @class */ (function (_super) {
    __extends(Coin, _super);
    function Coin() {
        var _this = _super.call(this) || this;
        _this.speed = 15; //被磁铁吸引的速度
        _this.magnent_distance = 800; //吸引的范围
        _this.poolTag = "Coin";
        var ani = new Animation();
        _this.addChild(ani);
        ani.loadAnimation("CoinAnimation.ani");
        ani.play(0, true, "ani1");
        _this.setBounds(new Rectangle(2, 2, 60, 60));
        return _this;
    }
    Coin.prototype.eat = function () {
        //播放声音
        //生成特效
        var effect = Pool.getItemByClass("EatEffect", EatEffect);
        $game.itemPlace.addChild(effect);
        effect.pos(this.x + 32, this.y + 32);
        effect.start();
        //效果
        //加分
        //删除自己
        this.delete();
    };
    Coin.prototype.update = function () {
        var player = $game.player;
        if (player.isMagnent) {
            var dx = player.x - this.x;
            var dy = player.y - this.y;
            var adx = Math.abs(dx);
            var ady = Math.abs(dy);
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance <= this.magnent_distance) {
                this.x += dx / (adx + ady) * this.speed;
                this.y += dy / (adx + ady) * this.speed;
            }
        }
    };
    return Coin;
}(EatItem));
//# sourceMappingURL=Coin.js.map