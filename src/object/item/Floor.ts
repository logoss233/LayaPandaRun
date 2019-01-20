class Floor extends Sprite{
    static textureList=[]
    static firstRun=true //第一次运行
    
    constructor(){
        super()
        //贴图
        if(Floor.firstRun){
            Floor.firstRun=false
            for (let i=1;i<=6;i++){
                var path="item/"+i+".png"
                var tex=Laya.loader.getRes(path)
                Floor.textureList.push(tex)
            }
        }

        //设置边框(碰撞用)
        this.setBounds(new Rectangle(0,0,64,15))

    }

    /**
     * 设置编号
     * @param num 编号 决定显示图片1-6
     */
    start(num:number){
        var tex=Floor.textureList[num-1]
        this.graphics.clear()
        this.graphics.drawTexture(tex)
    }
}