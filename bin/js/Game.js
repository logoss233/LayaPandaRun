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
        _this.floorRight = 0; //地板最右的位置
        _this.last_mapData = null; //防止重复场景用
        _this.levelChangeDistance = 1000;
        //------------状态
        _this._state = "";
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
        _this.player.pos(350, 300);
        _this.player.start(_this);
        _this.cam = new Cam();
        _this.cam.start(_this.camLayer, _this.player, _this);
        _this.tileParser = new TileParser();
        _this.tileParser.start(_this.itemPlace);
        _this.createFloor(0);
        Laya.timer.frameLoop(1, _this, _this.update);
        _this.player.isRun = true;
        return _this;
    }
    Object.defineProperty(Game.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.start = function () {
    };
    Game.prototype.update = function () {
        this.player.update();
        this.cam.update();
        this.bg.update(this.cam.camX);
        this.itemManager.update(this.cam.camX);
        //自动创建地图
        var camRight = this.cam.camX + Cof.DesinWidth;
        if (camRight > this.floorRight - 100) {
            var level = Math.floor(this.distance / this.levelChangeDistance) + 1;
            var lv = this.chooseLv(level);
            this.createFloor(lv);
        }
    };
    //---------功能
    Game.prototype.createFloor = function (lv) {
        console.log("createFloor:", lv);
        if (lv > $data.mapLab.length - 1) {
            lv = $data.mapLab.length - 1;
        }
        var mapList = $data.mapLab[lv];
        var index = Math.floor(Math.random() * mapList.length);
        var mapData = mapList[index];
        if (this.last_mapData == mapData) {
            index = Math.floor(Math.random() * mapList.length);
            mapData = mapList[index];
        }
        this.last_mapData = mapData;
        var jsonObj = Laya.loader.getRes(mapData);
        this.floorRight = this.tileParser.parse(jsonObj, this.floorRight);
    };
    Game.prototype.chooseLv = function (level) {
        var lv = 0;
        var r = Math.random();
        if (level == 1) {
            if (r < 0.7) {
                lv = 1;
            }
            else {
                lv = 2;
            }
        }
        else if (level == 2) {
            if (r < 0.4) {
                lv = 1;
            }
            else if (r < 0.8) {
                lv = 2;
            }
            else {
                lv = 3;
            }
        }
        else if (level == 3) {
            if (r < 0.2) {
                lv = 1;
            }
            else if (r < 0.6) {
                lv = 2;
            }
            else {
                lv = 3;
            }
        }
        else if (level == 4) {
            if (r < 0.1) {
                lv = 1;
            }
            else if (r < 0.5) {
                lv = 2;
            }
            else {
                lv = 3;
            }
        }
        else if (level == 5) {
            if (r < 0.4) {
                lv = 2;
            }
            else {
                lv = 3;
            }
        }
        else if (level == 6) {
            if (r < 0.3) {
                lv = 2;
            }
            else if (r < 0.8) {
                lv = 3;
            }
            else {
                lv = 4;
            }
        }
        else if (level == 7) {
            if (r < 0.2) {
                lv = 2;
            }
            else if (r < 0.6) {
                lv = 3;
            }
            else {
                lv = 4;
            }
        }
        else if (level == 8) {
            if (r < 0.4) {
                lv = 3;
            }
            else {
                lv = 4;
            }
        }
        else if (level == 9) {
            if (r < 0.3) {
                lv = 3;
            }
            else {
                lv = 4;
            }
        }
        else if (level == 10) {
            if (r < 0.2) {
                lv = 3;
            }
            else {
                lv = 4;
            }
        }
        else {
            lv = 4;
        }
        return lv;
    };
    return Game;
}(Sprite));
//# sourceMappingURL=Game.js.map