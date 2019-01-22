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
            "res/atlas/comp.atlas",
            "PlayerAnimation.ani",
            "CoinAnimation.ani",
            "ShieldAnimation.ani",
            "MagnentAnimation.ani",
            "EatEffectAnimation.ani",
            "res/sound/coin1.mp3",
            "res/sound/coin2.mp3",
            "res/sound/coin3.mp3",
            "res/sound/item.mp3",
            "res/sound/loopStart.mp3",
            "res/sound/loop1.mp3",
            "res/sound/loop2.mp3",
            "res/sound/loop3.mp3",
            "res/sound/loopEnd.mp3",
            "res/map/0-0.json",
            "res/map/0-1.json",
            "res/map/0-2.json",
            "res/map/0-3.json",
            "res/map/0-4.json",
            "res/map/0-5.json",
            "res/map/1-0.json",
            "res/map/1-1.json",
            "res/map/1-2.json",
            "res/map/1-3.json",
            "res/map/1-4.json",
            "res/map/1-5.json",
            "res/map/1-6.json",
            "res/map/1-7.json",
            "res/map/1-8.json",
            "res/map/1-9.json",
            "res/map/2-0.json",
            "res/map/2-1.json",
            "res/map/2-2.json",
            "res/map/2-3.json",
            "res/map/2-4.json",
            "res/map/2-5.json",
            "res/map/2-6.json",
            "res/map/2-7.json",
            "res/map/2-8.json",
            "res/map/3-0.json",
            "res/map/3-1.json",
            "res/map/3-2.json",
            "res/map/3-3.json",
            "res/map/3-4.json",
            "res/map/3-5.json",
            "res/map/3-6.json",
            "res/map/3-7.json",
            "res/map/3-8.json",
            "res/map/3-9.json",
            "res/map/3-10.json",
            "res/map/3-11.json",
            "res/map/4-0.json",
            "res/map/4-1.json",
            "res/map/4-2.json",
            "res/map/4-3.json",
            "res/map/4-4.json",
            "res/map/4-5.json",
            "res/map/4-6.json",
            "res/map/4-7.json",
            "res/map/4-8.json",
        ];
        Laya.loader.load(assets, Laya.Handler.create(this, this.onLoadComplete));
    };
    GameMain.prototype.onLoadComplete = function () {
        //把data准备好
        new GameData();
        new MusicManager();
        //开始游戏
        new Main();
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map