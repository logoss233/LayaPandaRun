var $data;
/**
 * 游戏静态数据
 */
var GameData = /** @class */ (function () {
    function GameData() {
        //地图数据
        /**
         * #mapLab结构
     #[
     #	[map,map,map]   等级0的地图数组
     #	[map,map,map]   等级1的地图数组
     #]
         */
        this.mapLab = [];
        $data = this;
        this.loadMap();
    }
    GameData.prototype.loadMap = function () {
        this.mapLab = [
            [
                "res/map/0-0.json",
                "res/map/0-1.json",
                "res/map/0-2.json",
                "res/map/0-3.json",
                "res/map/0-4.json",
                "res/map/0-5.json",
                "res/map/0-6.json",
                "res/map/0-7.json",
            ],
            [
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
            ],
            [
                "res/map/2-0.json",
                "res/map/2-1.json",
                "res/map/2-2.json",
                "res/map/2-3.json",
                "res/map/2-4.json",
                "res/map/2-5.json",
                "res/map/2-6.json",
                "res/map/2-7.json",
                "res/map/2-8.json",
            ],
            [
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
            ],
            [
                "res/map/4-0.json",
                "res/map/4-1.json",
                "res/map/4-2.json",
                "res/map/4-3.json",
                "res/map/4-4.json",
                "res/map/4-5.json",
                "res/map/4-6.json",
                "res/map/4-7.json",
                "res/map/4-8.json",
            ]
        ];
    };
    return GameData;
}());
//# sourceMappingURL=GameData.js.map