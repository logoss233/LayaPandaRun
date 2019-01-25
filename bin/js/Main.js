var Main = /** @class */ (function () {
    function Main() {
        this.game = new Game();
        Laya.stage.addChild(this.game);
        this.game.on("restart", this, this.restart);
        this.game.start();
        //实例化排行榜
        var rankView = new OpenView();
        Laya.stage.addChild(rankView);
        rankView.zOrder = 1000;
    }
    Main.prototype.restart = function () {
        //删掉game，实例化一个新的
        this.game.destroy();
        this.game = new Game();
        Laya.stage.addChild(this.game);
        this.game.on("restart", this, this.restart);
        this.game.start();
    };
    return Main;
}());
//# sourceMappingURL=Main.js.map