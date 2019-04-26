
class BannerManager{
    banner=null
    constructor(){

    }
    changeBanner(){
        if(this.banner){
            this.banner.destroy()
        }
        // 创建 Banner 广告实例，提前初始化
        if(Laya.Browser.onMiniGame){
            let wx=Laya.Browser.window.wx
            let winSize = wx.getSystemInfoSync();
            let screenWidth=winSize.screenWidth
            let screenHeight=winSize.screenHeight
            let bannerWidth=300
            let bannerHeight=100

            this.banner = wx.createBannerAd({
                adUnitId: 'adunit-6ac229ee1b48e7a9',
                style: {
                    left: (screenWidth-bannerWidth)/2,
                    top: screenHeight-bannerHeight,
                    width: bannerWidth
                }
            })   
        }
    }

    show(){
        if(this.banner){
            this.banner.show()
        }
    }
    hide(){
        if(this.banner){
            this.banner.hide()
        }
    }
}

var $bannerManager=new BannerManager()