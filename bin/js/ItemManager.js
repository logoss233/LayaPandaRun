var ItemManager = /** @class */ (function () {
    function ItemManager() {
        this.itemList = [];
        this.floorList = [];
        this.eatItemList = [];
        this.enemyList = [];
        this.bgItemList = [];
    }
    ItemManager.prototype.start = function (game) {
        this.game = game;
        this.itemPlace = game.itemPlace;
    };
    ItemManager.prototype.append = function (item, type) {
        this.itemList.push(item);
        var list = this._getTypeList(type);
        if (list == null) {
            console.log("添加物品，类型不合法");
            return;
        }
        list.push(item);
        this.itemPlace.addChild(item);
    };
    ItemManager.prototype.remove = function (item, type) {
        var index = this.itemList.indexOf(item);
        if (index == -1) {
            console.log("删除物品，没有找到");
            return;
        }
        this.itemList.splice(index, 1);
        var list = this._getTypeList(type);
        if (list == null) {
            console.log("删除物品，类型不合法");
            return;
        }
        index = list.indexOf(item);
        if (index == -1) {
            console.log("删除物品，没有找到");
            return;
        }
        list.splice(index, 1);
        this.itemPlace.removeChild(item);
        return item;
    };
    ItemManager.prototype._getTypeList = function (type) {
        var list = null;
        if (type == "floor") {
            list = this.floorList;
        }
        else if (type == "eat") {
            list = this.eatItemList;
        }
        else if (type == "enemy") {
            list = this.enemyList;
        }
        else if (type == "bg") {
            list = this.bgItemList;
        }
        return list;
    };
    return ItemManager;
}());
//# sourceMappingURL=ItemManager.js.map