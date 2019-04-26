var $openView:OpenView
 /**
 * 管理子域显示界面
 */
class OpenView extends ui.rankViewUI{
    openDataContext
    tex:Laya.Texture
    constructor(){
        super()
        $openView=this

        if (Laya.Browser.onMiniGame){
            this.openDataContext=Laya.Browser.window.wx.getOpenDataContext()
            
            this.tex= new Laya.Texture(Laya.Browser.window.sharedCanvas);
            this.tex.bitmap.alwaysChange = false;//小程序使用，非常费，这个参数可以根据自己的需求适当调整，如果内容不变可以不用设置成true
            this.openSpr.graphics.drawTexture(this.tex,0,0,Laya.stage.width,Laya.stage.height);
        }
            this.visible=false

            this.backButton.on(Laya.Event.CLICK,this,this.closeRank)
        
    }
    /**
     * 上传分数
     * @param score 
     */
    setScore(score){
        if(!Laya.Browser.onMiniGame){
            return
        }
        this.openDataContext.postMessage({"cmd":"setScore","score":score})
    }
    openRank(){
        this.visible=true
        if(!Laya.Browser.onMiniGame){
            return
        }
        
        this.tex.bitmap.alwaysChange=true
        this.openDataContext.postMessage({"cmd":"showRank"})
    }
    closeRank(){
        this.visible=false
        if(!Laya.Browser.onMiniGame){
            return
        }
        this.tex.bitmap.alwaysChange=false

        //打开广告
        $bannerManager.show()
    }
}