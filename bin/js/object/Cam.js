var $cam;
var Cam = /** @class */ (function () {
    function Cam() {
        this.viewRectangle = new Rectangle(); //裁剪视窗用，重复使用
        this.playerOffX = 0;
        //distance
        this._distance = 0;
        ///camX
        this._camX = 0;
    }
    Object.defineProperty(Cam.prototype, "distance", {
        get: function () {
            return this._distance;
        },
        set: function (value) {
            if (this._distance == value) {
                return;
            }
            this._distance = value;
            this.game.distance = this.distance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cam.prototype, "camX", {
        get: function () {
            return this._camX;
        },
        set: function (value) {
            this._camX = value;
            //裁剪
            this.viewRectangle.x = value;
            this.camLayer.scrollRect = this.viewRectangle;
        },
        enumerable: true,
        configurable: true
    });
    Cam.prototype.start = function (camLayer, player, game) {
        $cam = this;
        this.game = game;
        this.camLayer = camLayer;
        this.viewRectangle.x = 0;
        this.viewRectangle.y = 0;
        this.viewRectangle.width = Cof.DesinWidth;
        this.viewRectangle.height = Cof.DesinHeight;
        this.player = player;
        //
        this.camX = 0;
        this.playerOffX = this.camX - this.player.x;
        this.startX = 0;
    };
    Cam.prototype.update = function () {
        if (this.player.x + this.playerOffX > this.camX) {
            this.camX = this.player.x + this.playerOffX;
            this.distance = Math.floor(this.camX / 10);
        }
    };
    return Cam;
}());
//# sourceMappingURL=Cam.js.map