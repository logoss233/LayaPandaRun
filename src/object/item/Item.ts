class Item extends Sprite{
    itemType=""   //floor eat enemy bg
    poolTag=""   //在对象池中的标志
    constructor(){
        super()
    }
    /**
     * 每帧检测 如果离开视野，删除自己
     */
    removeCheck(camX){
        if(this.x<camX-100){
            //删除自己
            this.delete()
        }
    }
    /**
     *重写 删除
     */
    delete(){
        $game.itemManager.remove(this)
        Laya.Pool.recover(this.poolTag,this)
    }
}