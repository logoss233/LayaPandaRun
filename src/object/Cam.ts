var $cam:Cam    
class Cam{
    
    
    private viewRectangle=new Rectangle() //裁剪视窗用，重复使用
    camLayer:Sprite
    game:Game
    player
    playerOffX=0
    startX
    //distance
    private _distance=0
    set distance(value){
        if (this._distance==value){
            return
        }
        this._distance=value
        this.game.distance=this.distance
    }
    get distance(){
        return this._distance
    }
    ///camX
    private _camX=0
    set camX(value){
        this._camX=value
        //裁剪
        this.viewRectangle.x=value
        this.camLayer.scrollRect=this.viewRectangle
        
    }
    get camX(){
        return this._camX
    }



    start(camLayer:Sprite,player,game:Game){
        $cam=this
        this.game=game

        this.camLayer=camLayer
        this.viewRectangle.x=0
        this.viewRectangle.y=0
        this.viewRectangle.width=Cof.DesinWidth
        this.viewRectangle.height=Cof.DesinHeight

        this.player=player

        //
        this.camX=0
        this.playerOffX=this.camX-this.player.x
        this.startX=0
    }

    update(){
        if (this.player.x+this.playerOffX>this.camX){
            this.camX=this.player.x+this.playerOffX
            this.distance=Math.floor(this.camX/10)
        }
    }

}

