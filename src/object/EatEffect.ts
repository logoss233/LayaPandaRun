class EatEffect extends Sprite{
    ani:Animation
    constructor(){
        super()
        this.ani=new Animation()
        this.addChild(this.ani)
        this.ani.loadAnimation("EatEffectAnimation.ani")
        this.ani.pos(-75/2,-75/2)  //中心对齐
        this.ani.on("complete",this,this.onAniComplete)
    }

    start(){
        this.ani.play(0,false,"ani1")
    }

    onAniComplete(){
        this.removeSelf()
        Pool.recover("EatEffect",this)
    }
}