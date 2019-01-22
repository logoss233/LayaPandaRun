class Magnent extends EatItem{
    
    constructor(){
        super()
        this.poolTag="Magnent"

        var ani=new Animation()
        this.addChild(ani)
        ani.loadAnimation("MagnentAnimation.ani")
        ani.play(0,true,"ani1")
        this.setBounds(new Rectangle(2,2,60,60))
    }
    eat(){
        //播放声音
        SoundManager.playSound("res/sound/item.mp3")
        //生成特效
        var effect=Pool.getItemByClass("EatEffect",EatEffect)
        $game.itemPlace.addChild(effect)
        effect.pos(this.x+32,this.y+32)
        effect.start()
        //效果
        $game.player.isMagnent=true
        //删除自己
        this.delete()
    }


}