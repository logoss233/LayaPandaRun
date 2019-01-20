// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(Cof.DesinWidth, Cof.DesinHeight, WebGL);
        Laya.stage.alignH = Laya.Stage.ALIGN_LEFT;
        Laya.stage.alignV = Laya.Stage.ALIGN_TOP;
        Laya.stage.scaleMode = "noscale";
        Laya.stage.bgColor = "#232628";
        Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
        Laya.Stat.show();
        this.loadAsset();
    }
    GameMain.prototype.loadAsset = function () {
        var assets = [
            "res/atlas/item.atlas",
            "res/atlas/panda.atlas",
            "res/atlas/comp.atlas",
            "BG.jpg",
            "PlayerAnimation.ani",
            "CoinAnimation.ani",
            "ShieldAnimation.ani",
            "MagnentAnimation.ani",
            "EatEffectAnimation.ani"
        ];
        Laya.loader.load(assets, Laya.Handler.create(this, this.onLoadComplete));
    };
    GameMain.prototype.onLoadComplete = function () {
        new Main();
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map