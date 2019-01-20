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
var $game;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    //----------初始化---------
    function Game() {
        var _this = _super.call(this) || this;
        _this.distance = 0;
        $game = _this;
        _this.camLayer = new Sprite();
        _this.addChild(_this.camLayer);
        _this.uiLayer = new Sprite();
        _this.addChild(_this.uiLayer);
        _this.bg = new BG();
        _this.camLayer.addChild(_this.bg);
        _this.itemPlace = new Sprite();
        _this.camLayer.addChild(_this.itemPlace);
        _this.itemManager = new ItemManager();
        _this.itemManager.start(_this);
        _this.player = new Player();
        _this.camLayer.addChild(_this.player);
        _this.player.pos(200, 300);
        _this.player.start(_this);
        _this.cam = new Cam();
        _this.cam.start(_this.camLayer, _this.player, _this);
        Laya.timer.frameLoop(1, _this, _this.update);
        //test
        for (var i = 1; i <= 6; i++) {
            var fl = new Floor();
            fl.start(i);
            fl.pos(i * 64, 400);
            _this.itemManager.append(fl, "floor");
        }
        return _this;
    }
    Game.prototype.start = function () {
    };
    Game.prototype.update = function () {
        this.player.update();
    };
    return Game;
}(Sprite));
//# sourceMappingURL=Game.js.map