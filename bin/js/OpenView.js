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
var $openView;
/**
* 管理子域显示界面
*/
var OpenView = /** @class */ (function (_super) {
    __extends(OpenView, _super);
    function OpenView() {
        var _this = _super.call(this) || this;
        $openView = _this;
        if (Laya.Browser.onMiniGame) {
            _this.openDataContext = Laya.Browser.window.wx.getOpenDataContext();
            _this.tex = new Laya.Texture(Laya.Browser.window.sharedCanvas);
            _this.tex.bitmap.alwaysChange = false; //小程序使用，非常费，这个参数可以根据自己的需求适当调整，如果内容不变可以不用设置成true
            _this.openSpr.graphics.drawTexture(_this.tex, 0, 0, Laya.stage.width, Laya.stage.height);
        }
        _this.visible = false;
        _this.backButton.on(Laya.Event.CLICK, _this, _this.closeRank);
        return _this;
    }
    /**
     * 上传分数
     * @param score
     */
    OpenView.prototype.setScore = function (score) {
        if (!Laya.Browser.onMiniGame) {
            return;
        }
        this.openDataContext.postMessage({ "cmd": "setScore", "score": score });
    };
    OpenView.prototype.openRank = function () {
        this.visible = true;
        if (!Laya.Browser.onMiniGame) {
            return;
        }
        this.tex.bitmap.alwaysChange = true;
        this.openDataContext.postMessage({ "cmd": "showRank" });
    };
    OpenView.prototype.closeRank = function () {
        this.visible = false;
        if (!Laya.Browser.onMiniGame) {
            return;
        }
        this.tex.bitmap.alwaysChange = false;
        //打开广告
        $bannerManager.show();
    };
    return OpenView;
}(ui.rankViewUI));
//# sourceMappingURL=OpenView.js.map