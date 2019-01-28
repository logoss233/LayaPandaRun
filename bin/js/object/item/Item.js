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
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super.call(this) || this;
        _this.itemType = ""; //floor eat enemy bg
        _this.poolTag = ""; //在对象池中的标志
        return _this;
    }
    /**
     * 每帧检测 如果离开视野，删除自己
     */
    Item.prototype.removeCheck = function (camX) {
        if (this.x < camX - 100) {
            //删除自己
            this.delete();
        }
    };
    /**
     *重写 删除
     */
    Item.prototype.delete = function () {
        $game.itemManager.remove(this);
        Laya.Pool.recover(this.poolTag, this);
    };
    return Item;
}(Sprite));
//# sourceMappingURL=Item.js.map