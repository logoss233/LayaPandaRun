class Coin extends EatItem{
    speed=15 //被磁铁吸引的速度
    magnent_distance=800 //吸引的范围
    constructor(){
        super()
        this.poolTag="Coin"

        var ani=new Animation()
        this.addChild(ani)
        ani.loadAnimation("CoinAnimation.ani")
        ani.play(0,true,"ani1")
        this.setBounds(new Rectangle(2,2,60,60))
    }
    eat(){
        //播放声音

        //生成特效
        var effect=Pool.getItemByClass("EatEffect",EatEffect)
        $game.itemPlace.addChild(effect)
        effect.pos(this.x+32,this.y+32)
        effect.start()
        //效果
        //加分
        
        //删除自己
        this.delete()
    }

}