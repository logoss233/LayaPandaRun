var BannerManager = /** @class */ (function () {
    function BannerManager() {
        this.banner = null;
    }
    BannerManager.prototype.changeBanner = function () {
        if (this.banner) {
            this.banner.destroy();
        }
        // 创建 Banner 广告实例，提前初始化
        if (Laya.Browser.onMiniGame) {
            var wx = Laya.Browser.window.wx;
            var winSize = wx.getSystemInfoSync();
            var screenWidth = winSize.screenWidth;
            var screenHeight = winSize.screenHeight;
            var bannerWidth = 300;
            var bannerHeight = 100;
            this.banner = wx.createBannerAd({
                adUnitId: 'adunit-6ac229ee1b48e7a9',
                style: {
                    left: (screenWidth - bannerWidth) / 2,
                    top: screenHeight - bannerHeight,
                    width: bannerWidth
                }
            });
        }
    };
    BannerManager.prototype.show = function () {
        if (this.banner) {
            this.banner.show();
        }
    };
    BannerManager.prototype.hide = function () {
        if (this.banner) {
            this.banner.hide();
        }
    };
    return BannerManager;
}());
var $bannerManager = new BannerManager();
//# sourceMappingURL=BannerManager.js.map