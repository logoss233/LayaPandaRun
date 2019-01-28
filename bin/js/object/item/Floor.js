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
/**
 * start函数关系到它的类型
 * 必须先start再加入场景
 */
var Floor = /** @class */ (function (_super) {
    __extends(Floor, _super);
    function Floor() {
        var _this = _super.call(this) || this;
        _this.poolTag = "Floor";
        //贴图
        if (Floor.firstRun) {
            Floor.firstRun = false;
            for (var i = 1; i <= 8; i++) {
                var path = "item/" + i + ".png";
                var tex = Laya.loader.getRes(path);
                Floor.textureList.push(tex);
            }
        }
        //设置边框(碰撞用)
        _this.setBounds(new Rectangle(0, 0, 64, 15));
        return _this;
    }
    /**
     * 设置编号  必须先start再放入场景
     * @param num 编号 决定显示图片1-8
     */
    Floor.prototype.start = function (num) {
        var tex = Floor.textureList[num - 1];
        this.graphics.clear();
        this.graphics.drawTexture(tex);
        if (num <= 6) {
            this.itemType = "floor";
        }
        else {
            this.itemType = "bg";
        }
    };
    Floor.textureList = [];
    Floor.firstRun = true; //第一次运行
    return Floor;
}(Item));
//# sourceMappingURL=Floor.js.map