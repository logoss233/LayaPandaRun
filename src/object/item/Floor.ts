/**
 * start函数关系到它的类型
 * 必须先start再加入场景
 */
class Floor extends Item{
    static textureList=[]
    static firstRun=true //第一次运行
    
    constructor(){
        super()
        this.poolTag="Floor"

        //贴图
        if(Floor.firstRun){
            Floor.firstRun=false
            for (let i=1;i<=8;i++){
                var path="item/"+i+".png"
                var tex=Laya.loader.getRes(path)
                Floor.textureList.push(tex)
            }
        }

        //设置边框(碰撞用)
        this.setBounds(new Rectangle(0,0,64,15))

    }

    /**
     * 设置编号  必须先start再放入场景
     * @param num 编号 决定显示图片1-8
     */
    start(num:number){
        var tex=Floor.textureList[num-1]
        this.graphics.clear()
        this.graphics.drawTexture(tex)
        if(num<=6){
            this.itemType="floor"
        }else{
            this.itemType="bg"
        }
    }

}